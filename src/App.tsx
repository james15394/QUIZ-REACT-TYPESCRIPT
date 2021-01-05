import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStyles } from "./App.style";
import {
  QuestionCard,
  EndGame,
  WrongAnswers,
  Home,
  Header,
} from "../src/features/questionCard/index";
import { Grid } from "@material-ui/core";

function App() {
  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.root}>
      <Router>
        <Grid item style={{ width: "100%" }}>
          <Header />
        </Grid>
        <Grid item className={classes.main}>
          <Switch>
            <Route path="/card/:index">
              <QuestionCard />
            </Route>
            <Route exact path="/end">
              <EndGame />
            </Route>
            <Route exact path="/wrongAnswers">
              <WrongAnswers />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Grid>
      </Router>
    </Grid>
  );
}

export default App;
