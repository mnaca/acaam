import React from "react";
import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

const FooterCmp = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  background-color: #f7f7f7;
  margin-top: 70px;
  padding: 20px 50px;
  box-shadow: 0px -2px 10px 1px rgba(93, 120, 148, 0.6);
  color: #364f6b;
  font-size: 17px;
`;

export default function Footer(props) {
  return (
    <FooterCmp>
      <div style={{ display: "flex", alignItems: "center" }}>
        © 2020 Mnaca, Inc. All rights reserved · <a href="/home">Privacy</a> ·
        <a href="/home">Terms</a> · <a href="/home">Sitemap</a>
      </div>
      <div>
        <FacebookIcon
          style={{ marginRight: "10px", cursor: "pointer", fontSize: 30 }}
        />
        <TwitterIcon
          style={{ marginRight: "10px", cursor: "pointer", fontSize: 30 }}
        />
        <InstagramIcon style={{ cursor: "pointer", fontSize: 30 }} />
      </div>
    </FooterCmp>
  );
}
