import React from "react";
import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

const FooterCmp = styled.footer`
  box-sizing: border-box;
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  background-color: #f7f7f7;
  // margin-top: 70px;
  padding: 1.04vw 2.6vw;
  color: #364f6b;
  box-shadow: 0vw -1.04vw 0.521vw 0.521vw rgba(93, 120, 148, 0.6);
  font-size: 0.9vw;
`;

const Link = styled.a`
  display: inline-block;
  margin-left: 0.26vw;
  margin-right: 0.26vw;
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
          style={{ marginRight: "0.52vw", cursor: "pointer", fontSize: "1.5625vw" }}
        />
        <TwitterIcon
          style={{ marginRight: "0.52vw", cursor: "pointer", fontSize: "1.5625vw" }}
        />
        <InstagramIcon style={{ cursor: "pointer", fontSize: "1.5625vw" }} />
      </div>
    </FooterCmp>
  );
}
