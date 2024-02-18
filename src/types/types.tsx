export type Qdata = {
  id: string;
  imageUrl: string;
  question: string;
  answer: string;
};

export type QlData = {
  id: string;
  question: string;
  answers: {
    alpha: string;
    answer: string;
  }[];
  correct_answer: string;
};

export type AnswersProp = {
  alpha: string;
  answer: string;
};

export type StudentProp = {
  id: number;
  name: string;
  level: string;
  matric_no: string;
  medals: { first: number; second: number; third: number };
  imageGuessing: {
    played: number;
    top3: number;
    top10: number;
    highestScore: number;
    correctScore: number;
    wrongAnswer: number;
  };
  quizLadder: {
    played: number;
    top3: number;
    top10: number;
    highestScore: number;
    correctScore: number;
    wrongAnswer: number;
  };
};
