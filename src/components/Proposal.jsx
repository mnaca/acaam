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
  padding: 10px 20px;
  box-shadow: 0px 0px 10px 1px rgba(93, 120, 148, 1);
  cursor: pointer;
  color: #364f6b;
  border-radius: 5px;
  margin-top: 15px;
`;

const StyledImg = styled.img`
  width: 100%;
  border-radius: 5px;
  height: 100%;
  object-fit: cover;
`;

const Price = styled.p`
  position: absolute;
  right: 10px;
  bottom: 10px;
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
        <div style={{ marginLeft: 20 }}>
          <h4 style={{ marginBottom: 10, fontSize: "1vw" }}>
            {jsUcfirst(home.city)}, {jsUcfirst(home.district)}
          </h4>
          <p style={{ marginBottom: 5, fontSize: "1vw" }}>{home.title}</p>
          <ul
            style={{
              listStyleType: "none",
              marginTop: 8,
              display: "grid",
              gridColumnGap: 5,
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            {Object.entries(home.amenities).map((option) => (
              <Amenities>
                <CheckIcon style={{ marginRight: 5, fontSize: "1.2vw"}} />{option[0]}
              </Amenities>
            ))}
          </ul>
        </div>
        <Price>{home.price}$</Price>
      </ProposalCmp>
    </Link>
  );
}
