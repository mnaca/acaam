import React from "react";
import styled from "styled-components";
import { connect, useSelector } from "react-redux";

export const HiddenMenu = styled.ul`
  position: absolute;
  top: 46px;
  list-style-type: none;
  background-color: white;
  margin: 0;
  padding-left: 0;
  width: 100%;
  margin-top: 10px;
  border-radius: 4.5%;
  overflow: hidden;
`;

export const HiddenMenuItem = styled.li`
  cursor: pointer;
  padding: 9px 0;
  transition: 0.3s;
  &:hover {
    background-color: #dedede;
  };
  text-align: center;
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
