import React from "react";
import styled from "styled-components";
import apartments from "../images/apartments.jpg";
import vacationRentals from "../images/vacation-rentals.jpg";
import sharedRooms from "../images/shared-rooms.jpg";
import { Link } from "react-router-dom";

const CategoriesCmp = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.083vw;
  padding: 0 2.604vw 6.25vw 2.604vw;
  font-size: 0.9vw;
`;

const StyledLink = styled(Link)`
  display: block;
  cursor: pointer;
  color: #364f6b;
  padding: 0.52vw;
  border-radius: 0.2604vw;
  box-shadow: 0vw 0vw 0.52vw 0.052vw rgba(93, 120, 148, 1);
  flex: 1;
  margin-right: ${(props) => (props.marginright ? props.marginright : "2.604vw")};
`;

export default function Categories(props) {
  return (
    <CategoriesCmp>
      <StyledLink to="/apartments">
        <div>
          <img src={apartments} style={{ width: "100%" }} alt="" />
          <h3>Apartments</h3>
          <p>156,786 properties</p>
        </div>
      </StyledLink>
      <StyledLink to="/rentals">
        <div>
          <img src={vacationRentals} style={{ width: "100%" }} alt="" />
          <h3>Vacation Rentals</h3>
          <p>156,786 properties</p>
        </div>
      </StyledLink>
      <StyledLink to="/rooms" marginright="0px">
        <div>
          <img src={sharedRooms} style={{ width: "100%" }} alt="" />
          <h3>Shared rooms</h3>
          <p>156,786 properties</p>
        </div>
      </StyledLink>
    </CategoriesCmp>
  );
}
