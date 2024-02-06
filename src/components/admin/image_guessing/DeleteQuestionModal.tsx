import * as React from "react";

interface IDeleteQuestionModalProps {
  hideModal: () => void;
  qid: number;
}

const DeleteQuestionModal: React.FunctionComponent<
  IDeleteQuestionModalProps
> = ({ hideModal, qid }) => {
  return (
    <div className="fixed z-[90] w-[80%] left-0 h-screen top-0 bg-dark bg-opacity-50 flex items-center justify-center">
      <div className="bg-white px-14 rounded-md py-14 gap-y-6 flex items-center flex-col justify-center">
        <p className="text-2xl font-medium">
          Are you sure you want to delete question {qid + 1}
        </p>
        <div className="flex gap-x-8">
          <button
            className="bg-dark text-light text-xl capitalize w-[100px] rounded-md py-4"
            onClick={hideModal}
          >
            no
          </button>
          <button className=" bg-red-600 text-light text-xl capitalize w-[100px] rounded-md py-4">
            yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteQuestionModal;
