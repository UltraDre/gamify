import { imageGuessingData } from "@/utils/questionData";
import Image from "next/image";
import * as React from "react";

interface IRecordFetchGuessProps {}

const RecordFetchGuess: React.FunctionComponent<IRecordFetchGuessProps> = (
  props
) => {
  // USE STATES
  const [currentQuestion, setCurrentQuestion] = React.useState(0);

  //   FUNCTIONS
  const handleNext = () => {
    setCurrentQuestion((prev) =>
      Math.min(prev + 1, imageGuessingData.length - 1)
    );
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
        image guess questions
      </p>

      {/* Question Lists  */}
      <div className="flex gap-x-5 flex-wrap mt-5">
        {imageGuessingData.map(({ id, imageUrl }, index) => (
          <div
            className="rounded-full w-[80px] h-[80px] overflow-hidden flex items-center justify-center cursor-pointer relative"
            key={id}
            onClick={() => handleQuestionChange(index)}
          >
            <Image
              src={imageUrl}
              alt="mouse"
              width={1000}
              height={1000}
              priority={true}
            />
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
        <div className="flex w-full gap-x-10">
          <div className="w-[500px] mt-10 px-4 py-6 justify-center flex items-center border-black rounded-md border-2">
            <div className="rounded-md w-full h-[400px] overflow-hidden">
              <Image
                src={imageGuessingData[currentQuestion].imageUrl}
                alt="mouse"
                width={1000}
                height={1000}
              />
            </div>
          </div>

          <div className="mt-10 py-10 flex flex-col justify-center">
            <p className="w-[500px] text-2xl font-semibold text-wrap mt-10">
              {imageGuessingData[currentQuestion].question}
            </p>

            <input
              type="text"
              value={imageGuessingData[currentQuestion].answer}
              readOnly
              placeholder="type your answer here"
              className="focus:outline-none border-2 border-black w-[500px] h-[80px] text-2xl rounded-md mt-10 px-5"
            />

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

              {currentQuestion !== imageGuessingData.length - 1 && (
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
      </div>
    </div>
  );
};

export default RecordFetchGuess;
