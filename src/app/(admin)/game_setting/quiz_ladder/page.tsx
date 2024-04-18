"use client";
import ListQuestions from "@/components/admin/quiz_ladder/ListQuestions";
import { AnswersProp, QlData } from "@/types/types";
import { adminRoutes } from "@/utils/adminRoutes";
import { quizLadderData } from "@/utils/questionData";
import { useRouter } from "next/navigation";
import * as React from "react";
import { IoIosArrowDown } from "react-icons/io";

interface IQuizLadderSetupProps {}

const QuizLadderSetup: React.FunctionComponent<IQuizLadderSetupProps> = (
  props
) => {
  // USE STATES
  const [conditionMeet, setConditionMeet] = React.useState<boolean>(false);
  const [tempData, setTempData] = React.useState<QlData[]>(quizLadderData);
  const [showCorrectAns, setShowCorrectAns] = React.useState<boolean>(false);
  const [correctAns, setCorrectAns] = React.useState<string>("a");
  const [question, setQuestion] = React.useState<string>("");
  const [answers, setAnswers] = React.useState<AnswersProp[]>([
    {
      alpha: "a",
      answer: "",
    },
    {
      alpha: "b",
      answer: "",
    },
    {
      alpha: "c",
      answer: "",
    },
    {
      alpha: "d",
      answer: "",
    },
  ]);
  const [err, setErr] = React.useState(false);

  // DECLARES
  const optionsArr = ["a", "b", "c", "d"];
  const router = useRouter();

  // FUNCTIONS
  const toggleAns = () => {
    setShowCorrectAns((prev) => !prev);
  };

  const correctAnsFunc = (props: string) => {
    if (showCorrectAns) {
      setCorrectAns(props);
      toggleAns();
    }
  };

  const handleDeleteQues = (props: string) => {
    const filterArr = tempData.filter((items) => items.id !== props);
    setTempData(filterArr);
  };

  const handleQuesEdit = (props: QlData) => {
    // Find the question in tempData
    const foundQuestion = tempData.find((item) => item.id === props.id);

    if (foundQuestion) {
      const updatedTempData = tempData.map((item) =>
        item.id === props.id
          ? {
              ...item,
              question: props.question,
              answers: props.answers,
              correct_answer: props.correct_answer,
            }
          : item
      );

      setTempData(updatedTempData);
    }
  };

  const handleAnswerChange = (index: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[index].answer = value;
    setAnswers(newAnswers);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isAnyAnswerEmpty = answers.some((obj) => !obj.answer);

    if (!correctAns || !question || isAnyAnswerEmpty) {
      setErr(true);
      return;
    }

    setTempData((prevData) => [
      ...prevData,
      {
        id: `${prevData.length + 1}`,
        question,
        answers,
        correct_answer: correctAns,
      },
    ]);

    setCorrectAns("a");
    setQuestion("");
    setAnswers([
      {
        alpha: "a",
        answer: "",
      },
      {
        alpha: "b",
        answer: "",
      },
      {
        alpha: "c",
        answer: "",
      },
      {
        alpha: "d",
        answer: "",
      },
    ]);
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

  React.useEffect(() => {
    const sessionId = localStorage.getItem("dsspid");
    const gotw = localStorage.getItem("dgoftw") === "quiz ladder";
    const semes = localStorage.getItem("dsspid");
    const level = localStorage.getItem("dslpidd");
    const time = localStorage.getItem("dpidtp");

    if (sessionId && gotw && semes && level && time) {
      setConditionMeet(true);
    }

    const timeOut = setTimeout(() => {
      if (!conditionMeet) {
        router.push(adminRoutes.game_setting);
      }
    }, 2000);

    return () => clearTimeout(timeOut);
  }, [conditionMeet, router]);

  return conditionMeet ? (
    <div className="bg-light min-w-full min-h-screen py-12 flex items-center justify-center flex-col">
      {/* Questions  */}
      <p className="text-3xl font-semibold capitalize">questions</p>

      <div className="flex flex-wrap gap-x-10 items-center mt-10">
        {tempData.length === 0 && (
          <p className="text-xl text-dark text-center">
            Questions will appear here
          </p>
        )}

        {tempData.map((items, index) => (
          <ListQuestions
            qData={items}
            handleDelete={handleDeleteQues}
            handleQuesEdit={handleQuesEdit}
            key={index}
          />
        ))}
      </div>

      {/* Add Questions  */}
      <div className="bg-white w-[60%] relative rounded-md pt-12 pb-32 mt-20 px-14">
        <p className="text-3xl font-semibold capitalize text-center">
          add questions
        </p>

        <form
          onSubmit={handleFormSubmit}
          className="flex items-center flex-col gap-y-8 justify-center mt-10"
        >
          <div className="space-y-4 relative w-full">
            <p className="capitalize font-medium text-xl text-left">question</p>
            <textarea
              name="text"
              id=""
              cols={30}
              rows={10}
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="text-lg focus:outline-none border-2 rounded-md w-full resize-none px-6 py-4 h-[200px]"
              placeholder="Type the question here"
            ></textarea>
          </div>

          <div className="w-full gap-y-6 grid grid-cols-2 gap-x-10">
            {answers.map(({ alpha, answer }, index) => (
              <div className="space-y-3" key={index}>
                <p className="text-xl font-medium uppercase">{alpha}</p>
                <textarea
                  name="text"
                  id=""
                  cols={20}
                  rows={10}
                  value={answer}
                  onChange={(e) => handleAnswerChange(index, e.target.value)}
                  placeholder="To terminate the program execution abruptly."
                  className={`py-5 px-6  text-xl rounded-lg h-[100px] w-full border-gray-200 border-2 text-wrap focus:outline-none resize-none`}
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
              err
                ? "bg-light text-dark cursor-not-allowed"
                : "bg-dark text-light"
            }  w-[180px] py-4`}
          >
            add
          </button>
        </form>
      </div>
    </div>
  ) : null;
};

export default QuizLadderSetup;
