import { Button, Card, CardContent, Link, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "../../../App.style";
import { useStateValue } from "../../../StateProvider";

const WrongAnswers = () => {
  const classes = useStyles();
  const [state, dispatch] = useStateValue();
  const { wrongAnswers } = state;

  return (
    <>
      {wrongAnswers.length > 0 && (
        <Card className={classes.card}>
          <CardContent>
            {wrongAnswers.map((wrongAnswer: any) => (
              <>
                <Typography
                  variant="h5"
                  gutterBottom
                  dangerouslySetInnerHTML={{ __html: wrongAnswer.question }}
                />

                <Typography
                  variant="subtitle1"
                  gutterBottom
                  dangerouslySetInnerHTML={{
                    __html: wrongAnswer.correct_answer,
                  }}
                />
              </>
            ))}
            <Link href="/">
              <Button variant="contained" color="primary">
                Play again
              </Button>
            </Link>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default WrongAnswers;
