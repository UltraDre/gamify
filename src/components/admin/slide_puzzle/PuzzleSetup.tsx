import ErrorDisplay from "@/components/general/ErrorDisplay";
import { SlidePiecesType, SlidePuzzleType } from "@/types/types";
import Image from "next/image";
import * as React from "react";
import { CiCirclePlus } from "react-icons/ci";

interface IPuzzleSetupProps {
  size: number;
  handleFormSubmit: (value: React.SetStateAction<SlidePuzzleType>) => void;
}

const PuzzleSetup: React.FunctionComponent<IPuzzleSetupProps> = ({
  size,
  handleFormSubmit,
}) => {
  // USE STATES
  const [boardPieces, setBoardPieces] = React.useState<SlidePiecesType[]>([]);
  const [formErr, setFormErr] = React.useState(false);
  const [originalImg, setOriginalImg] = React.useState<string>("");
  const [imageName, setImageName] = React.useState<string>("");

  // DECLARES
  const boardSize = size * size - 1;
  const boardArr = createArray(boardSize);

  //   FUNCTIONS
  function createArray(length: number) {
    return Array.from({ length }, (_, index) => index + 1);
  }

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    const file = e.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      const existingSnippetIndex = boardPieces?.findIndex(
        (item) => item.id === id
      );

      if (existingSnippetIndex !== -1) {
        setBoardPieces((prev) => {
          const updatedBoardPiece = [...prev];
          updatedBoardPiece[existingSnippetIndex] = {
            ...updatedBoardPiece[existingSnippetIndex],
            imgUrl: imageUrl,
          };
          return updatedBoardPiece;
        });
      } else {
        setBoardPieces((prev) => [
          ...prev,
          {
            id,
            imgUrl: imageUrl,
          },
        ]);
      }
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageName(e.target.value.toLowerCase());
  };

  const ogImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setOriginalImg(imageUrl);
    }
  };

  const isLengthUpTo = (arr: SlidePiecesType[], maxLength: number) => {
    return arr.length === maxLength;
  };

  const handleSubmit = () => {
    if (!isLengthUpTo(boardPieces, boardSize) || !originalImg || !imageName) {
      setFormErr(true);
      return;
    }

    handleFormSubmit({
      originalImg,
      puzzleSize: size,
      imageName,
      slidePieces: boardPieces,
    });
  };

  const handleClear = () => {
    setBoardPieces([]);
  };

  //   USE EFFECTS
  React.useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (formErr) {
      timeoutId = setTimeout(() => {
        setFormErr(false);
      }, 3000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [formErr]);

  return (
    <>
      {/* Err  */}
      {formErr && <ErrorDisplay errText="All inputs needs to be provided" />}

      <div className="w-full flex gap-x-20 mt-10 justify-center items-center ">
        {/* Pieces  */}
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
            {boardArr.map((items) => (
              <div
                className={`${
                  size === 4
                    ? "w-[150px] h-[150px]"
                    : size === 3
                    ? "w-[200px] h-[200px]"
                    : "w-[120px] h-[120px]"
                } border border-[#0e0b16] cursor-pointer relative overflow-hidden`}
                key={items}
              >
                <label
                  htmlFor={`${items + 1}`}
                  className={`cursor-pointer text-7xl absolute z-50  text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
                >
                  <CiCirclePlus />
                </label>
                <input
                  type="file"
                  hidden
                  id={`${items + 1}`}
                  onChange={(e) => handleImageChange(e, items)}
                />
                {boardPieces?.map((item) => {
                  const findId = item.id === items;
                  return (
                    findId && (
                      <Image
                        src={item.imgUrl}
                        alt="img"
                        width={1000}
                        height={1000}
                        priority={true}
                        key={item.id}
                      />
                    )
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* main image  */}
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Image name"
            onChange={(e) => handleTextChange(e)}
            className="focus:outline-none border border-gray-400 rounded-md px-6 py-5 w-full"
          />

          <div className="w-[500px] h-[500px] rounded-md overflow-hidden bg-gray-400 relative">
            <label
              htmlFor="og image"
              className={`cursor-pointer text-[6rem] absolute z-50  text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
            >
              <CiCirclePlus />
            </label>
            <input
              type="file"
              hidden
              id="og image"
              onChange={(e) => ogImageChange(e)}
            />
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

      <div className="flex absolute bottom-8 left-1/2 -translate-x-1/2 gap-x-10">
        <button
          className="rounded-md capitalize text-lg bg-dark text-light w-[180px] py-5"
          onClick={handleSubmit}
        >
          add
        </button>
        <button
          className="rounded-md capitalize text-lg bg-red-500 text-light w-[180px] py-5"
          onClick={handleClear}
        >
          clear
        </button>
      </div>
    </>
  );
};

export default PuzzleSetup;
