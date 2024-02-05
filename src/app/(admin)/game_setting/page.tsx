"use client";
import * as React from "react";
import { IoIosArrowDown } from "react-icons/io";

interface IGameSettingProps {}

const GameSetting: React.FunctionComponent<IGameSettingProps> = (props) => {
  const [toggleGotw, setToggleGotw] = React.useState(false);
  const [gotwVal, setGotwVal] = React.useState<string>("image guessing");
  const [toggleLevel, setToggleLevel] = React.useState(false);
  const [levelVal, setLevelVal] = React.useState<string>("hnd 1");
  const [toggleSemester, setToggleSemester] = React.useState(false);
  const [semesterVal, setSemesterVal] = React.useState<string>("first");

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

  return (
    <div className="bg-light min-h-screen flex items-center justify-center">
      <div className="p-20 gap-y-10 grid grid-cols-2 gap-x-20 rounded-md bg-white">
        {/* Game of the week  */}
        <div className="space-y-3 relative">
          <p className="capitalize text-lg">game of the week</p>
          <div
            className="min-w-[200px] rounded-md bg-light px-5 py-4 cursor-pointer relative"
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

        {/* Session  */}
        <div className="space-y-3">
          <p className="capitalize text-lg">session</p>
          <input
            type="text"
            placeholder="2021/2022"
            className="min-w-[200px] rounded-md bg-light px-5 py-4 focus:outline-none"
          />
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

        {/* Time  */}
        <div className="space-y-3">
          <p className="capitalize text-lg">time</p>
          <input
            type="text"
            placeholder="5"
            className="min-w-[200px] rounded-md bg-light px-5 py-4 focus:outline-none"
          />
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

        {/* Next  */}
        <div className="relative">
          <button className="absolute bottom-0 bg-dark rounded-md w-[200px] px-5 py-5 text-light text-xl text-center capitalize">
            next
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameSetting;
