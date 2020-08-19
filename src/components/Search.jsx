import React, { useState } from "react";
import styled from "styled-components";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";

const SearchCmp = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border: 0.104vw solid #364f6b;
  padding: ${props => props.paddingLeft ? '0.26vw 1.041vw 0.26vw' : 0};
  border-radius: ${(props) => props.borderRadius};
  &:hover {
    background-color: ${props => !props.opened ? 'rgba(54, 79, 107, 0.1)' : null};
  }
`;

const SearchItem = styled.div`
  cursor: pointer;
  color: #364f6b;
  padding: 0 1.302vw;
  height: 3vw;
  border-right: ${props => !props.last ? '0.052vw solid #364f6b' : null};
  border-radius: ${props => props.first ? '2.083vw 0 0 2.083vw' : props.last ? '0 2.083vw 2.083vw 0' : '0'};
  font-size: 0.9vw;
  &:hover {
    background-color: rgba(54,79,107,0.1);
  }
`;

const SearchLogo = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0.6vw;
  cursor: pointer;
  height: 100%;
  color: #364f6b;
`;

const StyledInput = styled.input`
  font-size: 0.9vw;
  border: none;
  outline: none;
  background-color: transparent;
  border-bottom: 0.052vw solid transparent;
  margin-top: ${props => props.date ? 0 : "0.5625vw"};

  &:focus, &:hover {
    border-bottom: 0.052vw solid #364f6b;
  }
`;

export default function Search(props) {
  const [opened, setOpened] = useState(false);
  const [borderRadius, setBorderRadius] = useState("50%");

  const onHandleSearch = () => {
    setOpened(!opened);
    if (borderRadius === "50%") {
      setBorderRadius("2.083vw");
    } else {
      setBorderRadius("50%");
    }
  };

  return (
    <SearchCmp borderRadius={borderRadius} paddingLeft={opened} opened={opened}>
      {opened ? (
        <>
          <SearchItem first>
            <div style={{fontWeight: "bold"}}>Location</div>
            <StyledInput placeholder="Where are you going?" />
          </SearchItem>
          <SearchItem>
            <div style={{fontWeight: "bold"}}>Check in</div>
            <StyledInput date placeholder="Add dates" type="date" />
          </SearchItem>
          <SearchItem>
            <div style={{fontWeight: "bold"}}>Check out</div>
            <StyledInput date placeholder="Add dates" type="date" />
          </SearchItem>
          <SearchItem last>
            <div style={{fontWeight: "bold"}}>Guests</div>
            <StyledInput placeholder="Add guests" />
          </SearchItem>
        </>
      ) : null}
      <SearchLogo onClick={onHandleSearch}>
        <SearchRoundedIcon style={{ fontSize: "1.823vw" }} />
      </SearchLogo>
    </SearchCmp>
  );
}

// function SearchItem
