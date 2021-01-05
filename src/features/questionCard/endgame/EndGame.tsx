import React from "react";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import { useStyles } from "../../../App.style";
import Button from "@material-ui/core/Button";
import { useStateValue } from "../../../StateProvider";
import Link from "@material-ui/core/Link";
import { useHistory } from "react-router-dom";

const EndGame = () => {
  const classes = useStyles();
  const history = useHistory();
  const [state, dispatch] = useStateValue();

  let { wrongAnswers, score } = state;

  return (
    <Grid container className={classes.card}>
      <Grid container alignItems="center" direction="column" spacing={2}>
        <Grid item>
          <Typography gutterBottom>Your score: {score} </Typography>
        </Grid>
        <Grid item>
          <Link href="/">
            <Button variant="contained" color="primary">
              Play again
            </Button>
          </Link>
        </Grid>
        {wrongAnswers.length > 0 && (
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => history.push("/wrongAnswers")}
            >
              Show incorrect answers
            </Button>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default EndGame;
