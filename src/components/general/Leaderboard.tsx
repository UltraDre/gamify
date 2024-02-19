"use client";
import { StudentProp } from "@/types/types";
import { studentArr } from "@/utils/studentData";
import Image from "next/image";
import * as React from "react";
import { IoIosArrowDown } from "react-icons/io";

interface ILeaderBoardProps {
  handleViewProfile: (studentId: number) => void;
  soloStudent: StudentProp | null;
}

const LeaderBoard: React.FunctionComponent<ILeaderBoardProps> = ({
  handleViewProfile,
  soloStudent,
}) => {
  const [toggleLevel, setToggleLevel] = React.useState(false);
  const [levelVal, setLevelVal] = React.useState<string>("hnd 1");
  const [soloPos, setSoloPos] = React.useState<number>(0);

  const toggleLevelFunc = () => {
    setToggleLevel((prev) => !prev);
  };

  const levelFunc = (props: string) => {
    if (toggleLevel) {
      setLevelVal(props);
      toggleLevelFunc();
    }
  };

  const updatedStudentArr = studentArr.map((student) => {
    const totalCorrectScore =
      student.imageGuessing.correctScore + student.quizLadder.correctScore;
    return { ...student, totalCorrectScore };
  });

  const sortedStudentArr = updatedStudentArr.sort(
    (a, b) => b.totalCorrectScore - a.totalCorrectScore
  );
  const topDog = sortedStudentArr.slice(0, 3);
  const remainingStudents = sortedStudentArr.slice(3);

  React.useEffect(() => {
    if (soloStudent) {
      const findStudent = sortedStudentArr.findIndex(
        (student) => student.id === soloStudent.id
      );

      if (findStudent) {
        setSoloPos(findStudent);
      }
    }
  }, [soloStudent]);

  return (
    <div className="w-[60%] rounded-lg bg-white px-10 py-14">
      <p className="text-2xl font-medium capitalize text-center">leaderboard</p>
      {/* Level  */}
      <div className="space-y-3 relative">
        <p className="capitalize text-lg">level</p>
        <div
          className="w-[200px] rounded-md bg-light px-5 py-4 cursor-pointer relative"
          onClick={toggleLevelFunc}
        >
          <div
            className={`absolute right-5 top-5 text-2xl ${
              toggleLevel && "rotate-180"
            }  duration-300`}
          >
            <IoIosArrowDown />
          </div>
          <p className="capitalize text-lg">{levelVal}</p>
        </div>
        {toggleLevel && (
          <div className="rounded-md bg-white text-xl space-y-5 w-[200px] py-4 px-5 capitalize absolute z-50">
            <p onClick={() => levelFunc("hnd 1")} className="cursor-pointer">
              hnd 1
            </p>
            <p onClick={() => levelFunc("hnd 2")} className="cursor-pointer">
              hnd 2
            </p>
            <p onClick={() => levelFunc("nd 1")} className="cursor-pointer">
              nd 1
            </p>
            <p onClick={() => levelFunc("nd 2")} className="cursor-pointer">
              nd 2
            </p>
          </div>
        )}
      </div>

      {/* Top 3 */}
      <div className="flex gap-x-10 mt-10 px-20 justify-between">
        <div
          className="relative mt-10 cursor-pointer"
          onClick={() => handleViewProfile(topDog[1].id)}
        >
          <div className="absolute bg-blue text-light flex items-center justify-center w-[50px] h-[50px] rounded-full right-0 text-lg">
            2
          </div>
          <div className="w-[150px] h-[150px] overflow-hidden rounded-full mb-5">
            <Image
              src={topDog[1].imgUrl}
              alt="profile"
              priority
              width={1000}
              height={1000}
            />
          </div>
          <p className="text-lg text-center font-medium capitalize">
            {topDog[1].name}
          </p>
          <p className="text-lg text-center text-gray-400 ">
            {topDog[1].matric_no}
          </p>
          <p className="text-lg text-center text-dark font-medium capitalize">
            {topDog[1].quizLadder.correctScore +
              topDog[1].imageGuessing.correctScore}
            pts
          </p>
        </div>

        <div
          className="relative cursor-pointer"
          onClick={() => handleViewProfile(topDog[0].id)}
        >
          <div className="absolute bg-yellow-500 text-light flex items-center justify-center w-[50px] h-[50px] rounded-full right-0 text-lg">
            1
          </div>
          <div className="w-[150px] h-[150px] overflow-hidden rounded-full mb-5">
            <Image
              src={topDog[0].imgUrl}
              alt="profile"
              priority
              width={1000}
              height={1000}
            />
          </div>
          <p className="text-lg text-center font-medium capitalize">
            {topDog[0].name}
          </p>
          <p className="text-lg text-center text-gray-400 ">
            {topDog[0].matric_no}
          </p>
          <p className="text-lg text-center text-dark font-medium capitalize">
            {topDog[0].quizLadder.correctScore +
              topDog[0].imageGuessing.correctScore}
            pts
          </p>
        </div>

        <div
          className="relative mt-12 cursor-pointer"
          onClick={() => handleViewProfile(topDog[2].id)}
        >
          <div className="absolute bg-dark text-light flex items-center justify-center w-[50px] h-[50px] rounded-full right-0 text-lg">
            3
          </div>
          <div className="w-[150px] h-[150px] overflow-hidden rounded-full mb-5">
            <Image
              src={topDog[2].imgUrl}
              alt="profile"
              priority
              width={1000}
              height={1000}
            />
          </div>
          <p className="text-lg text-center font-medium capitalize">
            {topDog[2].name}
          </p>
          <p className="text-lg text-center text-gray-400 ">
            {topDog[2].matric_no}
          </p>
          <p className="text-lg text-center text-dark font-medium capitalize">
            {topDog[2].quizLadder.correctScore +
              topDog[2].imageGuessing.correctScore}
            pts
          </p>
        </div>
      </div>

      {/* all list  */}
      <div className="w-full mt-5 px-20 space-y-10 overflow-auto h-[300px]">
        {remainingStudents.map(
          (
            { id, name, imageGuessing, quizLadder, matric_no, imgUrl },
            index
          ) => (
            <div
              className="flex cursor-pointer justify-between items-center"
              key={id}
              onClick={() => handleViewProfile(id)}
            >
              <div className="flex gap-x-5 items-center">
                <p className="font-medium text-lg">{index + 4}</p>
                <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                  <Image
                    src={imgUrl}
                    alt="profile"
                    priority
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className="">
                  <p className="text-lg font-medium capitalize">{name}</p>
                  <p className="text-base text-gray-400 capitalize">
                    {matric_no}
                  </p>
                </div>
              </div>

              <p className="font-medium text-xl">
                {imageGuessing.correctScore + quizLadder.correctScore}pts
              </p>
            </div>
          )
        )}
      </div>

      {soloStudent && (
        <div className="flex justify-between items-center px-20 mt-10">
          <div className="from-blue bg-gradient-to-r relative to-transparent from-5% py-2 flex justify-between items-center w-full">
            <div className="flex gap-x-5 items-center">
              <div className="absolute top-0 bottom-0 bg-light w-3 bg-opacity-80 z-10"></div>
              <p className="font-medium text-lg relative z-20 text-dark">
                {soloPos + 1}
              </p>
              <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                <Image
                  src={soloStudent.imgUrl}
                  alt="profile"
                  priority
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="">
                <p className="text-lg font-medium capitalize">
                  {soloStudent.name}
                </p>
                <p className="text-base text-light capitalize">
                  {soloStudent.matric_no}
                </p>
              </div>
            </div>

            <p className="font-medium text-xl">
              {soloStudent.imageGuessing.correctScore +
                soloStudent.quizLadder.correctScore}
              pts
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeaderBoard;
