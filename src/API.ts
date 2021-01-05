import { qAndA, Question } from "./type/Type";

const shuffledAnswers = (array: any[]) => {
  return [...array].sort(() => Math.random() - 0.5);
};
export const fetchQuizs = async (amount: number): Promise<qAndA[]> => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}`;
  const data = await (await fetch(endpoint)).json();
  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffledAnswers([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
