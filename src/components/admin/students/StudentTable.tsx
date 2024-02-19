"use client";

import * as React from "react";
import StudentTableModal from "./StudentTableModal";
import { studentArr } from "@/utils/studentData";

interface IStudentTableProps {}

const StudentTable: React.FunctionComponent<IStudentTableProps> = (props) => {
  // USE STATES
  const [studentId, setStudentId] = React.useState<number>(1);
  const [openStudentModal, setOpenStudentModal] =
    React.useState<boolean>(false);

  // FUNCTIONS
  const handleStudent = (studentId: number) => {
    setStudentId(studentId);
    toggleStudentModal();
  };

  const toggleStudentModal = () => {
    setOpenStudentModal((prev) => !prev);
  };

  return (
    <div className="space-y-10 w-full mt-10">
      <p className="text-xl font-semibold capitalize text-center">
        student table
      </p>

      <table className="w-full capitalize text-lg text-left">
        <thead>
          <tr>
            <th>sn</th>
            <th>name</th>
            <th>top 3</th>
            <th>top 10</th>
            <th>highest score</th>
            <th>correct answer</th>
          </tr>
        </thead>

        <tbody>
          {studentArr.map(({ id, name, imageGuessing }) => (
            <tr
              className="cursor-pointer"
              key={id}
              onClick={() => handleStudent(id)}
            >
              <td className="pr-2 py-3">{id}</td>
              <td className="pr-2 py-3">{name}</td>
              <td className="pr-2 py-3">{imageGuessing.top3}</td>
              <td className="pr-2 py-3">{imageGuessing.top10}</td>
              <td className="pr-2 py-3">{imageGuessing.highestScore}</td>
              <td className="pr-2 py-3">{imageGuessing.correctScore} pts</td>
            </tr>
          ))}
        </tbody>
      </table>

      {openStudentModal && (
        <StudentTableModal
          margin={true}
          solo={false}
          studentId={studentId}
          width={false}
          toggleStudentModal={toggleStudentModal}
        />
      )}
    </div>
  );
};

export default StudentTable;
