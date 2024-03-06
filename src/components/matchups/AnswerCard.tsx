import * as React from "react";
import ViewImage from "./ViewImage";
import Image from "next/image";
import { CodeSnippet, SelectedAnswer } from "@/types/types";

interface IAnswerCardProps {
  expectedOutput: CodeSnippet;
  onSelect: (
    type: "codeSnippet" | "expectedOutput",
    id: string,
    answerPicked: number
  ) => void;
  selectedAnswers: SelectedAnswer[];
  currentQuestionIndex: number;
}

const AnswerCard: React.FunctionComponent<IAnswerCardProps> = ({
  expectedOutput,
  onSelect,
  selectedAnswers,
  currentQuestionIndex,
}) => {
  const [viewImageUrl, setViewImageUrl] = React.useState<string>("");
  const [show, setShow] = React.useState<boolean>(false);
  const [answerPicked, setAnswerPicked] = React.useState<{
    uid: number;
    isSelected: boolean;
  }>({ uid: 0, isSelected: false });

  const toggleShow = () => {
    setShow((prev) => !prev);
  };

  const handleImageUrl = (url: string) => {
    setViewImageUrl(url);
    toggleShow();
  };

  const handleSelected = () => {
    onSelect("expectedOutput", expectedOutput.id, expectedOutput.correctAnswer);
  };

  const determineColor = (uid: number): string => {
    const color = Math.floor(Math.abs(Math.sin(uid)) * 16777215).toString(16);
    return `#${color}`;
  };

  React.useEffect(() => {
    const isSelected = () => {
      const currentQuestion = selectedAnswers[currentQuestionIndex];

      const findObj = currentQuestion?.expectedOutput.find(
        (items) => items.id === expectedOutput.id
      );
      if (findObj) {
        setAnswerPicked({ uid: findObj.uid, isSelected: true });
      } else {
        setAnswerPicked({ uid: 0, isSelected: false });
      }
    };

    isSelected();
  }, [selectedAnswers]);

  return (
    <>
      <div
        className="w-[300px] h-[200px] rounded-md overflow-hidden cursor-pointer relative"
        onDoubleClick={() =>
          handleImageUrl(
            expectedOutput.img
          )
        }
        onClick={handleSelected}
      >
        {answerPicked.isSelected && (
          <div
            className="absolute z-10 opacity-80 inset-0"
            style={{ background: determineColor(answerPicked.uid) }}
          ></div>
        )}
        <Image
          src={
            expectedOutput.img
          }
          alt="profile image"
          width={1000}
          height={1000}
          priority
        />
      </div>
      {show && <ViewImage imageUrl={viewImageUrl} toggleShow={toggleShow} />}
    </>
  );
};

export default AnswerCard;
