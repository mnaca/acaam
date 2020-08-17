import React, { useEffect, useState } from "react";
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
import { createCloseAllMenu, createSetUser, createLoadAllHomes } from "../actions/actions";
import Footer from "./Footer";
import { Switch, Route, Redirect } from "react-router-dom";
import AllProposals from "./AllProposals";
import Login from "./Login";
import { auth, db } from "../firebase";
import HostHome from "./HostHome";
import Register from "./Register";
import ProfilePage from "./ProfilePage";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const BannerWrapper = styled.div`
  background-image: ${(props) =>
    props.url ? `url(${props.url})` : `url(${background})`};
  background-repeat: no-repeat;
  background-size: 100%;
  height: ${(props) => props.imageHeight}px;
  padding: 30px 30px;
  transition: 1s;
`;

const MainCmp = styled.div`
  position: relative;
  min-height: 100vh;
`;

function Main() {
  const userInfo = useSelector((state) => state.userInfo);

  const [imageHeight, setImageHeight] = useState(
    (window.innerWidth * 700) / 1920 - 60
  );
  const dispatch = useDispatch();

  useEffect(
    function () {
      // JSON.parse(temp1.data().homes[0])

      db.collection("offers")
        .doc("apartments")
        .get()
        .then((doc) => {
          const apartments = doc.data().homes;
          db.collection("offers")
            .doc("vacationRentals")
            .get()
            .then((doc) => {
              const vacationRentals = doc.data().homes;
              db.collection("offers")
                .doc("sharedRooms")
                .get()
                .then((doc) => {
                  const sharedRooms = doc.data().homes;
                  dispatch(createLoadAllHomes(apartments, vacationRentals, sharedRooms));
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

    window.onresize = () => {
      setImageHeight((window.innerWidth * 700) / 1920 - 60);
    };

    return () => {
      window.onclick = null;
      window.onresize = null;
    };
  }, [dispatch]);
  return (
    <MainCmp>
      <HeaderWrapper>
        <Header />
        <Profile />
      </HeaderWrapper>
      <Switch>
        <Route path="/apartments">
          <BannerWrapper
            imageHeight={imageHeight}
            url={apartmentsBanner}
          ></BannerWrapper>
          <AllProposals type="apartments" />
        </Route>
        <Route path="/rentals">
          <BannerWrapper
            imageHeight={imageHeight}
            url={vacationRentalsBanner}
          ></BannerWrapper>
          <AllProposals type="vacationRentals" />
        </Route>
        <Route path="/rooms">
          <BannerWrapper
            imageHeight={imageHeight}
            url={sharedRoomsBanner}
          ></BannerWrapper>
          <AllProposals type="sharedRooms" />
        </Route>
        <Route path="/host">
          {auth.currentUser ? <HostHome /> : <Redirect to="/" />}
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
          <BannerWrapper imageHeight={imageHeight}>
            <Banner />
          </BannerWrapper>
          <Categories />
        </Route>
        <Redirect to="/" />
      </Switch>
      <Footer />
    </MainCmp>
  );
}

export default connect()(Main);
