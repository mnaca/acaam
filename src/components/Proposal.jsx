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
  box-shadow: 0vw 0vw 0.52vw 0.052vw rgba(93, 120, 148, 1);
  cursor: pointer;
  color: #364f6b;
  border-radius: 0.2604vw;
  margin-top: 0.78125vw;
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
  width: 30%;
  height: 16vw;
`;

function jsUcfirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function Proposal(props) {
  const { home } = props;
  const [mainImage, setMainImage] = useState(null);
  const storageRef = storage.ref();
  const houseImagesRef = storageRef.child("house-images/" + home.images[0]);
  houseImagesRef.getDownloadURL().then((url) => setMainImage(url));

  return (
    <Link to={`/${props.type}/${home.id}`} style={{textDecoration: "none"}}>
      <ProposalCmp>
        <ImageWrapper>
          <StyledImg src={mainImage} alt="Picture" />
        </ImageWrapper>
        <div style={{ marginLeft: "1.04vw" }}>
          <h4 style={{ marginBottom: "0.52vw", fontSize: "1vw" }}>
            {jsUcfirst(home.city)}, {jsUcfirst(home.district)}
          </h4>
          <p style={{ marginBottom: "0.26vw", fontSize: "1vw" }}>{home.title}</p>
          <ul
            style={{
              listStyleType: "none",
              marginTop: "0.42vw",
              display: "grid",
              gridColumnGap: "0.26vw",
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            {Object.entries(home.amenities).map((option) => (
              <Amenities>
                <CheckIcon style={{ marginRight: "0.2604vw", fontSize: "1.2vw"}} />{option[0]}
              </Amenities>
            ))}
          </ul>
        </div>
        <Price>{home.price}$</Price>
      </ProposalCmp>
    </Link>
  );
}
