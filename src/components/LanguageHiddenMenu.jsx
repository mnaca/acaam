import React from "react";
import { connect, useSelector } from "react-redux";
import { HiddenMenu, HiddenMenuItem } from "./ProfileHiddenMenu";
import styled from "styled-components";
import rus from "../images/rus.png";
import arm from "../images/arm.png";
import eng from "../images/eng.png";

const LanguageHiddenMenuCmp = styled(HiddenMenu)`
  color: #364f6b;
  width: 5.21vw;
  left: 0;
`;

const LanguageHiddenMenuItem = styled(HiddenMenuItem)`
  background-image: ${(props) =>
    props.language === "rus"
      ? `url(${rus})`
      : props.language === "eng"
      ? `url(${eng})`
      : `url(${arm})`};
  background-position: 0.521vw center;
  background-repeat: no-repeat;
  background-size: 1.042vw;
  font-size: 0.9vw;
`;

function LanguageHiddenMenu(props) {
  const opened = useSelector((state) => state.languageHiddenMenuOpened);

  return opened ? (
    <LanguageHiddenMenuCmp>
      <LanguageHiddenMenuItem language="rus">РУС</LanguageHiddenMenuItem>
      <LanguageHiddenMenuItem language="eng">ENG</LanguageHiddenMenuItem>
      <LanguageHiddenMenuItem language="arm">ՀԱՅ</LanguageHiddenMenuItem>
    </LanguageHiddenMenuCmp>
  ) : null;
}

export default connect()(LanguageHiddenMenu);
