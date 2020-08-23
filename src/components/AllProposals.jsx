import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import Proposal from "./Proposal";
import styled from "styled-components";
import Pagination from "./Pagination";

const AllProposalsCmp = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.5vw;
  padding: 0 2.5vw 0 2.5vw;
  margin-top: 2.604vw;
`;

function AllProposals(props) {
  const apartments = useSelector((state) => state.apartments);
  const vacationRentals = useSelector((state) => state.vacationRentals);
  const sharedRooms = useSelector((state) => state.sharedRooms);
  const [page, setPage] = useState(1);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(9);
  const homesArray =
    props.type === "apartments"
      ? apartments
      : props.type === "rentals"
      ? vacationRentals
      : sharedRooms;

  return (
    <div>
      <AllProposalsCmp>
        {homesArray.slice(startIndex, endIndex + 1).map((home) => {
          return <Proposal home={home} key={home.price} type={props.type} />;
        })}
      </AllProposalsCmp>
      <Pagination
        pagesCount={Math.ceil(apartments.length / 10)}
        page={page}
        setPage={setPage}
        setStartIndex={setStartIndex}
        setEndIndex={setEndIndex}
      />
    </div>
  );
}

export default connect()(AllProposals);
