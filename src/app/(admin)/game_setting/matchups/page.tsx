"use client";
import { adminRoutes } from "@/utils/adminRoutes";
import { useRouter } from "next/navigation";
import * as React from "react";
import { CodeSnippet, Qdata, matchupData } from "@/types/types";
import ListQuestions from "@/components/admin/matchups/ListQuestions";
import QuestionForm from "@/components/admin/matchups/QuestionForm";
import { MatchUpsData } from "@/utils/questionData";

interface IMatchUpsSetupProps {}

const MatchUpsSetup: React.FunctionComponent<IMatchUpsSetupProps> = (props) => {
  // USE STATES
  const [conditionMeet, setConditionMeet] = React.useState<boolean>(false);
  const [question, setQuestion] = React.useState<string>("");
  const [answer, setAnswer] = React.useState<string>("");
  const [imgFile, setImgFile] = React.useState<File | string>("");
  const [selectedImage, setSelectedImage] = React.useState("");
  const [err, setErr] = React.useState({
    imgErr: "",
    questionErr: "",
    answerErr: "",
  });
  const [tempData, setTempData] = React.useState<matchupData[]>(MatchUpsData);

  // DECLARES
  const router = useRouter();
  const nextQuestionNumber = MatchUpsData.length + 1;

  // FUNCTIONS
  const handleDeleteQues = (props: string) => {
    const filterArr = tempData.filter((items) => items._id !== props);
    setTempData(filterArr);
  };

  const handleQuesEdit = (props: matchupData) => {
    // Find the question in tempData
    const foundQuestion = tempData.find((item) => item._id === props._id);

    if (foundQuestion) {
      const updatedTempData = tempData.map((item) =>
        item._id === props._id
          ? {
              ...item,
              codeSnippets: props.codeSnippets,
              expectedOutputs: props.expectedOutputs,
            }
          : item
      );

      setTempData(updatedTempData);
    }
  };

  // USE EFFECTS
  React.useEffect(() => {
    const sessionId = localStorage.getItem("dsspid");
    const gotw = localStorage.getItem("dgoftw") === "match ups";
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
  }, [conditionMeet]);

  return conditionMeet ? (
    <div className="bg-light min-w-full min-h-screen py-12 flex items-center justify-center flex-col">
      {/* Questions  */}
      <p className="text-2xl font-semibold capitalize">questions</p>
      <div className="flex flex-wrap gap-x-10 items-center mt-10">
        {tempData.length === 0 && (
          <p className="text-xl text-dark text-center">
            Questions will appear here
          </p>
        )}

        {tempData.map(({ _id, codeSnippets, expectedOutputs }, index) => (
          <ListQuestions
            key={_id}
            codeSnippets={codeSnippets}
            expectedOutputs={expectedOutputs}
            handleDelete={handleDeleteQues}
            questionNumber={index + 1}
            handleQuesEdit={handleQuesEdit}
            questionId={_id}
          />
        ))}
      </div>

      {/* Add Questions  */}
      <div className="bg-white w-[60%] relative rounded-md pt-12 pb-32 mt-10 px-14">
        <p className="text-2xl font-semibold capitalize text-center">
          add questions
        </p>

        {/* Questions Lists  */}
        <div className="mt-8">
          <div className="w-full flex items-center justify-center gap-x-20">
            <QuestionForm
              nextQuestionId={nextQuestionNumber}
              setTempData={setTempData}
            />
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default MatchUpsSetup;
