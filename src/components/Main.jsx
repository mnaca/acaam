import React, { useEffect, useState } from "react";
import Header from "./Header";
import Banner from "./Banner";
import styled from "styled-components";
import background from "../images/background.jpg";
import Profile from "./Profile";
import Categories from "./Categories";
import { Switch, Route } from "react-router-dom";
// import Background from "./Background";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const BannerWrapper = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: 100%;
  height: ${(props) => props.imageHeight}px;
  padding: 30px 30px;
  transition: 1s;
`;

export default function Main(props) {
  const [imageHeight, setImageHeight] = useState(
    (window.innerWidth * 700) / 1920 - 60
  );
  const images = [];
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    window.onresize = () => {
      setImageHeight((window.innerWidth * 700) / 1920 - 60);
    };

    const timerId = setInterval(() => {
      if (imageIndex === images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }
    }, 3000);

    return () => {
      window.onresize = null;
      clearInterval(timerId);
    };
  }, [imageIndex, images.length]);
  return (
    <>
      <HeaderWrapper>
        <Header />
        <Profile />
      </HeaderWrapper>
      <Switch>
        <Route path="/apartments">
          <h1>Apartments</h1>
        </Route>
        <Route path="/">
          <BannerWrapper imageHeight={imageHeight}>
            <Banner />
            {/* <button onClick={() => setImageIndex(imageIndex - 1)}>Left</button>
        <button onClick={() => setImageIndex(imageIndex + 1)}>Right</button> */}
          </BannerWrapper>
          <Categories />
        </Route>
      </Switch>
    </>
  );
}
