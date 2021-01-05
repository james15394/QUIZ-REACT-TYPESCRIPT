import { Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "../../../App.style";

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <Typography variant="h2">QUIZ GAME</Typography>
    </div>
  );
};

export default Header;
