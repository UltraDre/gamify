import * as React from "react";

interface ICountDownTimerProps {
  initialTimeInMinutes: number;
  handleEndQuiz: () => void;
  getResult: () => {};
  handleQuizSubmit: (results: { [key: string]: boolean }) => void;
}

const CountDownTimer: React.FunctionComponent<ICountDownTimerProps> = ({
  initialTimeInMinutes,
  handleEndQuiz,
  handleQuizSubmit,
  getResult,
}) => {
  const [timer, setTimer] = React.useState(initialTimeInMinutes * 60);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      if (timer <= 0) {
        clearInterval(intervalId);
        handleEndQuiz();
        handleQuizSubmit(getResult());
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
