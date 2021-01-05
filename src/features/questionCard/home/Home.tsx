import {
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { fetchQuizs } from "../../../API";
import { useStyles } from "../../../App.style";
import { useStateValue } from "../../../StateProvider";

const Home = () => {
  const classes = useStyles();
  const history = useHistory();
  const [state, dispatch] = useStateValue();
  const [loading, setLoading] = useState(false);
  let { noOfQues, questions, number, score } = state;
  const start = () => {
    if (noOfQues) {
      const getQuestions = async () => {
        setLoading(true);
        const allQuestions = await fetchQuizs(noOfQues);
        dispatch({ type: "GET_QUES", payload: allQuestions });
        setLoading(false);
        if (allQuestions) {
          history.push(`/card/${number}`);
        }
      };
      getQuestions();
    }
  };
  const handleSetNoOfQues = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newNoOfQues: number = +e.target.value;
    if (newNoOfQues) {
      dispatch({ type: "INCREASE_NUM OF_QUES", payload: newNoOfQues });
    }
  };
  return (
    <Card className={classes.card}>
      <CardContent>
        <CardActions>
          <form noValidate autoComplete="off">
            <TextField
              label="Number of questions"
              variant="outlined"
              onChange={handleSetNoOfQues}
            />
          </form>

          <Button
            variant="contained"
            size="large"
            color="primary"
            onClick={start}
            startIcon={
              loading && <CircularProgress color="secondary" size="1rem" />
            }
          >
            Play
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default Home;
