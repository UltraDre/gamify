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
  imgUrl: string;
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

export type CodeSnippet = {
  id: string;
  img: string;
  correctAnswer: number;
};

export type matchupData = {
  _id: string;
  codeSnippets: CodeSnippet[];
  expectedOutputs: CodeSnippet[];
};

export type SelectedAnswer = {
  id: number;
  codeSnippet: { id: string; selectedAnswer: number; uid: number }[];
  expectedOutput: { id: string; selectedAnswer: number; uid: number }[];
};

export type FindUID = {
  uid: number;
  selectedAnswer: number;
  id: string;
};

export type SlidePuzzleType = {
  originalImg: string;
  slidePieces: SlidePiecesType[];
  imageName: string;
  puzzleSize: number;
};

export type SlidePiecesType = {
  id: number;
  imgUrl: string;
};
