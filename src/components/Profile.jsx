import React from "react";
import ProfileHiddenMenu from "./ProfileHiddenMenu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";
import styled from "styled-components";
import Language from "./Language";
import { connect, useDispatch, useSelector } from "react-redux";
import { createToggleProfileHiddenMenu } from "../actions/actions";
import profileDefaultImageMale from "../images/profileDefaultImageMale.svg";
import Search from "./Search";
import { auth } from "../firebase";

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: stretch;
  position: relative;
`;

const ProfileMenu = styled.div`
  position: relative;
  display: inline-flex;
  padding: 7px 12px;
  align-items: center;
  cursor: pointer;
  background-color: white;
  border: 2px solid #364f6b;
  border-radius: 10%;
  margin-left: 10px;
  &:hover {
    background-color: rgba(54, 79, 107, 0.1);
  }
`;

const StyledMenuIcon = styled(MenuIcon)`
  margin-right: 10px;
  color: #364f6b;
`;

const StyledUserIcon = styled(AccountCircleIcon)`
  color: #364f6b;
`;

function Profile(props) {
  const dispatch = useDispatch();

  const onHandleMenu = (event) => {
    event.stopPropagation();
    dispatch(createToggleProfileHiddenMenu());
  };
  
  const userInfo = useSelector((state) => state.userInfo)

  return (
    <ProfileWrapper>
      <h4 style={{display: "flex", alignItems: "center"}}>{userInfo ? userInfo.mail : "Not Loginned"}</h4>
      <Search />
      <Language />
      <ProfileMenu onClick={onHandleMenu}>
        <StyledMenuIcon />
        {!auth.currentUser ? <StyledUserIcon style={{fontSize: 30}} /> : <img style={{height: 30}} src={profileDefaultImageMale} alt="" /> }
        <ProfileHiddenMenu />
      </ProfileMenu>
    </ProfileWrapper>
  );
}

export default connect()(Profile);
