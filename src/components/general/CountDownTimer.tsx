import { SlidePiecesType } from "@/types/types";
import * as React from "react";

interface ICountDownTimerProps {
  initialTimeInMinutes: number;
  handleEndQuiz?: () => void;
  getResult?: () => {};
  handleQuizSubmit?: (results: { [key: string]: boolean } | number) => void;
  shuffledArray?: SlidePiecesType[];
  handleSubmit?: (result: number) => void;
  getPuzzleResult?: (arr: SlidePiecesType[]) => number;
}

const CountDownTimer: React.FunctionComponent<ICountDownTimerProps> = ({
  initialTimeInMinutes,
  handleEndQuiz,
  handleQuizSubmit,
  shuffledArray,
  getResult,
  handleSubmit,
  getPuzzleResult,
}) => {
  const [timer, setTimer] = React.useState(initialTimeInMinutes * 60);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      if (timer <= 0) {
        clearInterval(intervalId);
        if (shuffledArray && handleSubmit && getPuzzleResult) {
          handleSubmit(getPuzzleResult(shuffledArray));
        } else if (handleEndQuiz && handleQuizSubmit && getResult) {
          handleEndQuiz();
          handleQuizSubmit(getResult());
        }
      } else {
        setTimer((prev) => prev - 1);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timer]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return <>Time: {formatTime(timer)}</>;
};

export default CountDownTimer;
