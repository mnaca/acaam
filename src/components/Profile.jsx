import React, { useState } from "react";
import ProfileHiddenMenu from "./ProfileHiddenMenu";
import { faBars, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const ProfileWrapper = styled.div`
  display: flex;
  position: relative;
  width: 150px;
`;

const ProfileMenu = styled.div`
  display: inline-flex;
  padding: 7px 12px;
  align-items: center;
  cursor: pointer;
  background-color: white;
  border-radius: 10%;
  margin-left: auto;
`;

export default function Profile(props) {
  const [opened, setOpened] = useState(false);

  const onHandleMenu = () => {
    setOpened(!opened);
  };

  return (
    <ProfileWrapper>
      <ProfileMenu onClick={onHandleMenu}>
        <FontAwesomeIcon icon={faBars} style={{ marginRight: 10 }} />
        <FontAwesomeIcon icon={faUserCircle} size="2x" />
      </ProfileMenu>
      <ProfileHiddenMenu opened={opened} />
    </ProfileWrapper>
  );
}
