import Image from "next/image";
import * as React from "react";
import Puzzle from "./Puzzle";
import { SlidePuzzleType } from "@/types/types";

interface ISlidePuzzleGameProps {
  SlidePuzzleData: SlidePuzzleType;
  handleEndQuiz: () => void;
  handleQuizSubmit: (results: { [key: string]: boolean } | number) => void;
  puzzleSize: number;
  duration: number
}

const SlidePuzzleGame: React.FunctionComponent<ISlidePuzzleGameProps> = ({
  SlidePuzzleData,
  handleEndQuiz,
  handleQuizSubmit,
  puzzleSize,
  duration
}) => {
  return (
    <div>
      <div className="w-full h-screen px-40 py-20 flex-col flex items-center justify-center relative">
        {/* user profile  */}
        <div className="flex gap-x-5 items-center absolute right-48 top-20">
          <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
            <Image
              src={
                "https://res.cloudinary.com/dqd5vv1ln/image/upload/v1706526910/Gamify/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector_vji9kt.jpg"
              }
              alt="profile image"
              width={1000}
              height={1000}
            />
          </div>
          <div className="w-[200px]">
            <p className="capitalize text-xl font-bold">john doe</p>
            <p className="text-lg uppercase font-medium">Hnd 2</p>
          </div>
        </div>

        {/* Game Layout  */}
        <div className="w-full flex gap-x-20 mt-10 justify-center items-center ">
          <Puzzle
            size={puzzleSize}
            puzzleData={SlidePuzzleData}
            handleEndQuiz={handleEndQuiz}
            handleQuizSubmit={handleQuizSubmit}
            duration={duration}
          />

          <div className="space-y-3">
            <p className="text-2xl font-medium text-center capitalize">
              {SlidePuzzleData.imageName}
            </p>
            <div className="w-[500px] h-[500px] rounded-md overflow-hidden bg-gray-400">
              <Image
                src={SlidePuzzleData.originalImg}
                alt={SlidePuzzleData.imageName}
                width={1000}
                height={1000}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlidePuzzleGame;
