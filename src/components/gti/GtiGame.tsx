import Image from "next/image";
import * as React from "react";
import { Qdata } from "@/types/types";
import CountDownTimer from "../general/CountDownTimer";
import SubmitModal from "../general/SubmitModal";

interface IGitGameProps {
  quizData: Qdata[];
  handleEndQuiz: () => void;
  handleQuizSubmit: (results: { [key: string]: boolean } | number) => void;
}

const GtiGame: React.FunctionComponent<IGitGameProps> = ({
  quizData,
  handleEndQuiz,
  handleQuizSubmit,
}) => {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [showSubmitModal, setShowSubmitModal] = React.useState(false);
  const [userAnswers, setUserAnswers] = React.useState<{
    [key: string]: string;
  }>({});

  const handleNext = () => {
    setCurrentQuestion((prev) => Math.min(prev + 1, quizData.length - 1));
  };

  const handlePrev = () => {
    setCurrentQuestion((prev) => Math.max(prev - 1, 0));
  };

  const handleToggleModal = () => {
    setShowSubmitModal((prev) => !prev);
  };

  const handleSubmit = () => {
    handleQuizSubmit(getResults());
    handleEndQuiz();
  };

  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserAnswers((prev) => ({
      ...prev,
      [quizData[currentQuestion].id]: event.target.value,
    }));
  };

  const getResults = () => {
    const results: { [key: string]: boolean } = {};

    quizData.forEach((question) => {
      const userAnswer = userAnswers[question.id] || "";
      results[question.id] =
        userAnswer.toLowerCase() === question.answer.toLowerCase();
    });

    return results;
  };

  return (
    <div className="w-full h-screen px-40 py-20 flex relative">
      {/* Time  */}
      <div className="font-semibold text-5xl absolute top-48 right-32">
        <CountDownTimer
          initialTimeInMinutes={2}
          handleEndQuiz={handleEndQuiz}
          getResult={getResults}
          handleQuizSubmit={handleQuizSubmit}
        />
      </div>

      <div className="w-1/2 h-full flex flex-col items-center justify-center">
        <p className="text-2xl font-semibold">Guess the image</p>
        <div className="w-[80px] h-[80px] mt-8 rounded-full bg-black text-white flex items-center justify-center">
          <p className="text-3xl">{currentQuestion + 1}</p>
        </div>
        <div className="w-[550px] mt-10 px-4 py-6 justify-center flex items-center border-black rounded-md border-2">
          <div className="rounded-md w-[500px] h-[500px] overflow-hidden">
            <Image
              src={quizData[currentQuestion].imageUrl}
              alt="mouse"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>

      <div className="w-1/2 h-full py-10">
        {/* Profile  */}
        <div className="flex gap-x-5 items-center mt-12">
          <div className="w-[100px] h-[100px] bg-black rounded-full overflow-hidden">
            <Image
              src={
                "https://res.cloudinary.com/dqd5vv1ln/image/upload/v1706526910/Gamify/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector_vji9kt.jpg"
              }
              alt="profile image"
              width={1000}
              height={1000}
              priority
            />
          </div>
          <div className="w-[200px]">
            <p className="capitalize text-xl font-bold">john doe</p>
            <p className="text-lg uppercase font-medium">Hnd 2</p>
          </div>
        </div>

        {/* Question and answer  */}
        <div className="mt-10 py-10 h-[600px] flex flex-col justify-center">
          <p className="w-[500px] text-2xl font-semibold text-wrap mt-10">
            {quizData[currentQuestion].question}
          </p>

          <input
            type="text"
            value={userAnswers[quizData[currentQuestion].id] || ""}
            onChange={handleAnswerChange}
            placeholder="type your answer here"
            className="focus:outline-none border-2 border-black w-[500px] h-[80px] text-2xl rounded-md mt-10 px-5"
          />

          <div className="flex justify-between items-center w-[500px] mt-[150px]">
            <button
              className="w-[150px] text-3xl bg-black text-white rounded-md py-5"
              onClick={handlePrev}
            >
              {"<<"}
            </button>
            <p className="text-2xl">
              {currentQuestion + 1} of {quizData.length}
            </p>

            {currentQuestion === quizData.length - 1 ? (
              <button
                className="w-[150px] text-xl bg-green-600 text-white rounded-md py-5"
                onClick={handleToggleModal}
              >
                Submit
              </button>
            ) : (
              <button
                className="w-[150px] text-3xl bg-black text-white rounded-md py-5"
                onClick={handleNext}
              >
                {">>"}
              </button>
            )}
          </div>
        </div>
      </div>

      {showSubmitModal && (
        <SubmitModal
          toggleModal={handleToggleModal}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default GtiGame;
