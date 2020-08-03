import React from "react";
import logo from "../images/logo.png";
// import Profile from "./Profile";
import styled from "styled-components";
import "../App.css";
import { Link } from "react-router-dom";

const HeaderCmp = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  cursor: pointer;
  margin-top: 7.5px;
`;

const LogoText = styled.span`
  position: relative;
  bottom: 1px;
  font-family: "Pacifico", cursive;
  font-size: 35px;
  line-height: 0;
  color: #364f6b;
`;

export default function Header(props) {
  return (
    <HeaderCmp>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Logo>
          <img src={logo} alt="Logo" width={70} />
          <LogoText>NACA</LogoText>
        </Logo>
      </Link>
    </HeaderCmp>
  );
}
