import React, { useState } from "react";
import styled from "styled-components";
import { storage } from "../firebase";
import CheckIcon from "@material-ui/icons/Check";
import { Link } from "react-router-dom";

const ProposalCmp = styled.div`
  height: 100%;
  box-sizing: border-box;
  position: relative;
  display: flex;
  padding: 0.52vw 1.04vw;
  cursor: pointer;
  color: #364f6b;
  border-radius: 0.2604vw;
`;

const StyledImg = styled.img`
  width: 100%;
  border-radius: 0.2604vw;
  height: 100%;
  object-fit: cover;
`;

const Price = styled.p`
  position: absolute;
  right: 0.52vw;
  bottom: 0.52vw;
  font-weight: bold;
  font-size: 1.4vw;
`;

const Amenities = styled.li`
  display: flex;
  align-items: center;
  font-size: 1vw;
`;

const ImageWrapper = styled.div`
  width: 45%;
  height: 16vw;
`;

const StyledLink = styled(Link)`
  position: relative;
  top: 0;
  display: block;
  margin-bottom: ${(props) => (props.profile ? "1.5vw" : null)};
  transition: 0.2s top;
  text-decoration: none;
  border-radius: 0.4vw;
  box-shadow: 0vw 0vw 0.52vw 0.052vw rgba(93, 120, 148, 1);
  &:hover {
    top: ${(props) => (!props.profile ? "-0.5vw" : null)};
    box-shadow: ${(props) =>
      !props.profile ? "0vw 0vw 1.5vw 0.104vw rgba(93, 120, 148, 1)" : null};
  }
`;

const AmenitiesWrap = styled.ul`
  list-style-type: none;
  margin-top: 0.42vw;
  display: grid;
  grid-column-gap: 1vw;
  grid-template-columns: 1fr 1fr;
`;

export function jsUcfirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function Proposal(props) {
  const { home } = props;
  const [mainImage, setMainImage] = useState(null);
  const storageRef = storage.ref();
  const houseImagesRef = storageRef.child("house-images/" + home.images[0]);
  houseImagesRef.getDownloadURL().then((url) => setMainImage(url));

  return (
    <StyledLink
      profile={props.profile ? props.profile : null}
      to={`/${props.type}/${home.id}`}
    >
      <ProposalCmp>
        <ImageWrapper>
          <StyledImg src={mainImage} alt="Picture" />
        </ImageWrapper>
        <div style={{ marginLeft: "1.04vw" }}>
          <h4 style={{ marginBottom: "0.52vw", fontSize: "1vw" }}>
            {jsUcfirst(home.city)}, {jsUcfirst(home.district)}
          </h4>
          <p style={{ marginBottom: "0.26vw", fontSize: "1vw" }}>
            {home.title}
          </p>
          <AmenitiesWrap>
            {Object.entries(home.amenities).map((option) => (
              <Amenities key={option[0]}>
                <CheckIcon
                  style={{ marginRight: "0.2604vw", fontSize: "1.2vw" }}
                />
                {option[0]}
              </Amenities>
            ))}
          </AmenitiesWrap>
        </div>
        <Price>{home.price}$ / Per night</Price>
      </ProposalCmp>
    </StyledLink>
  );
}
