"use client";
import * as React from "react";
import { IoIosArrowDown } from "react-icons/io";

interface ISettingsProps {}

const Settings: React.FunctionComponent<ISettingsProps> = (props) => {
  const [toggleGotw, setToggleGotw] = React.useState(false);
  const [gotwVal, setGotwVal] = React.useState<string>("image guessing");
  const [toggleSemester, setToggleSemester] = React.useState(false);
  const [semesterVal, setSemesterVal] = React.useState<string>("first");
  const [gameActive, setGameActive] = React.useState<string>("off");

  // FUNCTIONS
  const toggleGOTWFunc = () => {
    setToggleGotw((prev) => !prev);
    if (toggleSemester) {
      toggleSemesterFunc();
    }
  };

  const toggleSemesterFunc = () => {
    setToggleSemester((prev) => !prev);
    if (toggleGotw) {
      toggleGOTWFunc();
    }
  };

  const gotwValFunc = (props: string) => {
    if (toggleGotw) {
      setGotwVal(props);
      toggleGOTWFunc();
    }
  };

  const semesterFunc = (props: string) => {
    if (toggleSemester) {
      setSemesterVal(props);
      toggleSemesterFunc();
    }
  };

  const gameActiveFunc = (props: string) => {
    setGameActive(props);
  };

  return (
    <div className="bg-light min-h-screen flex items-center justify-center">
      <div className="pb-36 px-20 pt-14 gap-y-10 grid grid-cols-2 gap-x-20 rounded-md bg-white relative">
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

        {/* Game active  */}
        <div className="space-y-3">
          <p className="capitalize text-lg">game active</p>
          <div className="flex items-center gap-x-10">
            <button className={`w-24 rounded-md duration-200 ${gameActive === "on" ? "bg-blue text-light " : "bg-light" } px-5 py-4 capitalize`} onClick={() => gameActiveFunc("on")}>
              on
            </button>
            <button
              className={`w-24 rounded-md duration-200 ${gameActive === "off" ? "bg-blue text-light " : "bg-light" } px-5 py-4 capitalize`} onClick={() => gameActiveFunc("off")}
            >
              off
            </button>
          </div>
        </div>

        {/* Savw  */}

        <button className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-dark rounded-md w-[200px] px-5 py-5 text-light text-xl text-center capitalize">
          save
        </button>
      </div>
    </div>
  );
};

export default Settings;
