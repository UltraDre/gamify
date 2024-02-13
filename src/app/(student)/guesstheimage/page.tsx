"use client";
import QuizResult from "@/components/general/QuizResult";
import Rules from "@/components/general/Rules";
import GtiGame from "@/components/gti/GtiGame";
import { imageGuessingData } from "@/utils/questionData";
import * as React from "react";

const Gti: React.FunctionComponent = () => {
  const [start, setStart] = React.useState<boolean>(false);
  const [endQuiz, setEndQuiz] = React.useState<boolean>(false);

  const startFunc = () => {
    setStart(true);
  };

  const handleQuizSubmit = (results: { [key: string]: boolean }) => {
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
    "You have 2 minutes (120 seconds) to make guesses for all 20 images.",
    "If you are unsure, skip to the next image. You can revert back to a previous guess.",
    "A brief description of what's in the image will be displayed above the answer box to guide your guesses.",
    "The score will be displayed after the countdown ends. Each correct guess earns points.",
  ];

  return (
    <>
      {!start && (
        <Rules
          startFunc={startFunc}
          time={2}
          objective="The primary goal is to have fun and challenge your knowledge skills within the given constraints. Enjoy the game!"
          game_name="image guesses"
          game_rules={gameRules}
        />
      )}

      {start && !endQuiz && (
        <GtiGame
          quizData={imageGuessingData}
          handleEndQuiz={handleEndQuiz}
          handleQuizSubmit={handleQuizSubmit}
        />
      )}

      {start && endQuiz && <QuizResult />}
    </>
  );
};

export default Gti;
