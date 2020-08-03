import React from "react";
import styled from "styled-components";
import apartments from "../images/apartments.jpg";
import vacationRentals from "../images/vacation-rentals.jpg";
import sharedRooms from "../images/shared-rooms.jpg";
import { Link } from "react-router-dom";

const CategoriesCmp = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  padding: 0 50px;
`;

const StyledLink = styled(Link)`
  display: block;
  cursor: pointer;
  color: #364f6b;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 1px rgba(93, 120, 148, 1);
  flex: 1;
  margin-right: ${(props) => (props.marginright ? props.marginright : "50px")};
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
