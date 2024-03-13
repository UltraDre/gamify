import ErrorDisplay from "@/components/general/ErrorDisplay";
import { SlidePiecesType, SlidePuzzleType } from "@/types/types";
import Image from "next/image";
import * as React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";

interface IPuzzleEditModalProps {
  toggleEditModal: () => void;
  puzzleData: SlidePuzzleType;
  handleFormSubmit: (value: React.SetStateAction<SlidePuzzleType>) => void;
}

const PuzzleEditModal: React.FunctionComponent<IPuzzleEditModalProps> = ({
  toggleEditModal,
  puzzleData,
  handleFormSubmit,
}) => {
  // USE STATES
  const [boardPieces, setBoardPieces] = React.useState<SlidePiecesType[]>(
    puzzleData.slidePieces
  );
  const [formErr, setFormErr] = React.useState(false);
  const [originalImg, setOriginalImg] = React.useState<string>(
    puzzleData.originalImg
  );
  const [imageName, setImageName] = React.useState<string>(
    puzzleData.imageName
  );

  //   FUNCTIONS
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
    if (
      !isLengthUpTo(boardPieces, puzzleData.slidePieces.length) ||
      !originalImg ||
      !imageName
    ) {
      setFormErr(true);
      return;
    }

    handleFormSubmit({
      originalImg,
      puzzleSize: puzzleData.puzzleSize,
      imageName,
      slidePieces: boardPieces,
    });
    toggleEditModal();
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

      <div className="fixed z-[90] w-[80%] left-0 h-screen top-0 bg-dark bg-opacity-50 flex items-center justify-center">
        <div className="bg-white w-[90%] rounded-md pt-12 pb-32 mt-10 px-14 relative">
          <div
            className="absolute text-3xl text-dark cursor-pointer right-10 top-10"
            onClick={toggleEditModal}
          >
            <LiaTimesSolid />
          </div>

          <p className="text-center text-2xl">Edit Puzzle</p>

          <div className="w-full flex gap-x-20 mt-10 justify-center items-center ">
            {/* Pieces  */}
            <div className="bg-[#0e0b16] rounded-2xl p-5 shadow-xl">
              <div
                className={`w-[600px] grid ${
                  puzzleData.puzzleSize === 4
                    ? "grid-cols-4"
                    : puzzleData.puzzleSize === 3
                    ? "grid-cols-3"
                    : "grid-cols-5"
                } gap-x-0 bg-[#332f3d]`}
              >
                {boardPieces.map(({ id, imgUrl }) => (
                  <div
                    className={`${
                      puzzleData.puzzleSize === 4
                        ? "w-[150px] h-[150px]"
                        : puzzleData.puzzleSize === 3
                        ? "w-[200px] h-[200px]"
                        : "w-[120px] h-[120px]"
                    } border border-[#0e0b16] cursor-pointer relative overflow-hidden`}
                    key={id}
                  >
                    <label
                      htmlFor={`${id + 1}`}
                      className={`cursor-pointer text-7xl absolute z-50  text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
                    >
                      <CiCirclePlus />
                    </label>
                    <input
                      type="file"
                      hidden
                      id={`${id + 1}`}
                      onChange={(e) => handleImageChange(e, id)}
                    />
                    <Image
                      src={imgUrl}
                      alt="img"
                      width={1000}
                      height={1000}
                      priority={true}
                    />
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
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PuzzleEditModal;
