"use client";
import Image from "next/image";
import * as React from "react";
import CountDownTimer from "../general/CountDownTimer";
import QuestionCard from "./QuestionsCard";
import AnswerCard from "./AnswerCard";
import { FindUID, SelectedAnswer, matchupData } from "@/types/types";
import SubmitModal from "../general/SubmitModal";

interface IMatchUpsGameProps {
  matchUpsData: matchupData[];
  handleEndQuiz: () => void;
  handleQuizSubmit: (results: { [key: string]: boolean }) => void;
}

const MatchUpsGame: React.FunctionComponent<IMatchUpsGameProps> = ({
  matchUpsData,
  handleQuizSubmit,
  handleEndQuiz,
}) => {
  // USE STATES
  const [selectedAnswers, setSelectedAnswers] = React.useState<
    SelectedAnswer[]
  >([{ id: 0, codeSnippet: [], expectedOutput: [] }]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [gId, setGId] = React.useState<number>(-1);
  const [errText, setErrText] = React.useState<string | null>(null);
  const [showSubmitModal, setShowSubmitModal] = React.useState(false);

  // DECLARE
  const currentQuestion = matchUpsData[currentQuestionIndex];

  // FUNCTIONS
  const handleAnswerSelect = (
    type: "codeSnippet" | "expectedOutput",
    id: string,
    selectedAnswer: number
  ) => {
    const currentQuestion = selectedAnswers[currentQuestionIndex];

    if (type === "codeSnippet") {
      const findObj = currentQuestion.codeSnippet.find(
        (items) => items.id === id
      );

      if (!findObj) {
        const updateCurrentQues = [...currentQuestion?.codeSnippet];

        const foundUid = findUid(
          updateCurrentQues,
          currentQuestion.expectedOutput
        );

        const uid = foundUid ? foundUid : gId;

        if (updateCurrentQues.length <= currentQuestion.expectedOutput.length) {
          updateCurrentQues.push({ id, selectedAnswer, uid });

          const updatedAnswers = [...selectedAnswers];
          updatedAnswers[currentQuestionIndex] = {
            id: currentQuestionIndex,
            codeSnippet: updateCurrentQues,
            expectedOutput: currentQuestion.expectedOutput,
          };

          setSelectedAnswers(updatedAnswers);
        } else {
          setErrText("Selection must be in pair");
        }
      } else {
        if (
          currentQuestion.codeSnippet.length >=
          currentQuestion.expectedOutput.length
        ) {
          const updateCurrentQues = currentQuestion?.codeSnippet.filter(
            (items) => items.id !== id
          );

          const updatedAnswers = [...selectedAnswers];
          updatedAnswers[currentQuestionIndex] = {
            id: currentQuestionIndex,
            codeSnippet: updateCurrentQues,
            expectedOutput: currentQuestion.expectedOutput,
          };

          setSelectedAnswers(updatedAnswers);
        } else {
          setErrText("Selection must be in pair");
        }
      }
    } else {
      const findObj = currentQuestion?.expectedOutput.find(
        (items) => items.id === id
      );

      if (!findObj) {
        const updateCurrentQues = [...currentQuestion.expectedOutput];

        const foundUid = findUid(
          updateCurrentQues,
          currentQuestion.codeSnippet
        );

        const uid = foundUid ? foundUid : gId;

        if (updateCurrentQues.length <= currentQuestion.codeSnippet.length) {
          updateCurrentQues.push({ id, selectedAnswer, uid });

          const updatedAnswers = [...selectedAnswers];
          updatedAnswers[currentQuestionIndex] = {
            id: currentQuestionIndex,
            expectedOutput: updateCurrentQues,
            codeSnippet: currentQuestion.codeSnippet,
          };

          setSelectedAnswers(updatedAnswers);
        } else {
          setErrText("Selection must be in pair");
        }
      } else {
        if (
          currentQuestion.expectedOutput.length >=
          currentQuestion.codeSnippet.length
        ) {
          const updateCurrentQues = currentQuestion?.expectedOutput.filter(
            (items) => items.id !== id
          );

          const updatedAnswers = [...selectedAnswers];
          updatedAnswers[currentQuestionIndex] = {
            id: currentQuestionIndex,
            expectedOutput: updateCurrentQues,
            codeSnippet: currentQuestion.codeSnippet,
          };

          setSelectedAnswers(updatedAnswers);
        } else {
          setErrText("Selection must be in pair");
        }
      }
    }
  };

  // const find the missing uid
  const findUid = (array1: FindUID[], array2: FindUID[]): number | null => {
    const uidArray1 = array1.map((item) => item?.uid);
    const uidArray2 = array2.map((item) => item?.uid);

    // Step 2: Find unique "uid" values in each array
    const uniqueUidArray1 = [...new Set(uidArray1)];
    const uniqueUidArray2 = [...new Set(uidArray2)];

    // Step 3: Compare unique "uid" values to find unmatched "uid"
    const unmatchedUid = uniqueUidArray1
      .concat(uniqueUidArray2)
      .filter(
        (uid) =>
          (uniqueUidArray1.includes(uid) && !uniqueUidArray2.includes(uid)) ||
          (!uniqueUidArray1.includes(uid) && uniqueUidArray2.includes(uid))
      );

    // Return the first unmatched UID, or null if there are no unmatched UIDs
    return unmatchedUid.length > 0 ? unmatchedUid[0] : null;
  };

  const handleNext = () => {
    setCurrentQuestionIndex((prev) =>
      Math.min(prev + 1, matchUpsData.length - 1)
    );
  };

  const handlePrev = () => {
    setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleToggleModal = () => {
    setShowSubmitModal((prev) => !prev);
  };

  const handleSubmit = () => {
    handleQuizSubmit(getResults());
    handleEndQuiz();
  };

  const getResults = () => {
    const results: { [key: string]: boolean } = {};

    selectedAnswers.forEach((answer, questionIndex) => {
      answer.codeSnippet.forEach((codeSnipAnswer) => {
        const matchingExpectedOutput = selectedAnswers[
          questionIndex
        ].expectedOutput.find(
          (eoAnswer) => eoAnswer.uid === codeSnipAnswer.uid
        );

        if (matchingExpectedOutput) {
          const isCorrect =
            codeSnipAnswer.selectedAnswer ===
            matchingExpectedOutput.selectedAnswer;
          results[`${questionIndex}-${codeSnipAnswer.uid}`] = isCorrect;
        }
      });
    });

    return results;
  };

  // USE EFFECT
  React.useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    timeoutId = setTimeout(() => {
      setErrText(null);
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [errText]);

  // Generate unique ID for image pair
  React.useEffect(() => {
    const currentQuestion = selectedAnswers[currentQuestionIndex];
    if (
      currentQuestion?.codeSnippet.length ===
      currentQuestion?.expectedOutput.length
    ) {
      setGId((prev) => prev + 1);
    }
  }, [selectedAnswers[currentQuestionIndex]]);

  // Increase selected answers to avoid errors
  React.useEffect(() => {
    if (currentQuestionIndex + 1 > selectedAnswers.length) {
      setSelectedAnswers((prev) => [
        ...prev,
        { id: 0, codeSnippet: [], expectedOutput: [] },
      ]);
    }
  }, [currentQuestionIndex]);

  return (
    <>
      <div className="w-full h-screen px-40 py-20 flex-col flex items-center justify-center relative">
        {/* Err msg  */}
        {errText && (
          <div className="absolute shadow-md rounded-md overflow-hidden z-50 text-xl bg-white top-20 right-20 flex">
            <div className="h-[10] w-2.5 bg-red-500"></div>
            <p className="px-6 py-5 text-red-500">{errText}</p>
          </div>
        )}

        {/* user profile  */}
        <div className="flex gap-x-5 items-center absolute right-48 top-20">
          <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
            <Image
              src={
                "https://res.cloudinary.com/dqd5vv1ln/image/upload/v1706526910/Gamify/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector_vji9kt.jpg"
              }
              alt="profile image"
              width={1000}
              height={1000}
            />
          </div>
          <div className="w-[200px]">
            <p className="capitalize text-xl font-bold">john doe</p>
            <p className="text-lg uppercase font-medium">Hnd 2</p>
          </div>
        </div>

        {/* time  */}
        <div className="absolute top-24 left-48 font-semibold text-5xl">
          {/* <CountDownTimer
          initialTimeInMinutes={5}
          handleEndQuiz={handleEndQuiz}
          getResult={getResults}
          handleQuizSubmit={handleQuizSubmit}
        /> */}
        </div>

        <div className="w-[80px] h-[80px] rounded-full bg-black text-white flex items-center justify-center">
          <p className="text-3xl">{currentQuestionIndex + 1}</p>
        </div>

        <div className="w-[60%] mt-10 flex justify-center gap-x-20 items-center">
          <div className="space-y-2">
            {currentQuestion?.codeSnippets.map((snippet) => (
              <QuestionCard
                key={snippet.id}
                codeSnippet={snippet}
                onSelect={handleAnswerSelect}
                selectedAnswers={selectedAnswers}
                currentQuestionIndex={currentQuestionIndex}
              />
            ))}
          </div>

          <div className="space-y-2">
            {currentQuestion?.expectedOutputs.map((output) => (
              <AnswerCard
                key={output.id}
                onSelect={handleAnswerSelect}
                expectedOutput={output}
                selectedAnswers={selectedAnswers}
                currentQuestionIndex={currentQuestionIndex}
              />
            ))}
          </div>
        </div>

        {/* Buttons  */}
        <div className="flex justify-between items-center w-[500px] mt-12">
          <button
            className="w-[150px] text-3xl bg-black text-white rounded-md py-5"
            onClick={handlePrev}
          >
            {"<<"}
          </button>
          <p className="text-2xl">
            {currentQuestionIndex + 1} of {matchUpsData.length}
          </p>

          {currentQuestionIndex === matchUpsData.length - 1 ? (
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

      {showSubmitModal && (
        <SubmitModal
          toggleModal={handleToggleModal}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
};

export default MatchUpsGame;
