"use client";
import Rules from "@/components/general/Rules";
import GtiGame from "@/components/gti/GtiGame";
import React, { useState } from "react";

const Gti = () => {
  const [start, setStart] = useState(false);

  const startFunc = () => {
    setStart(true);
  };

  const endStartFunc = () => {
    setStart(false);
  };

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
      {start && <GtiGame />}
    </>
  );
};

export default Gti;
