import React from "react";
import styled from "styled-components";
import LanguageIcon from "@material-ui/icons/Language";
import LanguageHiddenMenu from "./LanguageHiddenMenu";
import { connect, useDispatch } from "react-redux";
import { createToggleLanguageHiddenMenu } from "../actions/actions";

const LanguageCmp = styled.div`
  position: relative;
  background-color: white;
  display: flex;
  align-items: center;
  padding: 0.521vw;
  border-radius: 13%;
  cursor: pointer;
  border: 0.104vw solid #364f6b;
  margin-left: 0.521vw;
  &:hover {
    background-color: rgba(54, 79, 107, 0.1);
  }
`;

const StyledLanguageIcon = styled(LanguageIcon)`
  color: #364f6b;
`;

function Language(props) {
  const dispatch = useDispatch();

  const onHandleMenu = (event) => {
    event.stopPropagation();
    dispatch(createToggleLanguageHiddenMenu());
  };

  return (
    <LanguageCmp onClick={onHandleMenu}>
      <StyledLanguageIcon style={{width: "2vw", height: "2vw"}} />
      <LanguageHiddenMenu />
    </LanguageCmp>
  );
}

export default connect()(Language);
