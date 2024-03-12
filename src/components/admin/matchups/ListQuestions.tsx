"use client";
import { CodeSnippet, matchupData } from "@/types/types";
import * as React from "react";
import { LiaTimesSolid } from "react-icons/lia";
import DeleteQuestionModal from "../DeleteQuestionModal";
import MatchEditModal from "./MatchEditModal";

interface IListQuestionsProps {
  codeSnippets: CodeSnippet[];
  expectedOutputs: CodeSnippet[];
  handleDelete: (e: string) => void;
  handleQuesEdit: (e: matchupData) => void;
  questionId: string;
  questionNumber: number;
}

const ListQuestions: React.FunctionComponent<IListQuestionsProps> = ({
  codeSnippets,
  expectedOutputs,
  handleDelete,
  handleQuesEdit,
  questionId,
  questionNumber,
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
          <p className="absolute text-white z-50 text-3xl font-medium">
            {questionNumber}
          </p>
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10 rounded-full w-[80px] h-[80px]"></div>
        </div>
      </div>

      {showDeleteModal && (
        <DeleteQuestionModal
          handleDelete={handleDelete}
          hideModal={toggleDeleteModal}
          questionNumber={questionNumber}
          qid={questionId}
        />
      )}

      {showEditModal && (
        <MatchEditModal
          codeSnippets={codeSnippets}
          expectedOutputs={expectedOutputs}
          handleQuesEdit={handleQuesEdit}
          toggleEditModal={toggleEditModal}
          questionId={questionId}
        />
      )}
    </>
  );
};

export default ListQuestions;
