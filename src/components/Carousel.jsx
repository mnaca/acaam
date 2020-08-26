import React from "react";
import Carousel from "react-material-ui-carousel";
import styled from "styled-components";
import Amberd from "../images/tourism/amberd.jpg";
import Amberdimg from "../images/tourism/Amberd-1.jpg";
import Aragats from "../images/tourism/aragats.jpg";
import Ararat from "../images/tourism/ararat.jpg";
import Astxaditaran from "../images/tourism/astxaditaran.jpg";
import Byurakan from "../images/tourism/byurakan-astrophysical.jpg";
import LakeQari from "../images/tourism/lake-qari.jpg";
import QariLij from "../images/tourism/qari-lij.jpg";

const CarouselCmp = styled(Carousel)`
  position: relative;
  top: 0;
  transition: 0.25s top;
  height: 15vw;
  width: 16.96vw;
  margin: 0.5vw;
  cursor: pointer;
  color: #364f6b;
  padding: 0.52vw;
  border-radius: 0.2604vw;
  box-shadow: 0vw 0vw 0.52vw 0.052vw rgba(93, 120, 148, 1);
  &:hover {
    top: -0.7vw;
    box-shadow: 0vw 0vw 1.5vw 0.104vw rgba(93, 120, 148, 1);
  }
`;

const CarouselImg = styled.img`
  width: 100%;
  height: 10vw;
  object-fit: cover;
`;

const CarouselWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export default function CarouselComponent() {
  const Aragacotn = [
    Amberd,
    Amberdimg,
    Astxaditaran,
    Byurakan,
    LakeQari,
    QariLij,
    Aragats,
  ];
  return (
    <>
      <h2
        style={{
          textAlign: "center",
          color: "#364f6b",
          fontSize: "1.6vw",
          borderTop: "0.104vw solid #c3c3c3",
          padding: "0.8vw",
          margin: "1vw 2.52vw",
        }}
      >
        Discover Armenia These destinations have a lot to offer
      </h2>
      <CarouselWrap>
        <CarouselCmp>
          {Aragacotn.map((item) => (
            <CarouselImg src={item} alt="" />
          ))}
        </CarouselCmp>
        <CarouselCmp>
          <CarouselImg src={Aragats} alt="" />
          <CarouselImg src={Ararat} alt="" />
        </CarouselCmp>
        <CarouselCmp>
          <CarouselImg src={Amberd} alt="" />
        </CarouselCmp>
        <CarouselCmp>
          <CarouselImg src={Aragats} alt="" />
        </CarouselCmp>
        <CarouselCmp>
          <CarouselImg src={Amberdimg} alt="" />
        </CarouselCmp>
      </CarouselWrap>
    </>
  );
}
