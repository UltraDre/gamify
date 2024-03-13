import { CombinedType, StudentProp } from "@/types/types";

// FUNCTIONS
export const calScore = (studentArr: StudentProp[]) => {
  const newArr = studentArr.map((student) => {
    const totalCorrectScore =
      student.imageGuessing.correctScore + student.quizLadder.correctScore;
    return { ...student, totalCorrectScore };
  });
  return newArr;
};

export const sortStudent = (updatedStudentArr: CombinedType) => {
  return updatedStudentArr.sort(
    (a, b) => b.totalCorrectScore - a.totalCorrectScore
  );
};
