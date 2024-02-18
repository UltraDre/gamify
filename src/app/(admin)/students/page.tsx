"use client";
import * as React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import StudentTable from "@/components/admin/StudentTable";

interface IStudentsProps {}

const Students: React.FunctionComponent<IStudentsProps> = (props) => {
  // USE STATES
  const [toggleLevel, setToggleLevel] = React.useState(false);
  const [levelVal, setLevelVal] = React.useState<string>("hnd 1");
  const [toggleSemester, setToggleSemester] = React.useState(false);
  const [semesterVal, setSemesterVal] = React.useState<string>("first");
  const [sessionVal, setSessionVal] = React.useState<string>("");
  const [searchVal, setSearchVal] = React.useState<string>("");
  const [err, setErr] = React.useState<{
    session: string;
  }>({ session: "" });

  // FUNCTIONS
  const toggleLevelFunc = () => {
    setToggleLevel((prev) => !prev);
    if (toggleSemester) {
      toggleSemesterFunc();
    }
  };

  const toggleSemesterFunc = () => {
    setToggleSemester((prev) => !prev);
    if (toggleLevel) {
      toggleLevelFunc();
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

  const handleSearchFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.target.value);
  };

  return (
    <div className="bg-light min-h-screen flex items-center justify-center">
      <div className="w-[80%] flex-wrap justify-between flex gap-x-6 bg-white rounded-md px-10 py-8">
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

        {/* Search  */}
        <div className="relative space-y-3">
          <p className="capitalize text-lg">search student</p>
          <div className="relative">
            <p className="absolute left-5 text-lg top-1/2 -translate-y-1/2">
              <CiSearch />
            </p>
            <input
              type="text"
              placeholder="Search"
              value={searchVal}
              onChange={(e) => handleSearchFunc(e)}
              className="min-w-[200px] rounded-md bg-light px-12  py-4 focus:outline-none"
            />
          </div>
        </div>

        {/* Students Table */}
        <StudentTable />
      </div>
    </div>
  );
};

export default Students;
