import * as React from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { SlidePuzzleType } from "@/types/types";
import Image from "next/image";
import PuzzleEditModal from "./PuzzleEditeModal";

interface IPuzzleActiveProps {
  puzzleData: SlidePuzzleType;
  clearTempData: () => void;
  handleFormSubmit: (value: React.SetStateAction<SlidePuzzleType>) => void;
}

const PuzzleActive: React.FunctionComponent<IPuzzleActiveProps> = ({
  puzzleData,
  clearTempData,
  handleFormSubmit,
}) => {
  // USE STATES
  const [showDeleteModal, setShowDeleteModal] = React.useState<boolean>(false);
  const [showEditModal, setShowEditModal] = React.useState<boolean>(false);

  // FUNCTIONS
  const toggleDeleteModal = () => {
    setShowDeleteModal((prev) => !prev);
  };

  const toggleEditModal = () => {
    setShowEditModal((prev) => !prev);
  };

  return (
    <>
      <div className="relative">
        <button
          className="absolute text-2xl -top-2 -right-5"
          onClick={toggleDeleteModal}
        >
          <LiaTimesSolid />
        </button>
        <div
          onClick={toggleEditModal}
          className="rounded-full w-[80px] h-[80px] overflow-hidden flex items-center justify-center cursor-pointer"
        >
          <Image
            src={puzzleData?.originalImg}
            alt="mouse"
            width={1000}
            height={1000}
            priority={true}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10 rounded-full w-[80px] h-[80px]"></div>
        </div>
      </div>

      {/* Delete Modal  */}
      {showDeleteModal && (
        <div className="fixed z-[90] w-[80%] left-0 h-screen top-0 bg-dark bg-opacity-50 flex items-center justify-center">
          <div className="bg-white px-14 rounded-md py-14 gap-y-6 flex items-center flex-col justify-center">
            <p className="text-2xl font-medium">
              Are you sure you want to delete puzzle
            </p>
            <div className="flex gap-x-8">
              <button
                className="bg-dark text-light text-xl capitalize w-[100px] rounded-md py-4"
                onClick={toggleDeleteModal}
              >
                no
              </button>
              <button
                className=" bg-red-600 text-light text-xl capitalize w-[100px] rounded-md py-4"
                onClick={clearTempData}
              >
                yes
              </button>
            </div>
          </div>
        </div>
      )}

      {showEditModal && (
        <PuzzleEditModal
          toggleEditModal={toggleEditModal}
          puzzleData={puzzleData}
          handleFormSubmit={handleFormSubmit}
        />
      )}
    </>
  );
};

export default PuzzleActive;
