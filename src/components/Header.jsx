import React from "react";
import logo from "../images/logo.png";
import { createUseStyles } from "react-jss";
import Profile from "./Profile";

// Create your Styles. Remember, since React-JSS uses the default preset,
// most plugins are available without further configuration needed.
const useStyles = createUseStyles({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: 'center',
  },
  logo: {
    marginTop: 7.5,
    
  },
  profile: {},
});

export default function Header(props) {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src={logo} alt="Logo" width={60} />
      </div>
      <div className={classes.profile}>
        <Profile />
      </div>
    </header>
  );
}
