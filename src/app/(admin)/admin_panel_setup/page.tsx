"use client"
import TopStudents from "@/components/admin/dashboard/TopStudents";
import { calScore, sortStudent } from "@/utils/functions";
import { hnd1, hnd2, nd1, nd2 } from "@/utils/studentData";
import Image from "next/image";
import * as React from "react";
import Cookies from "js-cookie";

interface IAdminProps {}

const Admin: React.FunctionComponent<IAdminProps> = (props) => {
  const gamesArr = [
    {
      id_name: "guesstheimage",
      description: "Guess the image",
      image:
        "https://res.cloudinary.com/dqd5vv1ln/image/upload/v1706450981/Gamify/depositphotos_664675456-stock-illustration-game-controller-natural-colors-minimalist_wyo6ge.webp",
      averagePlayer: 60,
    },
    {
      id_name: "quizladder",
      description: "quiz ladder",
      image:
        "https://res.cloudinary.com/dqd5vv1ln/image/upload/v1706647120/Gamify/unnamed_igfxgi.webp",
      averagePlayer: 30,
    },
    {
      id_name: "matchups",
      description: "matchups",
      image:
        "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709388947/product_images/82dfe079-19c4-40a6-947e-3e95b4784fa3.png",
      averagePlayer: 80,
    },
    {
      id_name: "slidepuzzle",
      description: "slide puzzle",
      image:
        "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709728139/product_images/fc808236-8a54-4d74-b445-eb57fd25c7ef.png",
      averagePlayer: 88,
    },
  ];

  // DECLARES 
  //   hnd 1
  const hnd1D = calScore(hnd1);
  const hnd1Data = sortStudent(hnd1D);

  //   hnd 2
  const hnd2D = calScore(hnd2);
  const hnd2Data = sortStudent(hnd2D);

  //   nd 1
  const nd1D = calScore(nd1);
  const nd1Data = sortStudent(nd1D);

  //   nd 2
  const nd2D = calScore(nd2);
  const nd2Data = sortStudent(nd2D);

  const session = Cookies.get("gamify_session");
  const game_active = Cookies.get("gamify_game_active");
  const game_semester = Cookies.get("gamify_game_semester");
  const gotw = Cookies.get("gamify_gotw");
  const last_game_played = Cookies.get("gamify_last_game_played");

  return (
    <div className="w-full bg-light min-h-screen px-10 py-20">
      <p className="text-2xl font-semibold">
        Welcome back, <span className="capitalize text-semiDark">john doe</span>
      </p>
      <p className="text-gray-400 capitalize text-xl mt-3">
        dashboard overview
      </p>

      {/* Games  */}
      <div className="flex items-center justify-between gap-x-10 mt-10">
        {gamesArr.map(({ id_name, image, averagePlayer, description }) => (
          <div
            className="w-[350px] h-[150px] rounded-xl shadow-lg bg-white flex items-center justify-between px-6"
            key={id_name}
          >
            <div className="space-y-3">
              <p className="capitalize font-medium text-md">{description}</p>
              <p className="text-4xl text-semiDark font-bold">
                {averagePlayer}
              </p>
              <p className="text-md capitalize text-gray-400 font-medium">
                average player
              </p>
            </div>
            <div className="w-[80px] h-[80px] overflow-hidden rounded-full">
              <Image
                src={image}
                alt="icon"
                priority
                width={1000}
                height={1000}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex w-full justify-between mt-20 items-start">
        <div className="w-[70%] bg-white rounded-md py-10 px-10">
          <p className="text-xl text-gray-400 font-medium">Top Students</p>

          <div className="flex flex-wrap justify-between gap-y-14 mt-6 px-10">
            {/* HND 1  */}
            <div className="w-[400px] rounded-t-[40px] rounded-b-2xl overflow-hidden bg-white shadow-xl">
              <div className="h-[150px] bg-semiDark w-full flex items-center flex-col justify-center">
                <p className="text-white uppercase text-3xl font-bold">hnd 1</p>
                <p className="text-gray-200 text-xl">Top 3 students</p>
              </div>

              <TopStudents studentData={hnd1Data} />
            </div>

            {/* HND 2  */}
            <div className="w-[400px] rounded-t-[40px] rounded-b-2xl overflow-hidden bg-white shadow-xl">
              <div className="h-[150px] bg-purple-500 w-full flex items-center flex-col justify-center">
                <p className="text-white uppercase text-3xl font-bold">hnd 2</p>
                <p className="text-gray-200 text-xl">Top 3 students</p>
              </div>

              <TopStudents studentData={hnd2Data} />
            </div>

            {/* ND 1  */}
            <div className="w-[400px] rounded-t-[40px] rounded-b-2xl overflow-hidden bg-white shadow-xl">
              <div className="h-[150px] bg-orange-500 w-full flex items-center flex-col justify-center">
                <p className="text-white uppercase text-3xl font-bold">nd 1</p>
                <p className="text-gray-200 text-xl">Top 3 students</p>
              </div>

              <TopStudents studentData={nd1Data} />
            </div>

            {/* ND 2  */}
            <div className="w-[400px] rounded-t-[40px] rounded-b-2xl overflow-hidden bg-white shadow-xl">
              <div className="h-[150px] bg-green-500 w-full flex items-center flex-col justify-center">
                <p className="text-white uppercase text-3xl font-bold">nd 2</p>
                <p className="text-gray-200 text-xl">Top 3 students</p>
              </div>

              <TopStudents studentData={nd2Data} />
            </div>
          </div>
        </div>

        <div className="w-[25%] bg-white rounded-md py-10 px-5">
          <p className="text-xl text-gray-400 font-medium">Details</p>

          <div className="space-y-6 mt-5">
            <div className="space-y-1">
              <p className="text-xl font-semibold capitalize">last game played</p>
              <p className="text-lg text-gray-500 font-medium capitalize">{last_game_played}</p>
            </div>

            <div className="space-y-1">
              <p className="text-xl font-semibold capitalize">game of the week</p>
              <p className="text-lg text-gray-500 font-medium capitalize">{gotw}</p>
            </div>

            <div className="space-y-1">
              <p className="text-xl font-semibold capitalize">session</p>
              <p className="text-lg text-gray-500 font-medium capitalize">{session}</p>
            </div>

            <div className="space-y-1">
              <p className="text-xl font-semibold capitalize">semester</p>
              <p className="text-lg text-gray-500 font-medium capitalize">{game_semester}</p>
            </div>

            <div className="space-y-1">
              <p className="text-xl font-semibold capitalize">game active</p>
              <p className="text-lg text-gray-500 font-medium capitalize">{game_active}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
