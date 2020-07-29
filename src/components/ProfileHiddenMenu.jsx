import React from "react";
import styled from "styled-components";

const HiddenMenu = styled.ul`
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

const HiddenMenuItem = styled.li`
  cursor: pointer;
  padding: 9px 20px;
  &:hover {
    background-color: #dedede;
  };
`;

export default function ProfileHiddenMenu(props) {
  return props.opened ? (
    <HiddenMenu>
      <HiddenMenuItem>Register</HiddenMenuItem>
      <HiddenMenuItem>Sign in</HiddenMenuItem>
      <HiddenMenuItem>Register</HiddenMenuItem>
      <HiddenMenuItem lastChild>Sign in</HiddenMenuItem>
    </HiddenMenu>
  ) : null;
}
