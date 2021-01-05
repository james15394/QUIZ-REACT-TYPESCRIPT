import { makeStyles } from "@material-ui/core";
import Image1 from "./images/bg1.jpg";
export const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    background: `url(${Image1})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(0, 3),
    },
  },
  main: {
    overflow: "hidden",
    margin: "auto",
  },
  card: {
    display: "grid",
    placeItems: "center",
    background: " rgba(255,255,255, 0.3)",
    maxWidth: "800px",
    minWidth: "300px",
    backdropFilter: "blur(10px)",
    border: "solid 2px transparent",
    backgroundClip: "padding-box",
    boxShadow: "10px 10px 10px  rgba(46, 54, 68, 0.03)",
    borderRadius: "2em",
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      maxWidth: "500px",
    },
  },
  header: {
    padding: theme.spacing(2, 3),
    margin: "auto",
    textAlign: "center",
    overflow: "hidden",
    width: "100%",
    background: "rgb(48 60 59 / 43%)",
    "& > h2": {
      color: "#fff",
      fontWeight: "500",
      fontSize: "5rem",
      height: "100%",
      width: "100%",
      display: "grid",
      placeItems: "center",
      textShadow: "2px 4px 3px rgba(0,0,0,0.3)",
      [theme.breakpoints.down("sm")]: {
        fontSize: "4rem",
      },
    },
  },
}));
