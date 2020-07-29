import React, { useState } from "react";
import ProfileHiddenMenu from "./ProfileHiddenMenu";
import { createUseStyles } from "react-jss";
import { faBars, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = createUseStyles({
  "profile-menu": {
    display: "inline-flex",
    padding: '7px 12px',
    alignItems: "center",
    cursor: 'pointer',
    backgroundColor: 'white',
    borderRadius: '10%',
    marginLeft: 'auto'
  },
  "profile-wrapper": {
    display: 'flex',
    position: 'relative',
    width: 100
  }
});

export default function Profile(props) {
  const classes = useStyles();
  const [opened, setOpened] = useState(false);

  const onHandleMenu = () => {
    setOpened(!opened);
  }

  return (
    <div className={classes["profile-wrapper"]}>
      <div className={classes["profile-menu"]} onClick={onHandleMenu}>
        <FontAwesomeIcon icon={faBars} style={{ marginRight: 10 }} />
        <FontAwesomeIcon icon={faUserCircle} size="2x" />
      </div>
      <ProfileHiddenMenu opened={opened} />
    </div>
  );
}
