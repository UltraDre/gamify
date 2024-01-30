"use client";
import Rules from "@/components/general/Rules";
import QuizLadderGame from "@/components/quizladder/QuizLadderGame";
import * as React from "react";

const QuizLadder: React.FunctionComponent = () => {
  const [start, setStart] = React.useState(false);

  const startFunc = () => {
    setStart(true);
  };

  const endStartFunc = () => {
    setStart(false);
  };

  const gameRules = [
    "The game consists of 10 questions each with an increasing difficulty.",
    "Contestants must choose the correct answer from the given options.",
    "Each correct answer accumulates a certain amount of points.",
  ];

  return (
    <>
      {!start && (
        <Rules
          startFunc={startFunc}
          time={5}
          objective="The primary goal is to have fun and challenge your knowledge skills within the given constraints. Enjoy the game!"
          game_name="quiz ladder"
          game_rules={gameRules}
        />
      )}
      {start && <QuizLadderGame />}
    </>
  );
};

export default QuizLadder;