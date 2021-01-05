export const initialState = {
  noOfQues: 0,
  questions: [],
  number: 0,
  score: 0,
  wrongAnswers: [],
};
type ACTIONTYPE =
  | { type: "INCREASE_NUM OF_QUES"; payload: number }
  | { type: "INCREASE_NUMBER"; payload: number }
  | { type: "INCREASE_SCORE"; payload: number }
  | { type: "WRONG_ANSWER"; payload: string[] }
  | { type: "GET_QUES"; payload: string[] };

const reducer = (state: typeof initialState, action: ACTIONTYPE) => {
  switch (action.type) {
    case "INCREASE_NUM OF_QUES": {
      return { ...state, noOfQues: action.payload };
    }
    case "INCREASE_NUMBER": {
      return { ...state, number: action.payload };
    }
    case "INCREASE_SCORE": {
      return { ...state, score: action.payload };
    }
    case "GET_QUES": {
      return { ...state, questions: action.payload };
    }
    case "WRONG_ANSWER": {
      return {
        ...state,
        wrongAnswers: [...state.wrongAnswers, action.payload],
      };
    }
  }
};

export default reducer;
