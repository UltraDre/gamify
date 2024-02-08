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
