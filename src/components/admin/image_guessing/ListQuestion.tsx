"use client";
import Image from "next/image";
import * as React from "react";
import { LiaTimesSolid } from "react-icons/lia";
import EditQuestionModal from "./EditQuestionModal";
import DeleteQuestionModal from "./DeleteQuestionModal";
import { Qdata } from "@/types/types";

interface IListQuestionProps {
  qData: Qdata;
  handleDelete: (e: string) => void;
  handleQuesEdit: (e: Qdata) => void;
}

const ListQuestion: React.FunctionComponent<IListQuestionProps> = ({
  qData,
  handleDelete,
  handleQuesEdit
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
            src={qData.imageUrl}
            alt="mouse"
            width={1000}
            height={1000}
            priority={true}
          />
          <p className="absolute text-white z-50 text-3xl font-medium">
            {qData.id}
          </p>
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10 rounded-full w-[80px] h-[80px]"></div>
        </div>
      </div>
      {showDeleteModal && (
        <DeleteQuestionModal
          handleDelete={handleDelete}
          hideModal={toggleDeleteModal}
          qid={qData.id}
        />
      )}
      {showEditModal && (
        <EditQuestionModal handleQuesEdit={handleQuesEdit} hideModal={toggleEditModal} qData={qData} />
      )}
    </>
  );
};

export default ListQuestion;
