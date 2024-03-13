"use client";
import Image from "next/image";
import * as React from "react";
import CountDownTimer from "../general/CountDownTimer";
import { QlData } from "@/types/types";
import SubmitModal from "../general/SubmitModal";

interface IQuizLadderGameProps {
  quizData: QlData[];
  handleEndQuiz: () => void;
  handleQuizSubmit: (results: { [key: string]: boolean } | number) => void;
}

const QuizLadderGame: React.FunctionComponent<IQuizLadderGameProps> = ({
  quizData,
  handleEndQuiz,
  handleQuizSubmit,
}) => {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [userAnswers, setUserAnswers] = React.useState<{
    [key: string]: string;
  }>({});
  const [showSubmitModal, setShowSubmitModal] = React.useState(false);

  const handleNext = () => {
    setCurrentQuestion((prev) => Math.min(prev + 1, quizData.length - 1));
  };

  const handlePrev = () => {
    setCurrentQuestion((prev) => Math.max(prev - 1, 0));
  };

  const handleAnswer = (selectedAnswer: string) => {
    setUserAnswers((prev) => ({
      ...prev,
      [quizData[currentQuestion].id]: selectedAnswer,
    }));
  };

  const handleSubmit = () => {
    handleQuizSubmit(getResults());
    handleEndQuiz();
  };

  const handleToggleModal = () => {
    setShowSubmitModal((prev) => !prev);
  };

  const getResults = () => {
    const results: { [key: string]: boolean } = {};
    quizData.forEach((question) => {
      const userAnswer = userAnswers[question.id];
      results[question.id] = userAnswer === question.correct_answer;
    });
    return results;
  };

  return (
    <div className="w-full h-screen px-40 py-20 flex-col flex items-center justify-center relative">
      {/* user profile  */}
      <div className="flex gap-x-5 items-center absolute right-48 top-44">
        <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
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

      {/* time  */}
      <div className="absolute top-44 left-48 font-semibold text-5xl">
        <CountDownTimer
          initialTimeInMinutes={5}
          handleEndQuiz={handleEndQuiz}
          getResult={getResults}
          handleQuizSubmit={handleQuizSubmit}
        />
      </div>

      {/* numbeer  */}
      <div className="w-[80px] h-[80px] rounded-full bg-black text-white flex items-center justify-center">
        <p className="text-3xl">{currentQuestion + 1}</p>
      </div>

      {/* Question  and Answers  */}
      <p className="w-[600px] text-center text-3xl font-semibold text-wrap mt-14">
        {quizData[currentQuestion].question}
      </p>

      <div className="w-[60%] mt-14 gap-y-12 grid grid-cols-2 gap-x-20">
        {quizData[currentQuestion].answers.map(({ alpha, answer }) => (
          <div
            className="flex gap-x-6 items-center cursor-pointer"
            onClick={() => handleAnswer(alpha)}
            key={alpha}
          >
            <p className="text-3xl font-semibold uppercase">{alpha}</p>
            <div
              className={`py-5 px-6  text-2xl ${
                userAnswers[quizData[currentQuestion].id] === alpha
                  ? "bg-green-200"
                  : "bg-gray-100"
              }  rounded-lg min-h-[100px] w-full border-black border-4`}
            >
              <p className="w-full text-wrap">{answer}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Buttons  */}
      <div className="flex justify-between items-center w-[500px] mt-[100px]">
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

      {showSubmitModal && (
        <SubmitModal
          toggleModal={handleToggleModal}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default QuizLadderGame;
