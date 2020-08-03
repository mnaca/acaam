import React from "react";
import styled from "styled-components";

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

  return (
      <ProposalCmp>
          <div style={{flex: 1}}>
              <StyledImg src={home.images[0]} alt="Picture" />
          </div>
          <div style={{flex: 2, marginLeft: "15px"}}>
              <h4>{home.city}, {home.district}</h4>
              <p>{home.shortDescription}</p>
              {
                  Object.entries(home.options).map(option => `${option[0]}: ${option[1]}, `)
              }
              <p>{home.price}</p>
          </div>
      </ProposalCmp>
  )
}
