"use client";
import StudentTableModal from "@/components/admin/students/StudentTableModal";
import LeaderBoard from "@/components/general/Leaderboard";
import * as React from "react";

interface IRankingProps {}

const Ranking: React.FunctionComponent<IRankingProps> = () => {
  const [viewProfile, setViewProfile] = React.useState<boolean>(false);
  const [studentId, setStudentId] = React.useState<number>(0);

  const toggleViewProfile = () => {
    setViewProfile((prev) => !prev);
  };

  const handleViewProfile = (studentId: number) => {
    setStudentId(studentId);
    toggleViewProfile();
  };

  return (
    <div className="bg-light min-h-screen flex items-center justify-center">
      <LeaderBoard handleViewProfile={handleViewProfile} soloStudent={null} />

      {viewProfile && (
        <StudentTableModal
          toggleStudentModal={toggleViewProfile}
          studentId={studentId}
          margin={false}
          solo={false}
          width={false}
        />
      )}
    </div>
  );
};

export default Ranking;
