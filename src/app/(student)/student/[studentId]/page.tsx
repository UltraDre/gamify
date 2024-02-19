"use client";
import StudentTableModal from "@/components/admin/students/StudentTableModal";
import LeaderBoard from "@/components/general/Leaderboard";
import { StudentProp } from "@/types/types";
import { studentArr } from "@/utils/studentData";
import Image from "next/image";
import * as React from "react";

interface IStudentProfileProps {
  params: { studentId: string };
}

const StudentProfile: React.FunctionComponent<IStudentProfileProps> = ({
  params,
}) => {
  const { studentId } = params;
  const [studentFound, setStudentFound] = React.useState<boolean | string>("");
  const [studentData, setStudentData] = React.useState<StudentProp | null>(
    null
  );
  const [studentID, setStudentID] = React.useState<number>(0);
  const [viewProfile, setViewProfile] = React.useState<boolean>(false);

  const formatNumber = (number: string) => {
    const formattedNumber = number
      .toString()
      .replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3");
    return formattedNumber;
  };

  const toggleViewProfile = () => {
    setViewProfile((prev) => !prev);
  };

  const handleViewProfile = (studentId: number) => {
    setStudentID(studentId);
    toggleViewProfile();
  };

  React.useEffect(() => {
    if (studentId) {
      const findStudent = studentArr.find(
        (items) => items.matric_no === formatNumber(studentId)
      );

      if (findStudent) {
        setStudentFound(true);
        setStudentData(findStudent);
      } else {
        setStudentFound(false);
      }
    }
  }, [studentId]);

  return studentFound === false ? (
    <div>
      <p>Student not found</p>
    </div>
  ) : (
    studentFound && (
      <div className="min-h-screen bg-white w-full flex px-20 justify-between items-center  relative">
        {/* Mapoly logo  */}
        <div className="absolute left-20 top-20 w-[100px] h-[100px]">
          <Image
            src="https://res.cloudinary.com/dqd5vv1ln/image/upload/v1706399121/Gamify/b6028e8d7f03e0087d17912b97f43b07_zac63o.png"
            alt="mapoly logo"
            width={1000}
            height={1000}
          />
        </div>

        <div className="pt-20">
          <p className="text-2xl capitalize text-center font-medium">
            your profile
          </p>

          <StudentTableModal
            toggleStudentModal={toggleViewProfile}
            studentId={studentData?.id}
            margin={false}
            solo={true}
            width={false}
          />
        </div>

        <LeaderBoard
          handleViewProfile={handleViewProfile}
          soloStudent={studentData}
        />

        {viewProfile && (
          <StudentTableModal
            toggleStudentModal={toggleViewProfile}
            studentId={studentID}
            margin={false}
            solo={false}
            width={true}
          />
        )}
      </div>
    )
  );
};

export default StudentProfile;
