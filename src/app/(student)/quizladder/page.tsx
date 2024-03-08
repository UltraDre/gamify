"use client";
import QuizResult from "@/components/general/QuizResult";
import Rules from "@/components/general/Rules";
import QuizLadderGame from "@/components/quizladder/QuizLadderGame";
import { quizLadderData } from "@/utils/questionData";
import * as React from "react";

const QuizLadder: React.FunctionComponent = () => {
  const [start, setStart] = React.useState<boolean>(false);
  const [endQuiz, setEndQuiz] = React.useState<boolean>(false);

  const startFunc = () => {
    setStart(true);
  };

  const handleQuizSubmit = (results: { [key: string]: boolean } | number) => {
    console.log(results);
  };

  const handleEndQuiz = () => {
    setEndQuiz(true);
  };

  const handleBeforeUnload = (event: BeforeUnloadEvent) => {
    const message =
      "Are you sure you want to leave? Your progress will be lost.";

    event.returnValue = message; // Standard for most browsers
    return message; // For some older browsers
  };

  React.useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const gameRules = [
    "The game consists of 10 questions each with an increasing difficulty.",
    "Contestants must choose the correct answer from the given options.",
    "Each correct answer accumulates a certain amount of points.",
  ];

  return (
    <div>
      {!start && (
        <Rules
          startFunc={startFunc}
          time={5}
          objective="The primary goal is to have fun and challenge your knowledge skills within the given constraints. Enjoy the game!"
          game_name="quiz ladder"
          game_rules={gameRules}
        />
      )}

      {start && !endQuiz && (
        <QuizLadderGame
          quizData={quizLadderData}
          handleEndQuiz={handleEndQuiz}
          handleQuizSubmit={handleQuizSubmit}
        />
      )}

      {start && endQuiz && <QuizResult gameName="quiz ladder" />}
    </div>
  );
};

export default QuizLadder;
