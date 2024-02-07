import { Qdata } from "@/types/types";
import Image from "next/image";
import * as React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";

interface IEditQuestionModalProps {
  hideModal: () => void;
  qData: Qdata;
  handleQuesEdit: (e: Qdata) => void;
}

const EditQuestionModal: React.FunctionComponent<IEditQuestionModalProps> = ({
  hideModal,
  qData,
  handleQuesEdit,
}) => {
  const [question, setQuestion] = React.useState<string>(qData.question);
  const [answer, setAnswer] = React.useState<string>(qData.answer);
  const [imgFile, setImgFile] = React.useState<File | string>("");
  const [selectedImage, setSelectedImage] = React.useState(qData.imageUrl);
  const [err, setErr] = React.useState(false);

  // FUNCTIONS
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setImgFile(file);
    }
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleQuesEdit({ id: qData.id, answer, question, imageUrl: selectedImage });
    hideModal()
  };

  // USE EFFECTS
  React.useEffect(() => {
    if (!selectedImage || !question || !answer) {
      setErr(true);
    } else {
      setErr(false);
    }
  }, [selectedImage, question, answer]);

  return (
    <div className="fixed z-[90] w-[80%] left-0 h-screen top-0 bg-dark bg-opacity-50 flex items-center justify-center">
      <form
        onSubmit={handleFormSubmit}
        className="flex gap-y-6 flex-col relative items-center justify-center py-10 px-12 rounded-md mt-10 bg-white"
      >
        <div
          className="absolute text-3xl text-dark cursor-pointer right-10 top-10"
          onClick={hideModal}
        >
          <LiaTimesSolid />
        </div>
        <p className="text-2xl font-semibold capitalize text-center">
          edit questions
        </p>
        <div className="border-2 rounded-md w-40 h-36 flex items-center justify-center overflow-hidden">
          <label
            htmlFor="addImage"
            className={`cursor-pointer text-5xl absolute z-50 ${
              selectedImage ? "text-light" : "text-dark"
            }`}
          >
            <CiCirclePlus />
          </label>
          <input
            id="addImage"
            hidden
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          {selectedImage && (
            <Image
              src={selectedImage}
              alt="mouse"
              width={1000}
              height={1000}
              priority={true}
            />
          )}
        </div>

        <textarea
          name="text"
          id=""
          cols={30}
          rows={10}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="text-lg focus:outline-none border-2 rounded-md w-[400px] resize-none px-6 py-4 h-[150px]"
          placeholder="Type the question here"
        ></textarea>

        <textarea
          name="text"
          id=""
          cols={30}
          rows={10}
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="text-lg focus:outline-none border-2 rounded-md w-[400px] resize-none px-6 py-4 h-[150px]"
          placeholder="Type the answer here"
        ></textarea>

        <button
          disabled={err}
          className={`rounded-md capitalize text-lg ${
            err ? "bg-light text-dark cursor-not-allowed" : "bg-dark text-light"
          }  w-[180px] py-4`}
        >
          save
        </button>
      </form>
    </div>
  );
};

export default EditQuestionModal;
