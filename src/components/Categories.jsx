import React from "react";
import styled from "styled-components";
import apartments from "../images/apartments.jpg";
import vacationRentals from '../images/vacation-rentals.jpg';
import sharedRooms from '../images/shared-rooms.jpg';

const CategoriesCmp = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  padding: 0 50px;
`;

const Category = styled.div`
  cursor: pointer;
  color: #364f6b;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 1px rgba(93,120,148,1);
  flex: 1;
  margin-right: ${props => !props.last ? '50px' : null};
  &:active {
    border-raduis: 25px;
  }
`;

export default function Categories(props) {
  return (
    <CategoriesCmp>
      <Category>
        <img src={apartments} style={{width: '100%'}} alt=""/>
        <h3>Apartments</h3>
        <p>156,786 properties</p>
      </Category>
      <Category>
        <img src={vacationRentals} style={{width: '100%'}} alt=""/>
        <h3>Vacation Rentals</h3>
        <p>156,786 properties</p>
      </Category>
      <Category last>
        <img src={sharedRooms} style={{width: '100%'}} alt=""/>
        <h3>Shared rooms</h3>
        <p>156,786 properties</p>
      </Category>
    </CategoriesCmp>
  );
}
