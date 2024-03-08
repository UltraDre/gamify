import GameOfTheWeek from "@/components/general/GameOfTheWeek";
import React from "react";

const Gotw = () => {
  // Guess the image
  // const currentGame = {
  //   id_name: "guesstheimage",
  //   description: "Guess the image",
  //   image:
  //     "https://res.cloudinary.com/dqd5vv1ln/image/upload/v1706450981/Gamify/depositphotos_664675456-stock-illustration-game-controller-natural-colors-minimalist_wyo6ge.webp",
  // };

  // Quiz Ladder
  // const currentGame = {
  //   id_name: "quizladder",
  //   description: "quiz ladder",
  //   image:
  //     "https://res.cloudinary.com/dqd5vv1ln/image/upload/v1706647120/Gamify/unnamed_igfxgi.webp",
  // };

  // Match ups
  // const currentGame = {
  //   id_name: "matchups",
  //   description: "matchups",
  //   image:
  //     "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709388947/product_images/82dfe079-19c4-40a6-947e-3e95b4784fa3.png",
  // };

  // Slide Puzzle 
  const currentGame = {
    id_name: "slidepuzzle",
    description: "slide puzzle",
    image:
      "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709728139/product_images/fc808236-8a54-4d74-b445-eb57fd25c7ef.png",
  };

  return (
    <GameOfTheWeek
      game_link={currentGame.id_name}
      game_name={currentGame.description}
      game_img={currentGame.image}
    />
  );
};

export default Gotw;
