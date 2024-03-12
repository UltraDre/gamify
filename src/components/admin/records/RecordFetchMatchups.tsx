import ViewImage from "@/components/matchups/ViewImage";
import { MatchUpsData } from "@/utils/questionData";
import Image from "next/image";
import * as React from "react";

interface IRecordFetchMatchupsProps {}

const RecordFetchMatchups: React.FunctionComponent<
  IRecordFetchMatchupsProps
> = (props) => {
  // USE STATES
  const [viewImageUrl, setViewImageUrl] = React.useState<string>("");
  const [show, setShow] = React.useState<boolean>(false);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);

  // FUNCTIONS
  const toggleShow = () => {
    setShow((prev) => !prev);
  };

  const handleImageUrl = (url: string) => {
    setViewImageUrl(url);
    toggleShow();
  };

  const handleNext = () => {
    setCurrentQuestion((prev) => Math.min(prev + 1, MatchUpsData.length - 1));
  };

  const handlePrev = () => {
    setCurrentQuestion((prev) => Math.max(prev - 1, 0));
  };

  const handleQuestionChange = (param: number) => {
    setCurrentQuestion(param);
  };

  return (
    <div className="w-full">
      <p className="text-2xl font-semibold capitalize text-center pt-5">
        matchups questions
      </p>

      {/* Question Lists  */}
      <div className="flex gap-x-5 flex-wrap mt-5">
        {MatchUpsData.map(({ _id }, index) => (
          <div
            className="rounded-full w-[80px] h-[80px] overflow-hidden flex items-center justify-center cursor-pointer relative"
            key={_id}
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

      <div className="bg-white w-full rounded-md mt-5 pb-10 pt-5 px-14 relative">
        <div className="w-full flex items-center justify-center gap-x-20">
          {/* Left  */}
          <div className="flex flex-col gap-y-10">
            {MatchUpsData[currentQuestion].codeSnippets.map((items) => (
              <div className="space-y-3" key={items.id}>
                <div
                  className="w-[250px] h-[150px] rounded-md overflow-hidden cursor-pointer relative flex items-center justify-center bg-semiDark bg-opacity-90"
                  onDoubleClick={() => handleImageUrl(items.img)}
                >
                  <Image
                    src={items.img}
                    alt="img"
                    width={1000}
                    height={1000}
                    priority={true}
                  />
                </div>
                <div className="w-full flex gap-x-5 items-center justify-center">
                  <p className="text-md text-semiDark">Answer ID</p>
                  <input
                    type="text"
                    placeholder="1"
                    value={items.correctAnswer}
                    readOnly
                    className="w-[100px] border border-gray-300 focus:outline-none px-3 py-1 rounded"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right  */}
          <div className="flex flex-col gap-y-10">
            {MatchUpsData[currentQuestion].expectedOutputs.map((items) => (
              <div className="space-y-3" key={items.id}>
                <div
                  className="w-[250px] h-[150px] rounded-md overflow-hidden cursor-pointer relative flex items-center justify-center bg-semiDark bg-opacity-90"
                  onDoubleClick={() => handleImageUrl(items.img)}
                >
                  <Image
                    src={items.img}
                    alt="img"
                    width={1000}
                    height={1000}
                    priority={true}
                  />
                </div>
                <div className="w-full flex gap-x-5 items-center justify-center">
                  <p className="text-md text-semiDark">Answer ID</p>
                  <input
                    type="text"
                    placeholder="1"
                    value={items.correctAnswer}
                    readOnly
                    className="w-[100px] border border-gray-300 focus:outline-none px-3 py-1 rounded"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons  */}
        <div className="text-center w-full flex items-center justify-center gap-x-10 mt-[60px]">
          {currentQuestion > 0 && (
            <button
              className="w-[150px] text-3xl bg-black text-white rounded-md py-5"
              onClick={handlePrev}
            >
              {"<<"}
            </button>
          )}

          {currentQuestion !== MatchUpsData.length - 1 && (
            <button
              className="w-[150px] text-3xl bg-black text-white rounded-md py-5"
              onClick={handleNext}
            >
              {">>"}
            </button>
          )}
        </div>
      </div>

      {show && <ViewImage imageUrl={viewImageUrl} toggleShow={toggleShow} />}
    </div>
  );
};

export default RecordFetchMatchups;
