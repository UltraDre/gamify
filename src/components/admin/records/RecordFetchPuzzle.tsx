import { SlidePiecesType } from "@/types/types";
import { SlidePuzzleDataFour } from "@/utils/questionData";
import Image from "next/image";
import * as React from "react";

interface IRecordFetchPuzzleProps {}

const RecordFetchPuzzle: React.FunctionComponent<IRecordFetchPuzzleProps> = (
  props
) => {
  const [boardPieces, setBoardPieces] = React.useState<SlidePiecesType[]>(
    SlidePuzzleDataFour.slidePieces
  );
  const [originalImg, setOriginalImg] = React.useState<string>(
    SlidePuzzleDataFour.originalImg
  );
  const [imageName, setImageName] = React.useState<string>(
    SlidePuzzleDataFour.imageName
  );
  const [puzzleSize, setPuzzleSize] = React.useState<number>(
    SlidePuzzleDataFour.puzzleSize
  );

  return (
    <div className="w-full">
      <p className="text-2xl font-semibold capitalize text-center">
        slide puzzle
      </p>

      <div className="w-full flex gap-x-20 mt-10 justify-center items-center ">
        {/* Pieces  */}
        <div className="bg-[#0e0b16] rounded-2xl p-5 shadow-xl">
          <div
            className={`w-[600px] grid ${
              puzzleSize === 4
                ? "grid-cols-4"
                : puzzleSize === 3
                ? "grid-cols-3"
                : "grid-cols-5"
            } gap-x-0 bg-[#332f3d]`}
          >
            {boardPieces.map(({ id, imgUrl }) => (
              <div
                className={`${
                  puzzleSize === 4
                    ? "w-[150px] h-[150px]"
                    : puzzleSize === 3
                    ? "w-[200px] h-[200px]"
                    : "w-[120px] h-[120px]"
                } border border-[#0e0b16] cursor-pointer relative overflow-hidden`}
                key={id}
              >
                {imgUrl !== "" && (
                  <Image
                    src={imgUrl}
                    alt="img"
                    width={1000}
                    height={1000}
                    priority={true}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* main image  */}
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Image name"
            value={imageName}
            readOnly
            className="focus:outline-none border border-gray-400 rounded-md px-6 py-5 w-full"
          />

          <div className="w-[500px] h-[500px] rounded-md overflow-hidden bg-gray-400 relative">
            {originalImg && (
              <Image
                src={originalImg}
                alt={"original image"}
                width={1000}
                height={1000}
                priority
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecordFetchPuzzle;
