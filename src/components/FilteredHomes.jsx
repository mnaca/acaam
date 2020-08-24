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
  let { bedrooms, guests, city, district, house, price } = useParams();
  price = price.split(",");
  const filteredArr = allHomes
    .filter((home) => {
      if (bedrooms === "none") return true;
      return +home.bedrooms === +bedrooms;
    })
    .filter((home) => {
      if (guests === "none") return true;
      return +home.guests === +guests;
    })
    .filter((home) => {
      if (city === "all") return true;
      return home.city === city;
    })
    .filter((home) => {
      if (district === "all") return true;
      return home.district === district;
    })
    .filter((home) => {
      if (house === "all") return true;
      return home.house === house;
    })
    .filter((home) => {
      if (+price[1] === 1000) price[1] = Infinity;
      return +home.price >= price[0] && +home.price <= price[1];
    });
  const pagesCount = Math.ceil(filteredArr.length / 10);

  return (
    <div>
      <FilteredHomesCmp>
        {allHomes
          .filter((home) => {
            if (bedrooms === "none") return true;
            return +home.bedrooms === +bedrooms;
          })
          .filter((home) => {
            if (guests === "none") return true;
            return +home.guests === +guests;
          })
          .filter((home) => {
            if (city === "all") return true;
            return home.city === city;
          })
          .filter((home) => {
            if (district === "all") return true;
            return home.district === district;
          })
          .filter((home) => {
            if (house === "all") return true;
            return home.house === house;
          })
          .filter((home) => {
            if (+price[1] === 1000) price[1] = Infinity;
            return +home.price >= price[0] && +home.price <= price[1];
          })
          .slice(startIndex, endIndex + 1)
          .map((home) => {
            console.log(home);
            return (
              <Proposal
                home={home}
                key={home.id}
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
        pagesCount={pagesCount}
        page={page}
        setPage={setPage}
        setStartIndex={setStartIndex}
        setEndIndex={setEndIndex}
      />
    </div>
  );
}
