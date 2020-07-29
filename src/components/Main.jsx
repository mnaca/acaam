import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import { createUseStyles } from "react-jss";
import background from "../images/background.jpg";

// Create your Styles. Remember, since React-JSS uses the default preset,
// most plugins are available without further configuration needed.
const useStyles = createUseStyles({
  wrapper: {
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    height: 700
  }
});

export default function Main(props) {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div
        className="header-wrapper"
        style={{ padding: "0 20px" }}
      >
        <Header />
      </div>
      <div
        className={classes["banner-wrapper"]}
        style={{ backgroundColor: "lightyellow", padding: "0 20px" }}
      >
        <Banner />
      </div>
    </div>
  );
}
