import React, { useEffect, useState } from "react";
import Header from "./Header";
import Banner from "./Banner";
import styled from "styled-components";
import BannerImg1 from "../images/banner-img1.jpg";
import BannerImg2 from "../images/banner-img2.jpg";
import BannerImg3 from "../images/banner-img3.jpg";
import BannerImg4 from "../images/banner-img4.jpg";
import BannerImg5 from "../images/banner-img-5.jpg";
import BannerImg6 from "../images/banner-img-6.jpg";
const HeaderWrapper = styled.div`
  padding: 0 20px;
`;

const BannerWrapper = styled.div`
  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: 100%;
  height: ${(props) => props.imageHeight}px;
  padding: 30px 30px;
  transition: 1s;
`;

export default function Main(props) {
  const [imageHeight, setImageHeight] = useState(
    (window.innerWidth * 1080) / 1920 - 60
  );
  const images = [BannerImg1, BannerImg2, BannerImg3, BannerImg4, BannerImg5, BannerImg6];
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    window.onresize = () => {
      setImageHeight((window.innerWidth * 1080) / 1920 - 60);
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
      </HeaderWrapper>
      <BannerWrapper background={images[imageIndex]} imageHeight={imageHeight}>
        {/* <button onClick={() => setImageIndex(imageIndex - 1)}>Left</button>
        <button onClick={() => setImageIndex(imageIndex + 1)}>Right</button> */}
        <Banner />
      </BannerWrapper>
    </>
  );
}
