"use client";
import { adminRoutes } from "@/utils/adminRoutes";
import { useRouter } from "next/navigation";
import * as React from "react";
import { CiCirclePlus } from "react-icons/ci";
import ListQuestion from "@/components/admin/image_guessing/ListQuestion";
import { imageGuessingData } from "@/utils/questionData";
import Image from "next/image";
import { Qdata } from "@/types/types";

interface IImageGuessSetupProps {}

const ImageGuessSetup: React.FunctionComponent<IImageGuessSetupProps> = (
  props
) => {
  // USE STATES
  const [conditionMeet, setConditionMeet] = React.useState<boolean>(false);
  const [question, setQuestion] = React.useState<string>("");
  const [answer, setAnswer] = React.useState<string>("");
  const [imgFile, setImgFile] = React.useState<File | string>("");
  const [selectedImage, setSelectedImage] = React.useState("");
  const [err, setErr] = React.useState({
    imgErr: "",
    questionErr: "",
    answerErr: "",
  });
  const [tempData, setTempData] = React.useState<Qdata[]>(imageGuessingData);

  // DECLARES
  const router = useRouter();

  // FUNCTIONS
  const handleDeleteQues = (props: string) => {
    const filterArr = tempData.filter((items) => items.id !== props);
    setTempData(filterArr);
  };

  const handleQuesEdit = (props: Qdata) => {
    // Find the question in tempData
    const foundQuestion = tempData.find((item) => item.id === props.id);

    if (foundQuestion) {
      const updatedTempData = tempData.map((item) =>
        item.id === props.id
          ? {
              ...item,
              imageUrl: props.imageUrl,
              question: props.question,
              answer: props.answer,
            }
          : item
      );

      setTempData(updatedTempData);
    }
  };

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

    if (!imgFile) {
      setErr((prev) => ({ ...prev, imgErr: "error occured" }));
    } else if (!question) {
      setErr((prev) => ({ ...prev, questionErr: "error occured" }));
    } else if (!answer) {
      setErr((prev) => ({ ...prev, answerErr: "error occured" }));
    } else {
      setTempData((prevData) => [
        ...prevData,
        {
          id: `${prevData.length + 1}`,
          imageUrl: selectedImage,
          question,
          answer,
        },
      ]);

      setImgFile("");
      setSelectedImage("");
      setQuestion("");
      setAnswer("");
    }
  };

  // USE EFFECTS
  React.useEffect(() => {
    const sessionId = localStorage.getItem("dsspid");
    const gotw = localStorage.getItem("dgoftw") === "image guessing";
    const semes = localStorage.getItem("dsspid");
    const level = localStorage.getItem("dslpidd");
    const time = localStorage.getItem("dpidtp");

    if (sessionId && gotw && semes && level && time) {
      setConditionMeet(true);
    }

    const timeOut = setTimeout(() => {
      if (!conditionMeet) {
        router.push(adminRoutes.game_setting);
      }
    }, 2000);

    return () => clearTimeout(timeOut);
  }, [conditionMeet, router]);

  return conditionMeet ? (
    <div className="bg-light min-w-full min-h-screen py-12 flex items-center justify-center flex-col">
      {/* Questions  */}
      <p className="text-3xl font-semibold capitalize">questions</p>
      <div className="flex flex-wrap gap-x-10 items-center mt-10">
        {tempData.length === 0 && (
          <p className="text-xl text-dark text-center">
            Questions will appear here
          </p>
        )}

        {tempData.map(({ id, imageUrl, question, answer }) => (
          <ListQuestion
            key={id}
            qData={{ id, imageUrl, question, answer }}
            handleDelete={handleDeleteQues}
            handleQuesEdit={handleQuesEdit}
          />
        ))}
      </div>

      {/* Add Questions  */}
      <div className="bg-white w-[60%] relative rounded-md pt-12 pb-32 mt-20 px-14">
        <p className="text-3xl font-semibold capitalize text-center">
          add questions
        </p>

        <form
          onSubmit={handleFormSubmit}
          className="flex gap-x-10 justify-center mt-10"
        >
          <div className="space-y-4 relative">
            <p className="capitalize font-medium text-xl text-left">image</p>
            <div className="border-2 rounded-md w-52 h-40 flex items-center justify-center overflow-hidden">
              <label
                htmlFor="addImage"
                className={`cursor-pointer text-5xl absolute z-50 ${
                  imgFile ? "text-light" : "text-dark"
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
            {imgFile === "" && err.imgErr === "error occured" && (
              <p className="absolute text-red-600">Image cannot be empty</p>
            )}
          </div>

          <div className="space-y-3">
            <div className="space-y-4 relative">
              <p className="capitalize font-medium text-xl text-left">
                question
              </p>
              <textarea
                name="text"
                id=""
                cols={30}
                rows={10}
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="text-lg focus:outline-none border-2 rounded-md w-[500px] resize-none px-6 py-4 h-[200px]"
                placeholder="Type the question here"
              ></textarea>
              {question === "" && err.questionErr === "error occured" && (
                <p className="absolute text-red-600 text-right w-full">
                  Question cannot be empty
                </p>
              )}
            </div>

            <div className="space-y-4 relative">
              <p className="capitalize font-medium text-xl text-left">answer</p>
              <textarea
                name="text"
                id=""
                cols={30}
                rows={10}
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="text-lg focus:outline-none border-2 rounded-md w-[500px] resize-none px-6 py-4 h-[200px]"
                placeholder="Type the question here"
              ></textarea>
              {answer === "" && err.answerErr === "error occured" && (
                <p className="absolute w-full text-right text-red-600">
                  Answer cannot be empty
                </p>
              )}
            </div>
          </div>
          <button className="absolute bottom-10 rounded-md left-1/2 -translate-x-1/2 capitalize text-lg bg-dark text-light w-[180px] py-4">
            add
          </button>
        </form>
      </div>
    </div>
  ) : null;
};

export default ImageGuessSetup;
