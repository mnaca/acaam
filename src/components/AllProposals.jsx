import React from "react";
import { connect, useSelector } from "react-redux";
import Proposal from "./Proposal";
import styled from "styled-components";

const AllProposalsCmp = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 100px 150px 100px;
  margin-top: 50px;
  grid-gap: 20px 20px;
`;

function AllProposals(props) {
  const apartments = useSelector((state) => state.apartments);
  const vacationRentals = useSelector((state) => state.vacationRentals);
  const sharedRooms = useSelector((state) => state.sharedRooms);

  return (
    <AllProposalsCmp>
      {props.type === "apartments"
        ? apartments.map((home) => {
            return <Proposal home={JSON.parse(home)} key={home.id} />;
          })
        : props.type === "vacationRentals"
        ? vacationRentals.map((home) => {
            return <Proposal home={home} key={home.id} />;
          })
        : sharedRooms.map((home) => {
            return <Proposal home={home} key={home.id} />;
          })}
    </AllProposalsCmp>
  );
}

export default connect()(AllProposals);
