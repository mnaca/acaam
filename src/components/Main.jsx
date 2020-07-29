import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import background from "../images/background.jpg";
import styled from "styled-components";

const Wrapper = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: 100%;
  height: 700px;
`;

const HeaderWrapper = styled.div`
  padding: 0 20px
`;

export default function Main(props) {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <div>
        <Banner />
      </div>
    </Wrapper>
  );
}
