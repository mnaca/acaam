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
  margin-top: 0.39vw;
`;

const LogoText = styled.span`
  position: relative;
  bottom: 1px;
  font-family: "Pacifico", cursive;
  font-size: 1.823vw;
  line-height: 0;
  color: #364f6b;
`;

export default function Header(props) {
  return (
    <HeaderCmp>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Logo>
          <img src={logo} alt="Logo" style={{width: "3.646vw"}} />
          <LogoText>NACA</LogoText>
        </Logo>
      </Link>
    </HeaderCmp>
  );
}
