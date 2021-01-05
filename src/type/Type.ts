export interface cardProps {
  noOfQues: number;
  questions: string[];
  number: number;
  score: number;
  wrongAnswers: string[];
}
export interface Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;

  correct_answer: string;
  incorrect_answers: string;
}
export interface qAndA extends Question {
  answers: string[];
}
