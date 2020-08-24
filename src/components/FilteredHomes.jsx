import React, { useState } from "react";
import { useSelector } from "react-redux";
import Proposal from "./Proposal";
import styled from "styled-components";
import Pagination from "./Pagination";
import { useParams } from "react-router";

const FilteredHomesCmp = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 2vw;
  padding: 3vw;
`;

export default function FilteredHomes() {
  const apartments = useSelector((state) => state.apartments);
  const vacationRentals = useSelector((state) => state.vacationRentals);
  const sharedRooms = useSelector((state) => state.sharedRooms);
  const [page, setPage] = useState(1);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(9);
  const allHomes = [...apartments, ...vacationRentals, ...sharedRooms];
  const filters = useParams();
  console.log(filters);

  return (
    <div>
      <FilteredHomesCmp>
        {allHomes.slice(startIndex, endIndex + 1).map((home) => {
          return (
            <Proposal
              home={home}
              type={
                home.house === "apartments"
                  ? home.house
                  : home.house === "vacationRentals"
                  ? "rentals"
                  : "rooms"
              }
            />
          );
        })}
      </FilteredHomesCmp>
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
