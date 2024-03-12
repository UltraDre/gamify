import ErrorDisplay from "@/components/general/ErrorDisplay";
import ViewImage from "@/components/matchups/ViewImage";
import { CodeSnippet, matchupData } from "@/types/types";
import Image from "next/image";
import * as React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";

interface IMatchEditModalProps {
  codeSnippets: CodeSnippet[];
  expectedOutputs: CodeSnippet[];
  handleQuesEdit: (e: matchupData) => void;
  toggleEditModal: () => void;
  questionId: string;
}

const MatchEditModal: React.FunctionComponent<IMatchEditModalProps> = ({
  codeSnippets,
  expectedOutputs,
  handleQuesEdit,
  toggleEditModal,
  questionId,
}) => {
  // USE STATES
  const [codeSnippet, setCodeSnippet] =
    React.useState<CodeSnippet[]>(codeSnippets);
  const [expectedOutput, setExpectedOutput] =
    React.useState<CodeSnippet[]>(expectedOutputs);
  const [formErr, setFormErr] = React.useState(false);
  const [viewImageUrl, setViewImageUrl] = React.useState<string>("");
  const [show, setShow] = React.useState<boolean>(false);

  //   FUNCTIONS
  const toggleShow = () => {
    setShow((prev) => !prev);
  };

  const handleImageUrl = (url: string) => {
    setViewImageUrl(url);
    toggleShow();
  };

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
          setCodeSnippet((prev) => {
            const updatedSnippets = [...prev];
            updatedSnippets[existingSnippetIndex] = {
              ...updatedSnippets[existingSnippetIndex],
              img: imageUrl,
            };
            return updatedSnippets;
          });
        } else {
          setCodeSnippet((prev) => [
            ...prev,
            { id, img: imageUrl, correctAnswer: 0 },
          ]);
        }
      } else {
        const existingSnippetIndex = expectedOutputs?.findIndex(
          (item) => item.id === id
        );

        if (existingSnippetIndex !== -1) {
          setExpectedOutput((prev) => {
            const updatedSnippets = [...prev];
            updatedSnippets[existingSnippetIndex] = {
              ...updatedSnippets[existingSnippetIndex],
              img: imageUrl,
            };
            return updatedSnippets;
          });
        } else {
          setExpectedOutput((prev) => [
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
        setCodeSnippet((prev) => {
          const updatedSnippets = [...prev];
          updatedSnippets[existingSnippetIndex] = {
            ...updatedSnippets[existingSnippetIndex],
            correctAnswer,
          };
          return updatedSnippets;
        });
      } else {
        setCodeSnippet((prev) => [...prev, { id, img: "", correctAnswer }]);
      }
    } else {
      const existingSnippetIndex = expectedOutputs?.findIndex(
        (item) => item.id === id
      );

      if (existingSnippetIndex !== -1) {
        setExpectedOutput((prev) => {
          const updatedSnippets = [...prev];
          updatedSnippets[existingSnippetIndex] = {
            ...updatedSnippets[existingSnippetIndex],
            correctAnswer,
          };
          return updatedSnippets;
        });
      } else {
        setExpectedOutput((prev) => [...prev, { id, img: "", correctAnswer }]);
      }
    }
  };

  const handleFormSubmit = () => {
    const isValidSnippet = (snippet: CodeSnippet) =>
      snippet && snippet.id && snippet.img && snippet.correctAnswer;

    if (
      codeSnippet.length === 3 &&
      expectedOutput.length === 3 &&
      codeSnippet.every(isValidSnippet) &&
      expectedOutput.every(isValidSnippet)
    ) {
      handleQuesEdit({
        _id: questionId,
        codeSnippets: codeSnippet,
        expectedOutputs: expectedOutput,
      });
      toggleEditModal();
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

      <div className="fixed z-[90] w-[80%] left-0 h-screen top-0 bg-dark bg-opacity-50 flex items-center justify-center">
        <div className="bg-white w-[60%] rounded-md pt-12 pb-32 mt-10 px-14 relative">
          <div
            className="absolute text-3xl text-dark cursor-pointer right-10 top-10"
            onClick={toggleEditModal}
          >
            <LiaTimesSolid />
          </div>
          <div className="w-full flex items-center justify-center gap-x-20">
            {/* Left  */}
            <div className="flex flex-col gap-y-10">
              {codeSnippet.map((items) => (
                <div className="space-y-3" key={items.id}>
                  <div
                    className="w-[250px] h-[150px] rounded-md overflow-hidden cursor-pointer relative flex items-center justify-center bg-semiDark bg-opacity-90"
                    onDoubleClick={() => handleImageUrl(items.img)}
                  >
                    <label
                      htmlFor={items.id}
                      className={`cursor-pointer text-7xl absolute z-50  text-white`}
                    >
                      <CiCirclePlus />
                    </label>
                    <input
                      id={items.id}
                      hidden
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        handleImageChange(e, items.id, "codeSnippet")
                      }
                    />

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
                      onChange={(e) =>
                        handleAnswerChange(e, items.id, "codeSnippet")
                      }
                      className="w-[100px] border border-gray-300 focus:outline-none px-3 py-1 rounded"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Right  */}
            <div className="flex flex-col gap-y-10">
              {expectedOutput.map((items) => (
                <div className="space-y-3" key={items.id}>
                  <div
                    className="w-[250px] h-[150px] rounded-md overflow-hidden cursor-pointer relative flex items-center justify-center bg-semiDark bg-opacity-90"
                    onDoubleClick={() => handleImageUrl(items.img)}
                  >
                    <label
                      htmlFor={items.id}
                      className={`cursor-pointer text-7xl absolute z-50  text-white`}
                    >
                      <CiCirclePlus />
                    </label>
                    <input
                      id={items.id}
                      hidden
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        handleImageChange(e, items.id, "expectedOutput")
                      }
                    />

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
                      onChange={(e) =>
                        handleAnswerChange(e, items.id, "expectedOutput")
                      }
                      className="w-[100px] border border-gray-300 focus:outline-none px-3 py-1 rounded"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            className="absolute bottom-10 rounded-md left-1/2 -translate-x-1/2 capitalize text-lg bg-dark text-light w-[180px] py-4"
            onClick={handleFormSubmit}
          >
            save
          </button>
        </div>
      </div>

      {show && <ViewImage imageUrl={viewImageUrl} toggleShow={toggleShow} />}
    </>
  );
};

export default MatchEditModal;
