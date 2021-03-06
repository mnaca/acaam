import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { createSetUser } from "../actions/actions";

export const HiddenMenu = styled.ul`
  position: absolute;
  z-index: 1;
  right: 0;
  bottom: -7.05vw;
  list-style-type: none;
  background-color: white;
  margin: 0;
  padding-left: 0;
  width: 7.81vw;
  margin-top: 0.52vw;
  border-radius: 4.5%;
  overflow: hidden;
  border: 0.104vw solid #364f6b;
`;

export const HiddenMenuItem = styled.li`
  cursor: pointer;
  padding: 0.46875vw 0;
  transition: 0.3s;
  text-align: center;
  background-color: white;
  &:hover {
    background-color: rgba(54, 79, 107, 0.2);
  }
`;

const StyledLink = styled(Link)`
  display: block;
  cursor: pointer;
  font-size: 0.9vw;
  padding: 0.46875vw 0;
  transition: 0.3s;
  text-align: center;
  text-decoration: none;
  color: #364f6b;
  &:hover {
    background-color: rgba(54, 79, 107, 0.2);
  }
`;

function ProfileHiddenMenu(props) {
  const opened = useSelector((state) => state.profileHiddenMenuOpened);
  const dispatch = useDispatch();

  return opened ? (
    <HiddenMenu>
      {auth.currentUser ? (
        <>
          <StyledLink to={`/profile/${auth.currentUser.uid}`}>
            Profile
          </StyledLink>
          <StyledLink
            onClick={() =>
              auth
                .signOut()
                .then(() => dispatch(createSetUser(null)))
                .catch((error) => {
                  alert(error);
                })
            }
            to="/"
          >
            Logout
          </StyledLink>
        </>
      ) : (
        <>
          <StyledLink to="/login">Sign in</StyledLink>
          <StyledLink to="/register">Register</StyledLink>
        </>
      )}
      <StyledLink to={auth.currentUser ? "/host/create" : "/login"}>Host your home</StyledLink>
    </HiddenMenu>
  ) : null;
}

export default ProfileHiddenMenu;
