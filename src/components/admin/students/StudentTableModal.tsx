"use client";
import * as React from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import { StudentProp } from "@/types/types";
import { studentArr } from "@/utils/studentData";
import TableModalFetch from "./TableModalFetch";

interface IStudentTableModalProps {
  toggleStudentModal: () => void;
  studentId: number;
  margin: boolean;
}

const StudentTableModal: React.FunctionComponent<IStudentTableModalProps> = ({
  toggleStudentModal,
  studentId,
  margin,
}) => {
  const [toggleGotw, setToggleGotw] = React.useState(false);
  const [gotwVal, setGotwVal] = React.useState<string>("image guessing");
  const toggleGOTWFunc = () => {
    setToggleGotw((prev) => !prev);
  };
  const [studentData, setStudentData] = React.useState<StudentProp>({
    id: 0,
    name: "",
    level: "",
    matric_no: "",
    imgUrl: "",
    medals: { first: 0, second: 0, third: 0 },
    imageGuessing: {
      played: 0,
      top3: 0,
      top10: 0,
      highestScore: 0,
      correctScore: 0,
      wrongAnswer: 0,
    },
    quizLadder: {
      played: 0,
      top3: 0,
      top10: 0,
      highestScore: 0,
      correctScore: 0,
      wrongAnswer: 0,
    },
  });

  const gotwValFunc = (props: string) => {
    if (toggleGotw) {
      setGotwVal(props);
      toggleGOTWFunc();
    }
  };

  //   USE EFFECT
  React.useEffect(() => {
    const findStudent = studentArr.find((items) => items.id === studentId);

    if (findStudent) {
      setStudentData(findStudent);
    }
  }, [studentId]);

  return (
    <div
      className={`fixed z-[90] w-[80%] left-0 h-screen ${
        margin && "-top-10"
      } bg-dark bg-opacity-50 flex items-center justify-center`}
    >
      <div className="w-[600px] pt-20 pb-14 bg-white rounded-md relative">
        <p
          className="text-2xl absolute right-6 top-5 cursor-pointer"
          onClick={toggleStudentModal}
        >
          <LiaTimesSolid />
        </p>

        {/* profile details  */}
        <div className="flex px-10 justify-between">
          <div className="gap-x-10 flex">
            <div className="space-y-3">
              <p className="text-lg font-medium capitalize">
                {studentData?.name}
              </p>
              <p className="text-lg font-medium capitalize">
                {studentData?.matric_no}
              </p>
              <p className="text-lg font-medium uppercase">
                {studentData?.level}
              </p>
            </div>
            <div className="flex gap-x-5">
              <div className="space-y-2">
                <div className="w-[50px] h-[50px]">
                  <Image
                    src={
                      "https://res.cloudinary.com/dgdoymhtj/image/upload/v1708254450/product_images/silver_medal_rbxnla.png"
                    }
                    alt="medal"
                    priority
                    width={1000}
                    height={1000}
                  />
                </div>
                <p className="text-base text-center font-medium">
                  {studentData.medals.second}
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-[50px] h-[50px]">
                  <Image
                    src={
                      "https://res.cloudinary.com/dgdoymhtj/image/upload/v1708254450/product_images/gold_medal_hjrjou.png"
                    }
                    alt="medal"
                    priority
                    width={1000}
                    height={1000}
                  />
                </div>
                <p className="text-base text-center font-medium">
                  {studentData.medals.first}
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-[50px] h-[50px]">
                  <Image
                    src={
                      "https://res.cloudinary.com/dgdoymhtj/image/upload/v1708254450/product_images/bronze_medal_bik2oa.png"
                    }
                    alt="medal"
                    priority
                    width={1000}
                    height={1000}
                  />
                </div>
                <p className="text-base text-center font-medium">
                  {studentData.medals.third}
                </p>
              </div>
            </div>
          </div>

          <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
            <Image
              src={studentData?.imgUrl}
              className="grayscale"
              alt="profile image"
              priority
              width={1000}
              height={1000}
            />
          </div>
        </div>

        <div className="mt-10 px-10">
          <p className="capitalize text-xl font-medium">game details</p>

          {/* Toggle  */}
          <div className="space-y-3 relative mt-5">
            <div
              className="min-w-[200px] rounded-md bg-light px-5 py-4 cursor-pointer relative"
              onClick={toggleGOTWFunc}
            >
              <div
                className={`absolute right-5 top-5 text-2xl ${
                  toggleGotw && "rotate-180"
                }  duration-300`}
              >
                <IoIosArrowDown />
              </div>
              <p className="capitalize text-lg">{gotwVal}</p>
            </div>
            {toggleGotw && (
              <div className="rounded-md bg-white text-xl space-y-5 w-full py-4 px-5 capitalize absolute z-50">
                <p
                  onClick={() => gotwValFunc("image guessing")}
                  className="cursor-pointer"
                >
                  image guessing
                </p>
                <p
                  onClick={() => gotwValFunc("quiz ladder")}
                  className="cursor-pointer"
                >
                  quiz ladder
                </p>
              </div>
            )}
          </div>

          {/* Image Guessing  */}
          {gotwVal === "image guessing" && (
            <TableModalFetch
              top10={studentData.imageGuessing.top10}
              top3={studentData.imageGuessing.top3}
              highest={studentData.imageGuessing.highestScore}
              correct={studentData.imageGuessing.correctScore}
              wrong={studentData.imageGuessing.wrongAnswer}
              played={studentData.imageGuessing.played}
            />
          )}

          {/* Quiz Ladder */}
          {gotwVal === "quiz ladder" && (
            <TableModalFetch
              top10={studentData.quizLadder.top10}
              top3={studentData.quizLadder.top3}
              highest={studentData.quizLadder.highestScore}
              correct={studentData.quizLadder.correctScore}
              wrong={studentData.quizLadder.wrongAnswer}
              played={studentData.quizLadder.played}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentTableModal;
