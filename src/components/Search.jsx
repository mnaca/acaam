import React, { useState } from "react";
import styled from "styled-components";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import Input from '@material-ui/core/Input';

const SearchCmp = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border: 2px solid #364f6b;
  padding: ${props => props.paddingLeft ? '5px 20px 5px' : 0};
  border-radius: ${(props) => props.borderRadius};
  &:hover {
    background-color: ${props => !props.opened ? 'rgba(54, 79, 107, 0.1)' : null};
  }
`;

const SearchItem = styled.div`
  cursor: pointer;
  color: #364f6b;
  padding: 0 25px;
  border-right: ${props => !props.last ? '1px solid #364f6b' : null};
  border-radius: ${props => props.first ? '40px 0 0 40px' : props.last ? '0 40px 40px 0' : '0'};
  &:hover {
    background-color: rgba(54,79,107,0.1);
  }
`;

const SearchLogo = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 4.5px 5px;
  cursor: pointer;
  height: 100%;
  color: #364f6b;
`;

export default function Search(props) {
  const [opened, setOpened] = useState(false);
  const [borderRadius, setBorderRadius] = useState("50%");

  const onHandleSearch = () => {
    setOpened(!opened);
    if (borderRadius === "50%") {
      setBorderRadius("40px");
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
            <Input placeholder="Where are you going?" />
          </SearchItem>
          <SearchItem>
            <div style={{fontWeight: "bold"}}>Check in</div>
            <Input placeholder="Add dates" type="date" />
          </SearchItem>
          <SearchItem>
            <div style={{fontWeight: "bold"}}>Check out</div>
            <Input placeholder="Add guests" type="date" />
          </SearchItem>
          <SearchItem last>
            <div style={{fontWeight: "bold"}}>Guests</div>
            <Input placeholder="Add guests" />
          </SearchItem>
        </>
      ) : null}
      <SearchLogo onClick={onHandleSearch}>
        <SearchRoundedIcon style={{ fontSize: "35px" }} />
      </SearchLogo>
    </SearchCmp>
  );
}

// function SearchItem
