import React from "react";
import logo from "../images/logo.png";
import Profile from "./Profile";
import styled from "styled-components";

const HeaderCmp = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  margin-top: 7.5px;
`;

export default function Header(props) {
  return (
    <HeaderCmp>
      <Logo>
        <img src={logo} alt="Logo" width={60} />
      </Logo>
      <Profile />
    </HeaderCmp>
  );
}
