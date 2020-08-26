import React from "react";
import Carousel from "react-material-ui-carousel";
import Amberd from "../images/tourism/amberd.jpg";
import styled from "styled-components";

const CarouselCmp = styled(Carousel)`
  height: 50vw;
`;

const CarouselImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CarouselImages = styled.div`

`;

export default function CarouselComponent() {
  return (
    <CarouselCmp>
      <CarouselImages>
        <CarouselImg src={Amberd} alt="" />
        <CarouselImg src={Amberd} alt="" />
        <CarouselImg src={Amberd} alt="" />
        <CarouselImg src={Amberd} alt="" />
      </CarouselImages>
      <CarouselImages>
        <CarouselImg src={Amberd} alt="" />
        <CarouselImg src={Amberd} alt="" />
        <CarouselImg src={Amberd} alt="" />
        <CarouselImg src={Amberd} alt="" />
      </CarouselImages>
      <CarouselImages>
        <CarouselImg src={Amberd} alt="" />
        <CarouselImg src={Amberd} alt="" />
        <CarouselImg src={Amberd} alt="" />
        <CarouselImg src={Amberd} alt="" />
      </CarouselImages>
    </CarouselCmp>
  );
}
