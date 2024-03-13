"use client";
import { CombinedType } from "@/types/types";
import Image from "next/image";
import * as React from "react";
import StudentStatModal from "./StudentStatModal";

interface ITopStudentsProps {
  studentData: CombinedType;
}

const TopStudents: React.FunctionComponent<ITopStudentsProps> = ({
  studentData,
}) => {
  const [toggleStats, setToggleStats] = React.useState<boolean>(false);
  const [studentId, setStudentId] = React.useState<number>(0);

  const handleToggleStats = () => {
    setToggleStats((prev) => !prev);
  };

  const handleViewProfile = (id: number) => {
    handleToggleStats();
    setStudentId(id);
  };

  return (
    <>
      <div className="space-y-5 px-6 py-10">
        {studentData.map(
          ({ id, imgUrl, totalCorrectScore, name, matric_no }, index) => (
            <div
              className="flex cursor-pointer justify-between items-center"
              key={id}
              onClick={() => handleViewProfile(id)}
            >
              <div className="flex gap-x-5 items-center">
                <p className="font-medium text-lg">{index + 1}</p>
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

              <p className="font-medium text-xl">{totalCorrectScore}pts</p>
            </div>
          )
        )}
      </div>

      {toggleStats && (
        <StudentStatModal
          studentId={studentId}
          toggleStudentModal={handleToggleStats}
          studentDataCollect={studentData}
        />
      )}
    </>
  );
};

export default TopStudents;
