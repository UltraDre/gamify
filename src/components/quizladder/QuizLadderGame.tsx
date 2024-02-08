"use client";
import Image from "next/image";
import * as React from "react";

const QuizLadderGame: React.FunctionComponent = () => {
  const [selectedAnswer, setSelectedAnswer] = React.useState<string>("");

  return (
    <div className="w-full h-screen px-40 py-20 flex-col flex items-center justify-center relative">
      {/* user profile  */}
      <div className="flex gap-x-5 items-center absolute right-48 top-44">
        <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
          <Image
            src={
              "https://res.cloudinary.com/dqd5vv1ln/image/upload/v1706526910/Gamify/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector_vji9kt.jpg"
            }
            alt="profile image"
            width={1000}
            height={1000}
          />
        </div>
        <div className="w-[200px]">
          <p className="capitalize text-xl font-bold">john doe</p>
          <p className="text-lg uppercase font-medium">Hnd 2</p>
        </div>
      </div>

      {/* time  */}
      <div className="absolute top-44 left-48">
        <p className="font-semibold text-5xl">Time: 5:00</p>
      </div>

      {/* numbeer  */}
      <div className="w-[80px] h-[80px] rounded-full bg-black text-white flex items-center justify-center">
        <p className="text-3xl">1</p>
      </div>

      {/* Question  and Answers  */}
      <p className="w-[600px] text-center text-3xl font-semibold text-wrap mt-14">
        What is the purpose of the "break" statement in programming?
      </p>

      <div className="w-[60%] mt-14 gap-y-12 grid grid-cols-2 gap-x-20">
        <div
          className="flex gap-x-6 items-center cursor-pointer"
          onClick={() => setSelectedAnswer("A")}
        >
          <p className="text-3xl font-semibold uppercase">A</p>
          <div
            className={`py-5 px-6  text-2xl ${
              selectedAnswer === "A" ? "bg-green-200" : "bg-gray-100"
            }  rounded-lg min-h-[100px] w-full border-black border-4`}
          >
            <p className="w-full text-wrap">
              To terminate the program execution abruptly.
            </p>
          </div>
        </div>
        <div
          className="flex gap-x-6 items-center cursor-pointer"
          onClick={() => setSelectedAnswer("B")}
        >
          <p className="text-3xl font-semibold uppercase">b</p>
          <div
            className={`py-5 px-6  text-2xl ${
              selectedAnswer === "B" ? "bg-green-200" : "bg-gray-100"
            } bg-gray-100 rounded-lg min-h-[100px] w-full border-black border-4`}
          >
            <p className="w-full text-wrap">
              To exit the current loop or switch statement.
            </p>
          </div>
        </div>
        <div
          className="flex gap-x-6 items-center cursor-pointer"
          onClick={() => setSelectedAnswer("C")}
        >
          <p className="text-3xl font-semibold uppercase">c</p>
          <div
            className={`py-5 px-6  text-2xl ${
              selectedAnswer === "C" ? "bg-green-200" : "bg-gray-100"
            } bg-gray-100 rounded-lg min-h-[100px] w-full border-black border-4`}
          >
            <p className="w-full text-wrap">To initiate a function call.</p>
          </div>
        </div>
        <div
          className="flex gap-x-6 items-center cursor-pointer"
          onClick={() => setSelectedAnswer("D")}
        >
          <p className="text-3xl font-semibold uppercase">d</p>
          <div
            className={`py-5 px-6  text-2xl ${
              selectedAnswer === "D" ? "bg-green-200" : "bg-gray-100"
            } bg-gray-100 rounded-lg min-h-[100px] w-full border-black border-4`}
          >
            <p className="w-full text-wrap">To create a new variable.</p>
          </div>
        </div>
      </div>

      {/* Buttons  */}
      <div className="flex justify-between items-center w-[500px] mt-[100px]">
        <button className="w-[150px] text-3xl bg-black text-white rounded-md py-5">
          {"<<"}
        </button>
        <p className="text-2xl">1 of 10</p>
        <button className="w-[150px] text-3xl bg-black text-white rounded-md py-5">
          {">>"}
        </button>
      </div>
    </div>
  );
};

export default QuizLadderGame;
