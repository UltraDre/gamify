"use client";
import RecordFetch from "@/components/admin/records/RecordFetch";
import * as React from "react";
import { IoIosArrowDown } from "react-icons/io";

interface IRecordsProps {}

const Records: React.FunctionComponent<IRecordsProps> = (props) => {
  // USE STATES
  const [toggleGotw, setToggleGotw] = React.useState(false);
  const [gotwVal, setGotwVal] = React.useState<string>("image guessing");
  const [toggleLevel, setToggleLevel] = React.useState(false);
  const [levelVal, setLevelVal] = React.useState<string>("hnd 1");
  const [toggleSemester, setToggleSemester] = React.useState(false);
  const [semesterVal, setSemesterVal] = React.useState<string>("first");
  const [sessionVal, setSessionVal] = React.useState<string>("");
  const [err, setErr] = React.useState<{
    session: string;
  }>({ session: "" });

  // FUNCTIONS
  const toggleGOTWFunc = () => {
    setToggleGotw((prev) => !prev);
    if (toggleLevel) {
      toggleLevelFunc();
    }
    if (toggleSemester) {
      toggleSemesterFunc();
    }
  };

  const toggleLevelFunc = () => {
    setToggleLevel((prev) => !prev);
    if (toggleGotw) {
      toggleGOTWFunc();
    }
    if (toggleSemester) {
      toggleSemesterFunc();
    }
  };

  const toggleSemesterFunc = () => {
    setToggleSemester((prev) => !prev);
    if (toggleGotw) {
      toggleGOTWFunc();
    }
    if (toggleLevel) {
      toggleLevelFunc();
    }
  };

  const gotwValFunc = (props: string) => {
    if (toggleGotw) {
      setGotwVal(props);
      toggleGOTWFunc();
    }
  };
  const levelFunc = (props: string) => {
    if (toggleLevel) {
      setLevelVal(props);
      toggleLevelFunc();
    }
  };

  const semesterFunc = (props: string) => {
    if (toggleSemester) {
      setSemesterVal(props);
      toggleSemesterFunc();
    }
  };

  const fetchFunc = () => {
    if (sessionVal === "") {
      setErr((prev) => ({ ...prev, session: "error occurred" }));
      return;
    }
  };

  return (
    <div className="bg-light min-w-full min-h-screen py-12 flex items-center justify-center flex-col">
      <div className="w-[80%] flex-wrap justify-between flex gap-x-6 bg-white rounded-md px-10 py-8">
        {/* Game  */}
        <div className="space-y-3 relative">
          <p className="capitalize text-lg">game</p>
          <div
            className="min-w-[250px] rounded-md bg-light px-5 py-4 cursor-pointer relative"
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

        {/* Level  */}
        <div className="space-y-3 relative">
          <p className="capitalize text-lg">level</p>
          <div
            className="min-w-[200px] rounded-md bg-light px-5 py-4 cursor-pointer relative"
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
            <div className="rounded-md bg-white text-xl space-y-5 w-full py-4 px-5 capitalize absolute z-50">
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

        {/* Semester  */}
        <div className="space-y-3 relative">
          <p className="capitalize text-lg">semester</p>
          <div
            className="min-w-[200px] rounded-md bg-light px-5 py-4 cursor-pointer relative"
            onClick={toggleSemesterFunc}
          >
            <div
              className={`absolute right-5 top-5 text-2xl ${
                toggleSemester && "rotate-180"
              }  duration-300`}
            >
              <IoIosArrowDown />
            </div>
            <p className="capitalize text-lg">{semesterVal}</p>
          </div>
          {toggleSemester && (
            <div className="rounded-md bg-white text-xl space-y-5 w-full py-4 px-5 capitalize absolute z-50">
              <p
                onClick={() => semesterFunc("first")}
                className="cursor-pointer"
              >
                first
              </p>
              <p
                onClick={() => semesterFunc("second")}
                className="cursor-pointer"
              >
                second
              </p>
            </div>
          )}
        </div>

        {/* Session  */}
        <div className="space-y-3 relative">
          <p className="capitalize text-lg">session</p>
          <input
            type="text"
            placeholder="2021/2022"
            value={sessionVal}
            onChange={(e) => setSessionVal(e.target.value)}
            className="min-w-[200px] rounded-md bg-light px-5 py-4 focus:outline-none"
          />
          {sessionVal === "" && err.session === "error occured" && (
            <p className="absolute text-red-600">Session cannot be empty</p>
          )}
        </div>

        {/* Fetch button  */}
        <div className="relative w-full mt-10 text-center">
          <button
            onClick={fetchFunc}
            className="bg-dark rounded-md w-[200px] px-5 py-5 text-light text-xl text-center capitalize"
          >
            fetch
          </button>
        </div>
      </div>

      {/* Record Fetch  */}
      <RecordFetch
        game={gotwVal}
        level={levelVal}
        session={sessionVal}
        semester={semesterVal}
      />
    </div>
  );
};

export default Records;
