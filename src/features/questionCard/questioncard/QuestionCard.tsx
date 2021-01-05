import {
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useStyles } from "../../../App.style";
import { useStateValue } from "../../../StateProvider";

const QuestionCard = () => {
  // @ts-expect-error
  let { index } = useParams();

  const history = useHistory();
  const classes = useStyles();
  const [state, dispatch] = useStateValue();

  let { noOfQues, questions, score } = state;
  const correctAnswer = questions[index]?.correct_answer;
  const question = questions[index]?.question;
  const answers = questions[index]?.answers;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const useAnswer = e.target.value;
    console.log(useAnswer);
    if (useAnswer === correctAnswer) {
      dispatch({ type: "INCREASE_SCORE", payload: +score + 1 });
    } else {
      dispatch({ type: "WRONG_ANSWER", payload: questions[index] });
    }
  };
  const handleNextQues = () => {
    if (index < noOfQues - 1) {
      history.push(`/card/${+index + 1}`);
    } else {
      history.push("/end");
    }
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          variant="h5"
          component="h5"
          gutterBottom
          dangerouslySetInnerHTML={{ __html: question }}
        />

        <FormControl component="fieldset">
          <RadioGroup aria-label="quiz" name="quiz" onChange={handleChange}>
            {answers?.map((answer: any) => (
              <FormControlLabel
                value={answer}
                control={<Radio />}
                label={answer}
              />
            ))}
          </RadioGroup>
        </FormControl>
        <br />
        <CardActions>
          <Button
            variant="contained"
            size="small"
            color="secondary"
            endIcon={<ArrowForwardIcon />}
            style={{ marginTop: "10px" }}
            onClick={handleNextQues}
          >
            Next question
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default QuestionCard;
