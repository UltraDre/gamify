import Image from "next/image";
import { CiCirclePlus } from "react-icons/ci";
import * as React from "react";
import { CodeSnippet, matchupData } from "@/types/types";
import ErrorDisplay from "@/components/general/ErrorDisplay";

interface IQuestionFormProps {
  nextQuestionId: number;
  setTempData: (value: React.SetStateAction<matchupData[]>) => void;
}

const QuestionForm: React.FunctionComponent<IQuestionFormProps> = ({
  nextQuestionId,
  setTempData,
}) => {
  // USE STATES
  const [codeSnippets, setCodeSnippets] = React.useState<CodeSnippet[]>([]);
  const [expectedOutputs, setExpectedOutputs] = React.useState<CodeSnippet[]>(
    []
  );
  const [formErr, setFormErr] = React.useState(false);

  //   DECLARES
  const arr = ["0", "1", "2"];

  //   FUNCTIONS
  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string,
    type: "codeSnippet" | "expectedOutput"
  ) => {
    const file = e.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      if (type === "codeSnippet") {
        const existingSnippetIndex = codeSnippets?.findIndex(
          (item) => item.id === id
        );

        if (existingSnippetIndex !== -1) {
          setCodeSnippets((prev) => {
            const updatedSnippets = [...prev];
            updatedSnippets[existingSnippetIndex] = {
              ...updatedSnippets[existingSnippetIndex],
              img: imageUrl,
            };
            return updatedSnippets;
          });
        } else {
          setCodeSnippets((prev) => [
            ...prev,
            { id, img: imageUrl, correctAnswer: 0 },
          ]);
        }
      } else {
        const existingSnippetIndex = expectedOutputs?.findIndex(
          (item) => item.id === id
        );

        if (existingSnippetIndex !== -1) {
          setExpectedOutputs((prev) => {
            const updatedSnippets = [...prev];
            updatedSnippets[existingSnippetIndex] = {
              ...updatedSnippets[existingSnippetIndex],
              img: imageUrl,
            };
            return updatedSnippets;
          });
        } else {
          setExpectedOutputs((prev) => [
            ...prev,
            { id, img: imageUrl, correctAnswer: 0 },
          ]);
        }
      }
    }
  };

  const handleAnswerChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string,
    type: "codeSnippet" | "expectedOutput"
  ) => {
    const correctAnswer = Number(e.target.value);
    if (type === "codeSnippet") {
      const existingSnippetIndex = codeSnippets?.findIndex(
        (item) => item.id === id
      );

      if (existingSnippetIndex !== -1) {
        setCodeSnippets((prev) => {
          const updatedSnippets = [...prev];
          updatedSnippets[existingSnippetIndex] = {
            ...updatedSnippets[existingSnippetIndex],
            correctAnswer,
          };
          return updatedSnippets;
        });
      } else {
        setCodeSnippets((prev) => [...prev, { id, img: "", correctAnswer }]);
      }
    } else {
      const existingSnippetIndex = expectedOutputs?.findIndex(
        (item) => item.id === id
      );

      if (existingSnippetIndex !== -1) {
        setExpectedOutputs((prev) => {
          const updatedSnippets = [...prev];
          updatedSnippets[existingSnippetIndex] = {
            ...updatedSnippets[existingSnippetIndex],
            correctAnswer,
          };
          return updatedSnippets;
        });
      } else {
        setExpectedOutputs((prev) => [...prev, { id, img: "", correctAnswer }]);
      }
    }
  };

  const handleFormSubmit = () => {
    const isValidSnippet = (snippet: CodeSnippet) =>
      snippet && snippet.id && snippet.img && snippet.correctAnswer;

    if (
      codeSnippets.length === 3 &&
      expectedOutputs.length === 3 &&
      codeSnippets.every(isValidSnippet) &&
      expectedOutputs.every(isValidSnippet)
    ) {
      setTempData((prev) => [
        ...prev,
        { _id: nextQuestionId.toString(), codeSnippets, expectedOutputs },
      ]);
      setCodeSnippets([]);
      setExpectedOutputs([]);
    } else {
      setFormErr(true);
    }
  };

  //   USE EFFECTS
  React.useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (formErr) {
      timeoutId = setTimeout(() => {
        setFormErr(false);
      }, 3000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [formErr]);

  return (
    <>
      {/* Err  */}
      {formErr && <ErrorDisplay errText="All inputs needs to be provided" />}

      {/* Left  */}
      <div className="flex flex-col gap-y-10">
        {arr.map((items) => (
          <div className="space-y-3" key={items}>
            <div className="w-[250px] h-[150px] rounded-md overflow-hidden cursor-pointer relative flex items-center justify-center bg-semiDark bg-opacity-90">
              <label
                htmlFor={items}
                className={`cursor-pointer text-7xl absolute z-50  text-white`}
              >
                <CiCirclePlus />
              </label>
              <input
                id={items}
                hidden
                type="file"
                accept="image/*"
                onChange={(e) =>
                  handleImageChange(
                    e,
                    `cs${nextQuestionId + Number(items)}`,
                    "codeSnippet"
                  )
                }
              />
              {codeSnippets?.map((item) => {
                const findId =
                  item.id === `cs${nextQuestionId + Number(items)}`;
                return (
                  findId && (
                    <Image
                      src={item.img}
                      alt="img"
                      width={1000}
                      height={1000}
                      priority={true}
                      key={item.id}
                    />
                  )
                );
              })}
            </div>
            <div className="w-full flex gap-x-5 items-center justify-center">
              <p className="text-md text-semiDark">Answer ID</p>
              <input
                type="text"
                placeholder="1"
                onChange={(e) =>
                  handleAnswerChange(
                    e,
                    `cs${nextQuestionId + Number(items)}`,
                    "codeSnippet"
                  )
                }
                className="w-[100px] border border-gray-300 focus:outline-none px-3 py-1 rounded"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Right  */}
      <div className="flex flex-col gap-y-10">
        {arr.map((items) => (
          <div className="space-y-3" key={items}>
            <div className="w-[250px] h-[150px] rounded-md overflow-hidden cursor-pointer relative flex items-center justify-center bg-semiDark bg-opacity-90">
              <label
                htmlFor={`${items + 2}`}
                className={`cursor-pointer text-7xl absolute z-50  text-white`}
              >
                <CiCirclePlus />
              </label>
              <input
                id={`${items + 2}`}
                hidden
                type="file"
                accept="image/*"
                onChange={(e) =>
                  handleImageChange(
                    e,
                    `eo${nextQuestionId + Number(items)}`,
                    "expectedOutput"
                  )
                }
              />
              {expectedOutputs?.map((item) => {
                const findId =
                  item.id === `eo${nextQuestionId + Number(items)}`;
                return (
                  findId && (
                    <Image
                      src={item.img}
                      alt="img"
                      width={1000}
                      height={1000}
                      priority={true}
                      key={item.id}
                    />
                  )
                );
              })}
            </div>
            <div className="w-full flex gap-x-5 items-center justify-center">
              <p className="text-md text-semiDark">Answer ID</p>
              <input
                type="text"
                placeholder="1"
                onChange={(e) =>
                  handleAnswerChange(
                    e,
                    `eo${nextQuestionId + Number(items)}`,
                    "expectedOutput"
                  )
                }
                className="w-[100px] border border-gray-300 focus:outline-none px-3 py-1 rounded"
              />
            </div>
          </div>
        ))}
      </div>

      <button
        className="absolute bottom-10 rounded-md left-1/2 -translate-x-1/2 capitalize text-lg bg-dark text-light w-[180px] py-4"
        onClick={handleFormSubmit}
      >
        add
      </button>
    </>
  );
};

export default QuestionForm;
