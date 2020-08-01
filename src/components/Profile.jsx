import React from "react";
import ProfileHiddenMenu from "./ProfileHiddenMenu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";
import styled from "styled-components";
import Language from "./Language";
import { connect, useDispatch } from "react-redux";
import { createToggleProfileHiddenMenu } from "../actions/actions";
import Search from "./Search";

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
`;

const ProfileMenu = styled.div`
  display: inline-flex;
  padding: 7px 12px;
  align-items: center;
  cursor: pointer;
  background-color: white;
  border: 2px solid #364f6b;
  border-radius: 10%;
  margin-left: 10px;
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

  const onHandleMenu = () => {
    dispatch(createToggleProfileHiddenMenu());
  };

  return (
    <ProfileWrapper>
      <Search />
      <Language />
      <ProfileMenu onClick={onHandleMenu}>
        <StyledMenuIcon />
        <StyledUserIcon style={{fontSize: 30}} />
        <ProfileHiddenMenu />
      </ProfileMenu>
    </ProfileWrapper>
  );
}

export default connect()(Profile);
