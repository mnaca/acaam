import React from "react";
import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

const FooterCmp = styled.div`
  box-sizing: border-box;
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  background-color: #f7f7f7;
  // margin-top: 70px;
  padding: 20px 50px;
  color: #364f6b;
  box-shadow: 0px -2px 10px 1px rgba(93, 120, 148, 0.6);
  font-size: 17px;
`;

const Link = styled.a`
  display: inline-block;
  margin-left: 5px;
  margin-right: 5px;
`;

export default function Footer(props) {
  return (
    <FooterCmp>
      <div style={{ display: "flex", alignItems: "center" }}>
        © 2020 Mnaca, Inc. All rights reserved ·{" "}
        <Link href="/home">Privacy</Link> ·<Link href="/home">Terms</Link> ·{" "}
        <Link href="/home">Sitemap</Link>
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
