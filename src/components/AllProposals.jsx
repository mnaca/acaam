import React from "react";
import { connect, useSelector } from "react-redux";
import Proposal from "./Proposal";
import styled from "styled-components";

const AllProposalsCmp = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5vw 8vw 5vw;
  margin-top: 2.604vw;
`;

function AllProposals(props) {
  const apartments = useSelector((state) => state.apartments);
  const vacationRentals = useSelector((state) => state.vacationRentals);
  const sharedRooms = useSelector((state) => state.sharedRooms);

  return (
    <AllProposalsCmp>
      {props.type === "apartments"
        ? apartments.map((home) => {
            return <Proposal home={home} key={home.price} type={props.type} />;
          })
        : props.type === "rentals"
        ? vacationRentals.map((home) => {
            return <Proposal home={home} key={home.price} type={props.type} />;
          })
        : sharedRooms.map((home) => {
            return <Proposal home={home} key={home.price} type={props.type} />;
          })}
    </AllProposalsCmp>
  );
}

export default connect()(AllProposals);
