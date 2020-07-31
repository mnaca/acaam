import React from "react";
import ProfileHiddenMenu from "./ProfileHiddenMenu";
import { faBars, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import Language from "./Language";
import { connect, useDispatch } from "react-redux";
import { createToggleProfileHiddenMenu } from "../actions/actions";

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
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
  margin-left: 10px;
`;

function Profile(props) {
  const dispatch = useDispatch();

  const onHandleMenu = () => {
    dispatch(createToggleProfileHiddenMenu());
  };

  return (
    <ProfileWrapper>
      <Language />
      <ProfileMenu onClick={onHandleMenu}>
        <FontAwesomeIcon icon={faBars} style={{ marginRight: 10 }} />
        <FontAwesomeIcon icon={faUserCircle} size="2x" />
        <ProfileHiddenMenu />
      </ProfileMenu>
    </ProfileWrapper>
  );
}

export default connect()(Profile);
