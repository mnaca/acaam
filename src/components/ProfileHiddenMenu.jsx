import React from "react";
import styled from "styled-components";
import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const HiddenMenu = styled.ul`
  position: absolute;
  right: 0;
  top: 50px;
  list-style-type: none;
  background-color: white;
  margin: 0;
  padding-left: 0;
  width: 150px;
  margin-top: 10px;
  border-radius: 4.5%;
  overflow: hidden;
  border: 2px solid #364f6b;
`;

export const HiddenMenuItem = styled.li`
  cursor: pointer;
  padding: 9px 0;
  transition: 0.3s;
  text-align: center;
  &:hover {
    background-color: rgba(54, 79, 107, 0.2);
  }
`;

const StyledLink = styled(Link)`
  display: block;
  cursor: pointer;
  padding: 9px 0;
  transition: 0.3s;
  text-align: center;
  text-decoration: none;
  color: #364f6b;
  &:hover {
    background-color: rgba(54, 79, 107, 0.2);
  }
`

function ProfileHiddenMenu(props) {
  const opened = useSelector((state) => state.profileHiddenMenuOpened);

  return opened ? (
    <HiddenMenu>
      <StyledLink to="/login">Sign in/Sign up</StyledLink>
      <StyledLink to="/host">Host your home</StyledLink>
    </HiddenMenu>
  ) : null;
}

export default connect()(ProfileHiddenMenu);
