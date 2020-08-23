import React, { useState, useEffect } from "react";
import ProfileHiddenMenu from "./ProfileHiddenMenu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";
import styled from "styled-components";
import Language from "./Language";
import { connect, useDispatch, useSelector } from "react-redux";
import { createToggleProfileHiddenMenu } from "../actions/actions";
import Search from "./Search";
import { auth, storage, db } from "../firebase";

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ProfileMenu = styled.div`
  position: relative;
  display: inline-flex;
  padding: 0.365vw 0.625vw;
  align-items: center;
  cursor: pointer;
  background-color: white;
  border: 0.104vw solid #364f6b;
  border-radius: 10%;
  margin-left: 0.52vw;
  &:hover {
    background-color: rgba(54, 79, 107, 0.1);
  }
`;

const StyledMenuIcon = styled(MenuIcon)`
  margin-right: 0.52vw;
  color: #364f6b;
`;

const StyledUserIcon = styled(AccountCircleIcon)`
  color: #364f6b;
`;

function Profile(props) {
  const [profileImage, setProfileImage] = useState();
  const userInfo = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth.currentUser && userInfo) {
      db.collection("users")
        .doc(auth.currentUser.uid)
        .get()
        .then((user) => {
          const storageRef = storage.ref();
          const profileImagesRef = storageRef.child(
            "profile-images/" + userInfo.profileImage
          );
          profileImagesRef.getDownloadURL().then((url) => setProfileImage(url));
        });
    }
  }, [userInfo]);

  const onHandleMenu = (event) => {
    event.stopPropagation();
    dispatch(createToggleProfileHiddenMenu());
  };

  return (
    <ProfileWrapper>
      <Search searchOpened={props.searchOpened} setSearchOpened={props.setSearchOpened} />
      <Language />
      <ProfileMenu onClick={onHandleMenu}>
        <StyledMenuIcon style={{ width: "1.5625vw", height: "2.31vw" }} />
        {!auth.currentUser ? (
          <StyledUserIcon style={{ fontSize: "1.5625vw" }} />
        ) : (
          <div
            style={{ display: "flex", height: "1.5625vw", width: "1.5625vw" }}
          >
            <img
              style={{
                height: "1.5625vw",
                maxWidth: "100%",
                objectFit: "cover",
              }}
              src={profileImage}
              alt=""
            />
          </div>
        )}
        <ProfileHiddenMenu />
      </ProfileMenu>
    </ProfileWrapper>
  );
}

export default connect()(Profile);
