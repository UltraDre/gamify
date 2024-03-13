"use client";
import PuzzleActive from "@/components/admin/slide_puzzle/PuzzleActive";
import PuzzleSetup from "@/components/admin/slide_puzzle/PuzzleSetup";
import { SlidePuzzleType } from "@/types/types";
import { adminRoutes } from "@/utils/adminRoutes";
import { useRouter } from "next/navigation";
import * as React from "react";

interface ISlidePuzzleProps {}

const SlidePuzzle: React.FunctionComponent<ISlidePuzzleProps> = (props) => {
  // USE STATES
  const [conditionMeet, setConditionMeet] = React.useState<boolean>(false);
  const [tempData, setTempData] = React.useState<SlidePuzzleType>({
    originalImg: "",
    slidePieces: [],
    imageName: "",
    puzzleSize: 0,
  });
  const [puzzleSize, setPuzzleSize] = React.useState<number>(3);

  // DECLARES
  const router = useRouter();

  //   FUNCTIONS
  const handlePuzzleSize = (size: number) => {
    setPuzzleSize(size);
  };

  const clearTempData = () => {
    setTempData({
      originalImg: "",
      slidePieces: [],
      imageName: "",
      puzzleSize: 0,
    });
  };

  // USE EFFECTS
  React.useEffect(() => {
    const sessionId = localStorage.getItem("dsspid");
    const gotw = localStorage.getItem("dgoftw") === "slide puzzle";
    const semes = localStorage.getItem("dsspid");
    const level = localStorage.getItem("dslpidd");
    const time = localStorage.getItem("dpidtp");

    if (sessionId && gotw && semes && level && time) {
      setConditionMeet(true);
    }

    const timeOut = setTimeout(() => {
      if (!conditionMeet) {
        router.push(adminRoutes.game_setting);
      }
    }, 2000);

    return () => clearTimeout(timeOut);
  }, [conditionMeet]);

  return conditionMeet ? (
    <div className="bg-light min-w-full min-h-screen py-12 flex items-center justify-center flex-col">
      {/* Questions  */}
      <p className="text-2xl font-semibold capitalize">puzzle</p>
      <div className="flex flex-wrap gap-x-10 items-center mt-10">
        {tempData.slidePieces.length === 0 && (
          <p className="text-xl text-dark text-center">
            Puzzle will appear here
          </p>
        )}

        {tempData.slidePieces.length > 0 && (
          <PuzzleActive
            puzzleData={tempData}
            clearTempData={clearTempData}
            handleFormSubmit={setTempData}
          />
        )}
      </div>

      {/* Add Questions  */}
      <div className="bg-white w-[90%] relative rounded-md pt-12 pb-32 mt-10 px-14">
        <p className="text-2xl font-semibold capitalize text-center">
          puzzle setup
        </p>

        {/* Puzzle Size  */}
        {tempData.slidePieces.length === 0 && (
          <div className="space-y-2 mt-3 mb-10">
            <p className="text-semiDark text-2xl capitalize text-center">
              puzzle size
            </p>
            <div className="flex gap-x-10 items-center justify-center">
              <button
                className={`w-[130px] py-2 ${
                  puzzleSize === 3
                    ? "bg-semiDark text-white"
                    : "bg-gray-200 text-semiDark"
                } text-xl rounded-md`}
                onClick={() => handlePuzzleSize(3)}
              >
                3 by 3
              </button>
              <button
                className={`w-[130px] py-2 ${
                  puzzleSize === 4
                    ? "bg-semiDark text-white"
                    : "bg-gray-200 text-semiDark"
                } text-xl rounded-md`}
                onClick={() => handlePuzzleSize(4)}
              >
                4 by 4
              </button>
              <button
                className={`w-[130px] py-2 ${
                  puzzleSize === 5
                    ? "bg-semiDark text-white"
                    : "bg-gray-200 text-semiDark"
                } text-xl rounded-md`}
                onClick={() => handlePuzzleSize(5)}
              >
                5 by 5
              </button>
            </div>
          </div>
        )}

        {/* Board  */}
        {tempData.slidePieces.length === 0 ? (
          <PuzzleSetup size={puzzleSize} handleFormSubmit={setTempData} />
        ) : (
          <div className="mt-10 w-full relative flex items-center justify-center">
            <p className="text-2xl"> A puzzle is already created</p>
          </div>
        )}
      </div>
    </div>
  ) : null;
};

export default SlidePuzzle;
