import * as React from "react";

interface ISubmitModalProps {
  toggleModal: () => void;
  handleSubmit: () => void;
}

const SubmitModal: React.FunctionComponent<ISubmitModalProps> = ({
  toggleModal,
  handleSubmit,
}) => {
  return (
    <div className="fixed z-[90] w-full left-0 h-screen top-0 bg-dark bg-opacity-50 flex items-center justify-center">
      <div className="bg-white px-14 rounded-md py-14 gap-y-6 flex items-center flex-col justify-center">
        <p className="text-2xl font-medium">Are you sure you want to submit</p>
        <div className="flex gap-x-8">
          <button
            className="bg-dark text-light text-xl capitalize w-[100px] rounded-md py-4"
            onClick={toggleModal}
          >
            no
          </button>
          <button
            className=" bg-red-600 text-light text-xl capitalize w-[100px] rounded-md py-4"
            onClick={handleSubmit}
          >
            yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubmitModal;
