import * as React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";

interface IEditQuestionModalProps {
  hideModal: () => void;
}

const EditQuestionModal: React.FunctionComponent<IEditQuestionModalProps> = ({
  hideModal,
}) => {
  return (
    <div className="fixed z-[90] w-[80%] left-0 h-screen top-0 bg-dark bg-opacity-50 flex items-center justify-center">
      <form className="flex gap-y-6 flex-col relative items-center justify-center py-10 px-12 rounded-md mt-10 bg-white">
        <div
          className="absolute text-3xl text-dark cursor-pointer right-10 top-10"
          onClick={hideModal}
        >
          <LiaTimesSolid />
        </div>
        <p className="text-2xl font-semibold capitalize text-center">
          edit questions
        </p>
        <div className="border-2 rounded-md w-40 h-36 flex items-center justify-center">
          <p className="cursor-pointer text-5xl">
            <CiCirclePlus />
          </p>
        </div>

        <textarea
          name="text"
          id=""
          cols={30}
          rows={10}
          className="text-lg focus:outline-none border-2 rounded-md w-[400px] resize-none px-6 py-4 h-[150px]"
          placeholder="Type the question here"
        ></textarea>

        <textarea
          name="text"
          id=""
          cols={30}
          rows={10}
          className="text-lg focus:outline-none border-2 rounded-md w-[400px] resize-none px-6 py-4 h-[150px]"
          placeholder="Type the answer here"
        ></textarea>

        <button className="rounded-md capitalize text-lg bg-dark text-light w-[180px] py-4">
          save
        </button>
      </form>
    </div>
  );
};

export default EditQuestionModal;
