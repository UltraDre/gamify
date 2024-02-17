"use client";
import { quizLadderData } from "@/utils/questionData";
import * as React from "react";

interface IRecordFetchLadderProps {}

const RecordFetchLadder: React.FunctionComponent<IRecordFetchLadderProps> = (
  props
) => {
  // USE STATES
  const [currentQuestion, setCurrentQuestion] = React.useState(0);

  //   FUNCTIONS
  const handleNext = () => {
    setCurrentQuestion((prev) => Math.min(prev + 1, quizLadderData.length - 1));
  };

  const handlePrev = () => {
    setCurrentQuestion((prev) => Math.max(prev - 1, 0));
  };

  const handleQuestionChange = (param: number) => {
    setCurrentQuestion(param);
  };

  return (
    <div className="w-full">
      <p className="text-2xl font-semibold capitalize text-center">
        Quiz ladder questions
      </p>

      {/* Question Lists  */}
      <div className="flex gap-x-5 flex-wrap mt-5">
        {quizLadderData.map(({ id }, index) => (
          <div
            className="rounded-full w-[80px] h-[80px] overflow-hidden flex items-center justify-center cursor-pointer relative"
            key={id}
            onClick={() => handleQuestionChange(index)}
          >
            <p className="absolute text-white z-50 text-3xl font-medium">
              {index + 1}
            </p>
            <div
              className={`absolute inset-0 ${
                index === currentQuestion ? "bg-blue" : "bg-black"
              } bg-opacity-50 z-10 rounded-full w-[80px] h-[80px]`}
            ></div>
          </div>
        ))}
      </div>

      {/* Question View  */}
      <div className="mt-8 space-y-8">
        <p className="w-full text-center text-2xl font-semibold text-wrap mt-14">
          {quizLadderData[currentQuestion].question}
        </p>

        <div className="w-full gap-y-12 grid grid-cols-2 gap-x-20">
          {quizLadderData[currentQuestion].answers.map(({ alpha, answer }) => (
            <div
              className="flex gap-x-6 items-center cursor-pointer"
              key={alpha}
            >
              <p className="text-3xl font-semibold uppercase">{alpha}</p>
              <div
                className={`py-5 px-6  text-2xl ${
                  quizLadderData[currentQuestion].correct_answer === alpha
                    ? "bg-green-200"
                    : "bg-gray-100"
                }  rounded-lg min-h-[100px] w-full border-black border-4`}
              >
                <p className="w-full text-wrap">{answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Buttons  */}
      <div className="text-center w-full flex items-center justify-center gap-x-10 mt-[100px]">
        {currentQuestion > 0 && (
          <button
            className="w-[150px] text-3xl bg-black text-white rounded-md py-5"
            onClick={handlePrev}
          >
            {"<<"}
          </button>
        )}

        {currentQuestion !== quizLadderData.length - 1 && (
          <button
            className="w-[150px] text-3xl bg-black text-white rounded-md py-5"
            onClick={handleNext}
          >
            {">>"}
          </button>
        )}
      </div>
    </div>
  );
};

export default RecordFetchLadder;
