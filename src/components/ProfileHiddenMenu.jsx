import React from 'react';
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  'hidden-menu': {
    position: 'absolute',
    top: 46,
    listStyleType: 'none',
    backgroundColor: 'white',
    margin: 0,
    width: '100%',
    marginTop: 10,
    borderRadius: '4.5%',
    padding: '3px 20px 6px 20px'
  },

  'hidden-menu-item': {
    borderBottom: '1px solid #c3c3c3',
    marginTop: 4
  },
});

export default function ProfileHiddenMenu(props) {
  const classes = useStyles();

  return props.opened ? (
    <ul className={classes["hidden-menu"]}>
      <li className={classes["hidden-menu-item"]}>Register</li>
      <li className={classes["hidden-menu-item"]}>Sign in</li>
      <li className={classes["hidden-menu-item"]}>Register</li>
      <li className={classes["hidden-menu-item"]}>Sign in</li>
    </ul>
  ) : null 
}