import React from "react";
import { connect, useSelector } from "react-redux";
import { HiddenMenu, HiddenMenuItem } from "./ProfileHiddenMenu";
import styled from "styled-components";
import rus from "../images/rus.png";
import arm from "../images/arm.png";
import eng from "../images/eng.png";

const LanguageHiddenMenuCmp = styled(HiddenMenu)`
  width: 100px;
  left: 0;
`;

const LanguageHiddenMenuItem = styled(HiddenMenuItem)`
  background-image: ${(props) =>
    props.language === "rus"
      ? `url(${rus})`
      : props.language === "eng"
      ? `url(${eng})`
      : `url(${arm})`};
  background-position: 10px center;
  background-repeat: no-repeat;
  background-size: 20px;
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
