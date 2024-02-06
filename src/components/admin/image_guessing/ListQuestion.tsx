"use client";
import Image from "next/image";
import * as React from "react";
import { LiaTimesSolid } from "react-icons/lia";
import EditQuestionModal from "./EditQuestionModal";
import DeleteQuestionModal from "./DeleteQuestionModal";

interface IListQuestionProps {
  qData: number;
}

const ListQuestion: React.FunctionComponent<IListQuestionProps> = ({
  qData,
}) => {
  const [showEditModal, setShowEditModal] = React.useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = React.useState<boolean>(false);

  const toggleEditModal = () => {
    setShowEditModal((prev) => !prev);
  };

  const toggleDeleteModal = () => {
    setShowDeleteModal((prev) => !prev);
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
            src={
              "https://res.cloudinary.com/dqd5vv1ln/image/upload/v1706399121/Gamify/05EJgFQEnogKigDmIVj1VI1-1.fit_lim.size_840x473.v1685049487_ua00v4.jpg"
            }
            alt="mouse"
            width={1000}
            height={1000}
            priority={true}
          />
          <p className="absolute text-white z-50 text-3xl font-medium">
            {qData + 1}
          </p>
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10 rounded-full w-[80px] h-[80px]"></div>
        </div>
      </div>
      {showDeleteModal && <DeleteQuestionModal hideModal={toggleDeleteModal} qid={qData} />}
      {showEditModal && <EditQuestionModal hideModal={toggleEditModal} />}
    </>
  );
};

export default ListQuestion;
