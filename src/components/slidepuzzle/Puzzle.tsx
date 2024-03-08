import Image from "next/image";
import * as React from "react";
import { SlidePiecesType, SlidePuzzleType } from "@/types/types";
import CountDownTimer from "../general/CountDownTimer";

interface IPuzzleProps {
  size: number;
  puzzleData: SlidePuzzleType;
  handleEndQuiz: () => void;
  handleQuizSubmit: (results: { [key: string]: boolean } | number) => void;
  duration: number
}

const Puzzle: React.FunctionComponent<IPuzzleProps> = ({
  size,
  puzzleData,
  handleEndQuiz,
  handleQuizSubmit,
  duration
}) => {
  // USE STATES
  const [shuffledSlidePieces, setShuffledSlidePieces] = React.useState<
    SlidePiecesType[]
  >([]);

  // FUNCTIONS
  const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const isSolvable = (array: SlidePiecesType[], puzzleSize: number) => {
    const getRow = (index: number) => Math.floor(index / puzzleSize);

    let inversionCount = 0;
    let blankTileRow = 0;

    for (let i = 0; i < array.length - 1; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (
          array[i].imgUrl !== "" &&
          array[j].imgUrl !== "" &&
          array[i].id > array[j].id
        ) {
          inversionCount++;
        }
      }
    }

    // Find the row of the empty tile
    const blankTileIndex = array.findIndex((piece) => piece.imgUrl === "");
    if (blankTileIndex !== -1) {
      blankTileRow = getRow(blankTileIndex);
    }

    if (blankTileRow % 2 === 0) {
      inversionCount++;
    }

    return inversionCount % 2 === 0;
  };

  const shuffleAndCheck = () => {
    let shuffledArray = [...puzzleData.slidePieces];
    shuffleArray(shuffledArray);

    if (!isSolvable(shuffledArray, size)) {
      shuffleAndCheck();
    } else {
      setShuffledSlidePieces(shuffledArray);
    }
  };

  const areAdjacent = (clickedPieceId: number): boolean => {
    const emptyPieceId = puzzleData.puzzleSize * puzzleData.puzzleSize; // ID of the empty piece
    const clickedPieceIndex = shuffledSlidePieces.findIndex(
      (piece) => piece.id === clickedPieceId
    );
    const emptyPieceIndex = shuffledSlidePieces.findIndex(
      (piece) => piece.id === emptyPieceId
    );

    const clickedPieceRow = Math.floor(
      clickedPieceIndex / puzzleData.puzzleSize
    );
    const clickedPieceCol = clickedPieceIndex % puzzleData.puzzleSize;

    const emptyPieceRow = Math.floor(emptyPieceIndex / puzzleData.puzzleSize);
    const emptyPieceCol = emptyPieceIndex % puzzleData.puzzleSize;

    return (
      (Math.abs(clickedPieceRow - emptyPieceRow) === 1 &&
        clickedPieceCol === emptyPieceCol) ||
      (Math.abs(clickedPieceCol - emptyPieceCol) === 1 &&
        clickedPieceRow === emptyPieceRow)
    );
  };

  const handlePieceClick = (clickedPieceId: number) => {
    if (areAdjacent(clickedPieceId)) {
      const clickedPieceIndex = shuffledSlidePieces.findIndex(
        (piece) => piece.id === clickedPieceId
      );
      const emptyPieceIndex = shuffledSlidePieces.findIndex(
        (piece) => piece.id === puzzleData.puzzleSize * puzzleData.puzzleSize
      );

      // Swap the positions of the clicked piece and the empty piece
      const updatedPieces = [...shuffledSlidePieces];
      [updatedPieces[clickedPieceIndex], updatedPieces[emptyPieceIndex]] = [
        updatedPieces[emptyPieceIndex],
        updatedPieces[clickedPieceIndex],
      ];

      setShuffledSlidePieces(updatedPieces);
      checkAllPiecesInPlace(updatedPieces);
    }
  };

  const handleSubmit = (result: number) => {
    handleQuizSubmit(result);
    handleEndQuiz();
  };

  const getResults = (shuffledArray: SlidePiecesType[]) => {
    const correctPieces = shuffledArray.filter(
      (piece, index) => piece.id === index + 1
    );
    return correctPieces.length;
  };

  const checkAllPiecesInPlace = (shuffledArray: SlidePiecesType[]): void => {
    const allPiecesInPlace = shuffledArray.every(
      (piece, index) => piece.id === index + 1
    );

    if (allPiecesInPlace) {
      handleSubmit(getResults(shuffledArray));
    }
  };

  const restartGame = () => {
    shuffleAndCheck();
  };

  // USE EFFECT
  React.useEffect(() => {
    if (puzzleData.slidePieces) {
      shuffleAndCheck();
    }
  }, [puzzleData]);

  return (
    <>
      {/* time  */}
      <div className="absolute top-24 left-48 font-semibold text-5xl">
        <CountDownTimer
          initialTimeInMinutes={duration}
          handleSubmit={handleSubmit}
          getPuzzleResult={getResults}
          shuffledArray={shuffledSlidePieces}
        />
      </div>

      {/* Puzzle pieces  */}
      <div className="bg-[#0e0b16] rounded-2xl p-5 shadow-xl">
        <div
          className={`w-[600px] grid ${
            size === 4
              ? "grid-cols-4"
              : size === 3
              ? "grid-cols-3"
              : "grid-cols-5"
          } gap-x-0 bg-[#332f3d]`}
        >
          {shuffledSlidePieces.map(({ id, imgUrl }) => (
            <div
              className={`${
                size === 4
                  ? "w-[150px] h-[150px]"
                  : size === 3
                  ? "w-[200px] h-[200px]"
                  : "w-[120px] h-[120px]"
              } border border-[#0e0b16] cursor-pointer`}
              key={id}
              onClick={() => handlePieceClick(id)}
            >
              {imgUrl !== "" && (
                <Image
                  src={imgUrl}
                  alt={"image"}
                  width={1000}
                  height={1000}
                  priority
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Restart  */}
      <button
        className="w-[180px] absolute text-xl bg-black text-white rounded-md py-5 bottom-16"
        onClick={restartGame}
      >
        Restart
      </button>
    </>
  );
};

export default Puzzle;
