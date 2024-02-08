import { AnswersProp, QlData } from "@/types/types";
import * as React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { LiaTimesSolid } from "react-icons/lia";

interface IQlEditQuesModalProps {
  hideModal: () => void;
  qData: QlData;
  handleQuesEdit: (e: QlData) => void;
}

const QlEditQuesModal: React.FunctionComponent<IQlEditQuesModalProps> = ({
  qData,
  hideModal,
  handleQuesEdit,
}) => {
  // USE STATES
  const [showCorrectAns, setShowCorrectAns] = React.useState<boolean>(false);
  const [question, setQuestion] = React.useState<string>(qData.question);
  const [answers, setAnswers] = React.useState<AnswersProp[]>(qData.answers);
  const [correctAns, setCorrectAns] = React.useState<string>(
    qData.correct_answer
  );
  const [err, setErr] = React.useState(false);

  //   DECLARES
  const optionsArr = ["a", "b", "c", "d"];

  // FUNCTIONS
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleQuesEdit({
      id: qData.id,
      answers,
      question,
      correct_answer: correctAns,
    });
    hideModal();
  };

  const toggleAns = () => {
    setShowCorrectAns((prev) => !prev);
  };

  const correctAnsFunc = (props: string) => {
    if (showCorrectAns) {
      setCorrectAns(props);
      toggleAns();
    }
  };

  const handleAnswerChange = (index: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[index].answer = value;
    setAnswers(newAnswers);
  };

  // USE EFFECTS
  React.useEffect(() => {
    const isAnyAnswerEmpty = answers.some((obj) => !obj.answer);
    if (!correctAns || !question || isAnyAnswerEmpty) {
      setErr(true);
    } else {
      setErr(false);
    }
  }, [correctAns, question, answers]);

  return (
    <div className="fixed z-[90] w-[80%] left-0 h-screen top-0 bg-dark bg-opacity-50 flex items-center justify-center">
      <form
        onSubmit={handleFormSubmit}
        className="flex gap-y-6 w-[40%] flex-col relative items-center justify-center py-10 px-12 rounded-md mt-10 bg-white"
      >
        <div
          className="absolute text-3xl text-dark cursor-pointer right-10 top-10"
          onClick={hideModal}
        >
          <LiaTimesSolid />
        </div>
        <p className="text-2xl font-semibold capitalize text-center">
          edit questions
        </p>

        <div className="space-y-4 relative w-full">
          <p className="capitalize font-medium text-xl text-left">question</p>
          <textarea
            name="text"
            id=""
            cols={30}
            rows={10}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="text-lg focus:outline-none border-2 rounded-md w-full resize-none px-6 py-4 h-[150px]"
            placeholder="Type the question here"
          ></textarea>
        </div>

        <div className="w-full space-y-6">
          {answers.map(({ alpha, answer }, index) => (
            <div
              className="flex space-x-3 items-center justify-center"
              key={index}
            >
              <p className="text-xl font-medium uppercase">{alpha}</p>
              <textarea
                name="text"
                id=""
                cols={30}
                rows={10}
                value={answer}
                onChange={(e) => handleAnswerChange(index, e.target.value)}
                placeholder="To terminate the program execution abruptly."
                className={`py-5 px-6 text-xl rounded-lg h-[70px] w-full border-gray-200 border-2 text-wrap focus:outline-none resize-none`}
              />
            </div>
          ))}
        </div>

        <div className="flex items-center w-full justify-center relative space-x-3">
          <p className="text-xl capitalize">correct answer</p>
          <div
            className="w-[100px] px-5 py-4 bg-light rounded-md relative cursor-pointer"
            onClick={toggleAns}
          >
            <p className="text-left text-xl capitalize">{correctAns}</p>
            <div
              className={`absolute right-5 top-5 text-2xl ${
                showCorrectAns && "rotate-180"
              }  duration-300`}
            >
              <IoIosArrowDown />
            </div>
          </div>
          {showCorrectAns && (
            <div className="absolute w-[150px] bottom-0 px-5 py-3 bg-white z-50 flex flex-col rounded-md gap-y-2">
              {optionsArr.map((items) => (
                <button
                  className="text-center text-2xl capitalize"
                  onClick={() => correctAnsFunc(items)}
                  key={items}
                >
                  {items}
                </button>
              ))}
            </div>
          )}
        </div>

        <button
          disabled={err}
          className={`rounded-md capitalize text-lg ${
            err ? "bg-light text-dark cursor-not-allowed" : "bg-dark text-light"
          }  w-[180px] py-4`}
        >
          save
        </button>
      </form>
    </div>
  );
};

export default QlEditQuesModal;
