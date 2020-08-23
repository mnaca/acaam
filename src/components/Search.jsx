import React, { useState } from "react";
import styled from "styled-components";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";

const SearchCmp = styled.div`
  display: flex;
  align-items: center;
  border: 0.104vw solid #364f6b;
  border-radius: 50%;
  &:hover {
    background-color: rgba(54, 79, 107, 0.1);
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

const SearchForm = styled.div`
  position: absolute;
  left: 0;
`;

export default function Search(props) {
  const [opened, setOpened] = useState(false);

  const onHandleSearch = () => {
    setOpened(!opened);
  };

  return (
    <SearchCmp>
      {opened ? <SearchForm>pxk</SearchForm> : null}
      <SearchLogo onClick={onHandleSearch}>
        <SearchRoundedIcon style={{ fontSize: "1.823vw" }} />
      </SearchLogo>
    </SearchCmp>
  );
}

// function SearchItem
