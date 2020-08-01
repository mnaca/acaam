import React from "react";
import styled from "styled-components";
import { connect, useSelector } from "react-redux";

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

function ProfileHiddenMenu(props) {
  const opened = useSelector((state) => state.profileHiddenMenuOpened);

  return opened ? (
    <HiddenMenu>
      <HiddenMenuItem>Register</HiddenMenuItem>
      <HiddenMenuItem>Sign in</HiddenMenuItem>
      <HiddenMenuItem>Register</HiddenMenuItem>
      <HiddenMenuItem>Host your home</HiddenMenuItem>
    </HiddenMenu>
  ) : null;
}

export default connect()(ProfileHiddenMenu);
