"use client";
import { useRouter } from "next/navigation";
import * as React from "react";

interface IQuizResultProps {
  gameName: string;
}

const QuizResult: React.FunctionComponent<IQuizResultProps> = ({
  gameName,
}) => {
  const router = useRouter();

  const handleLogout = () => {
    router.push("/");
  };

  return (
    <div className="w-full min-h-screen bg-light flex items-center justify-center flex-col gap-y-5">
      <p className="text-5xl text-center font-semibold">congratulations</p>
      <p className="text-3xl capitalize font-medium">Saheeb olalekan</p>
      <p className="text-xl">Matric no: 15/69/0096</p>
      <p className="text-2xl">
        you've completed{" "}
        <span className="capitalize font-semibold">{gameName}</span> for this
        week
      </p>
      <button
        className="bg-black text-light px-6 py-3 rounded-md text-2xl"
        onClick={handleLogout}
      >
        logout
      </button>
    </div>
  );
};

export default QuizResult;
