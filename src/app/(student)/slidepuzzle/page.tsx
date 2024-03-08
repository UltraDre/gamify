"use client";
import QuizResult from "@/components/general/QuizResult";
import Rules from "@/components/general/Rules";
import SlidePuzzleGame from "@/components/slidepuzzle/SlidePuzzleGame";
import { SlidePuzzleDataFive, SlidePuzzleDataFour, SlidePuzzleDataThree } from "@/utils/questionData";
import * as React from "react";

const SlidePuzzle: React.FunctionComponent = () => {
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

  // const handleBeforeUnload = (event: BeforeUnloadEvent) => {
  //   const message =
  //     "Are you sure you want to leave? Your progress will be lost.";

  //   event.returnValue = message; // Standard for most browsers
  //   return message; // For some older browsers
  // };

  // React.useEffect(() => {
  //   window.addEventListener("beforeunload", handleBeforeUnload);

  //   return () => {
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //   };
  // }, []);

  const gameRules = [
    "The game consists of pieces of a given picture, you are to fit the pieces together to become whole.",
    "Contestants must carefully align the pieces.",
    "Each correct answer accumulates a certain amount of points.",
  ];

  const puzzleSize = SlidePuzzleDataFive.puzzleSize;
  const duration = 10

  return (
    <div>
      {!start && (
        <Rules
          startFunc={startFunc}
          time={5}
          objective="The primary goal is to have fun and challenge your knowledge skills within the given constraints. Enjoy the game!"
          game_name="slide puzzle"
          game_rules={gameRules}
        />
      )}

      {start && !endQuiz && (
        <SlidePuzzleGame
          SlidePuzzleData={SlidePuzzleDataFive}
          handleEndQuiz={handleEndQuiz}
          handleQuizSubmit={handleQuizSubmit}
          puzzleSize={puzzleSize}
          duration={duration}
        />
      )}

      {start && endQuiz && <QuizResult gameName="slide puzzle" />}
    </div>
  );
};

export default SlidePuzzle;
