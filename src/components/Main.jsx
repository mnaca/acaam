import React, { useEffect } from "react";
import Header from "./Header";
import Banner from "./Banner";
import styled from "styled-components";
import background from "../images/background.jpg";
import apartmentsBanner from "../images/apartments-banner.jpg";
import vacationRentalsBanner from "../images/vacation-rentals-banner.jpg";
import sharedRoomsBanner from "../images/shared-rooms-banner.jpg";
import Profile from "./Profile";
import Categories from "./Categories";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  createCloseAllMenu,
  createSetUser,
  createLoadAllHomes,
} from "../actions/actions";
import Footer from "./Footer";
import { Switch, Route, Redirect } from "react-router-dom";
import AllProposals from "./AllProposals";
import Login from "./Login";
import { auth, db } from "../firebase";
import HostHome from "./HostHome";
import Register from "./Register";
import ProfilePage from "./ProfilePage";
import Home from "./Home";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.42vw;
`;

const BannerWrapper = styled.div`
  background-image: ${(props) =>
    props.url ? `url(${props.url})` : `url(${background})`};
  background-repeat: no-repeat;
  background-size: 100%;
  height: 33vw;
  padding: 1.5625vw;
  transition: 1s;
`;

const MainCmp = styled.div`
  position: relative;
  min-height: 100vh;
`;

function Main() {
  const userInfo = useSelector((state) => state.userInfo);

  const dispatch = useDispatch();

  useEffect(
    function () {
      db.collection("offers")
        .doc("apartments")
        .collection("homes")
        .get()
        .then((docs) => {
          const apartments = docs.docs.map((doc) => doc.data());
          db.collection("offers")
            .doc("vacationRentals")
            .collection("homes")
            .get()
            .then((docs) => {
              const vacationRentals = docs.docs.map((doc) => doc.data());
              db.collection("offers")
                .doc("sharedRooms")
                .collection("homes")
                .get()
                .then((docs) => {
                  const sharedRooms = docs.docs.map((doc) => doc.data());
                  dispatch(
                    createLoadAllHomes(apartments, vacationRentals, sharedRooms)
                  );
                });
            });
        });

      auth.onAuthStateChanged((user) => {
        if (user) {
          db.collection("users")
            .doc(user.uid)
            .get()
            .then((doc) => {
              dispatch(createSetUser(doc.data()));
            });
        } else {
          dispatch(createSetUser(null));
        }
      });
    },
    [dispatch]
  );

  useEffect(() => {
    window.onclick = (e) => {
      dispatch(createCloseAllMenu());
    };

    return () => {
      window.onclick = null;
    };
  }, [dispatch]);
  return (
    <MainCmp>
      <HeaderWrapper>
        <Header />
        <Profile />
      </HeaderWrapper>
      <Switch>
        <Route exact path="/apartments">
          <BannerWrapper
            url={apartmentsBanner}
          ></BannerWrapper>
          <AllProposals type="apartments" />
        </Route>
        <Route path="/apartments/:homeId">
          <Home type="apartments" />
        </Route>
        <Route exact path="/rentals">
          <BannerWrapper
            url={vacationRentalsBanner}
          ></BannerWrapper>
          <AllProposals type="rentals" />
        </Route>
        <Route path="/rentals/:homeId">
          <Home type="vacationRentals" />
        </Route>
        <Route exact path="/rooms">
          <BannerWrapper
            url={sharedRoomsBanner}
          ></BannerWrapper>
          <AllProposals type="rooms" />
        </Route>
        <Route path="/rooms/:homeId">
          <Home type="sharedRooms" />
        </Route>
        <Route path="/host/:edit/:homeType?/:homeId?">
          {/* {auth.currentUser ? <HostHome /> : <Redirect to="/" />} */}
          <HostHome />
        </Route>
        <Route path="/login">
          {!auth.currentUser ? <Login /> : <Redirect to="/" />}
        </Route>
        <Route path="/register">
          {!auth.currentUser ? <Register /> : <Redirect to="/" />}
        </Route>
        <Route path="/profile/:userId">
          <ProfilePage id={userInfo ? userInfo.id : null} />
        </Route>
        <Route exact path="/">
          <BannerWrapper>
            <Banner />
          </BannerWrapper>
          <Categories />
        </Route>
        <Redirect to="/" />
      </Switch>
      <div style={{ height: "5vw" }}></div>
      <Footer />
    </MainCmp>
  );
}

export default connect()(Main);
