import React, { useState } from "react";
import styled from "styled-components";
import { storage } from "../firebase";

const ProposalCmp = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  box-shadow: 0px 0px 10px 1px rgba(93, 120, 148, 1);
  cursor: pointer;
  color: #364f6b;
  border-radius: 5px;
`;

const StyledImg = styled.img`
  width: 100%;
  border-radius: 5px;
`;

export default function Proposal(props) {
  const { home } = props;
  const [mainImage, setMainImage] = useState(null);
  let homeCopy = {...JSON.parse(home)};
  homeCopy.images = JSON.parse(homeCopy.images);
  homeCopy.owner = JSON.parse(homeCopy.owner);
  homeCopy['bedrooms-options'] = JSON.parse(homeCopy['bedrooms-options']);
  const storageRef = storage.ref();
  const houseImagesRef = storageRef.child(
    "house-images/" + homeCopy.images[0]
  );
  houseImagesRef.getDownloadURL().then((url) => setMainImage(url));

  return (
    <ProposalCmp>
      <div style={{ flex: 1 }}>
        <StyledImg src={mainImage} alt="Picture" />
      </div>
      <div style={{ flex: 2, marginLeft: "15px" }}>
        <h4>
          {homeCopy.city}, {homeCopy.district}
        </h4>
        <p>{homeCopy.title}</p>
        {Object.entries(homeCopy.amenities).map(
          (option) => `${option[0]}: ${option[1]}, `
        )}
        <p>{homeCopy.price}</p>
      </div>
    </ProposalCmp>
  );
}
