"use client";
import ErrorDisplay from "@/components/general/ErrorDisplay";
import * as React from "react";
import { IoIosArrowDown } from "react-icons/io";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { adminRoutes } from "@/utils/adminRoutes";
import { gameList } from "@/utils/gameList";

interface ISettingsProps {}

const Settings: React.FunctionComponent<ISettingsProps> = (props) => {
  // Get the cookies
  const session = Cookies.get("gamify_session");
  const game_active = Cookies.get("gamify_game_active");
  const game_semester = Cookies.get("gamify_game_semester");
  const gotw = Cookies.get("gamify_gotw");

  // USE STATES
  const [toggleGotw, setToggleGotw] = React.useState(false);
  const [gotwVal, setGotwVal] = React.useState<string>(
    gotw ? gotw : "image guessing"
  );
  const [toggleSemester, setToggleSemester] = React.useState(false);
  const [semesterVal, setSemesterVal] = React.useState<string>(
    game_semester ? game_semester : "first"
  );
  const [gameActive, setGameActive] = React.useState<string>(
    game_active ? game_active : "off"
  );
  const [isErr, setIsErr] = React.useState<null | string>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isDone, setIsDone] = React.useState<boolean>(false);

  // DECLARES
  const sessionRef = React.useRef<null | HTMLInputElement>(null);
  const router = useRouter();

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

  const handleSave = () => {
    const session = sessionRef.current?.value;
    const regex = /^\d{4}\/\d{4}$/;

    if (session && !regex.test(session)) {
      setIsErr("Accepted format for session 2021/2022");
      return;
    }

    if (!gotwVal || !semesterVal || !session || !gameActive) {
      setIsErr("Please provide all required input");
      return;
    }

    setIsLoading(true);

    const lastGame = Cookies.get("gamify_gotw");
    if (lastGame && lastGame !== gotwVal) {
      Cookies.set("gamify_last_game_played", lastGame);
    }

    if (!lastGame) {
      Cookies.set("gamify_last_game_played", "");
    }

    Cookies.set("gamify_gotw", gotwVal);
    Cookies.set("gamify_session", session);
    Cookies.set("gamify_game_active", gameActive);
    Cookies.set("gamify_game_semester", semesterVal);

    // image guessing 
    if (gotwVal === "image guessing") {
      Cookies.set("id_name", "guesstheimage");
      Cookies.set("description", "Guess the image");
      Cookies.set(
        "image",
        "https://res.cloudinary.com/dqd5vv1ln/image/upload/v1706450981/Gamify/depositphotos_664675456-stock-illustration-game-controller-natural-colors-minimalist_wyo6ge.webp"
      );
      setIsDone(true)
      return;
    }

    // Quiz Ladder 
    if (gotwVal === "quiz ladder") {
      Cookies.set("id_name", "quizladder");
      Cookies.set("description", "quiz ladder");
      Cookies.set(
        "image",
        "https://res.cloudinary.com/dqd5vv1ln/image/upload/v1706647120/Gamify/unnamed_igfxgi.webp"
      );
      setIsDone(true)
      return;
    }

    // Match ups
    if (gotwVal === "match ups") {
      Cookies.set("id_name", "matchups");
      Cookies.set("description", "matchups");
      Cookies.set(
        "image",
        "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709388947/product_images/82dfe079-19c4-40a6-947e-3e95b4784fa3.png"
      );
      setIsDone(true)
      return;
    }

     // Slide Puzzle
    if (gotwVal === "slide puzzle") {
      Cookies.set("id_name", "slidepuzzle");
      Cookies.set("description", "slide puzzle");
      Cookies.set(
        "image",
        "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709728139/product_images/fc808236-8a54-4d74-b445-eb57fd25c7ef.png"
      );
      setIsDone(true)
      return;
    }
  };

  // USE EFFECTS
  React.useEffect(() => {
    const timerId = setTimeout(() => {
      if (isErr) {
        setIsErr(null);
      }
    }, 4000);
    return () => clearTimeout(timerId);
  }, [isErr]);

  React.useEffect(() => {
    if (isDone) {
      setTimeout(() => {
        router.push(adminRoutes.dashboard);
      }, 3000);
    }
  }, [isDone])

  return (
    <div className="bg-light min-h-screen flex items-center justify-center">
      {isErr && <ErrorDisplay errText={isErr} />}

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
              {gameList.map((items) => (
                <p
                  onClick={() => gotwValFunc(items)}
                  className="cursor-pointer"
                  key={items}
                >
                  {items}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* Session  */}
        <div className="space-y-3">
          <p className="capitalize text-lg">session</p>
          <input
            type="text"
            ref={sessionRef}
            defaultValue={session ? session : ""}
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
            <button
              className={`w-24 rounded-md duration-200 ${
                gameActive === "on" ? "bg-blue text-light " : "bg-light"
              } px-5 py-4 capitalize`}
              onClick={() => gameActiveFunc("on")}
            >
              on
            </button>
            <button
              className={`w-24 rounded-md duration-200 ${
                gameActive === "off" ? "bg-blue text-light " : "bg-light"
              } px-5 py-4 capitalize`}
              onClick={() => gameActiveFunc("off")}
            >
              off
            </button>
          </div>
        </div>

        {/* Savw  */}

        <button
          className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-dark rounded-md w-[200px] px-5 py-5 text-light text-xl text-center capitalize"
          onClick={handleSave}
          disabled={isLoading}
        >
          {isLoading ? "saving..." : "save"}
        </button>
      </div>
    </div>
  );
};

export default Settings;
