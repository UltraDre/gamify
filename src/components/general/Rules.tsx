"use client";
import Image from "next/image";
import React from "react";

interface IRulesProps {
  startFunc: () => void;
  game_name: string;
  game_rules: string[];
  objective: string;
  time: number;
}

const Rules: React.FunctionComponent<IRulesProps> = ({
  game_name,
  game_rules,
  objective,
  time,
  startFunc,
}) => {
  return (
    <div className="w-full h-screen py-10 px-20 relative flex items-center justify-center">
      {/* logo  */}
      <div className="absolute left-20 top-20 w-[200px] h-[200px]">
        <Image
          src="https://res.cloudinary.com/dqd5vv1ln/image/upload/v1706399121/Gamify/b6028e8d7f03e0087d17912b97f43b07_zac63o.png"
          alt="mapoly logo"
          width={1000}
          height={1000}
        />
      </div>

      {/* timer  */}
      <div className="absolute right-20 top-20 w-[200px] h-[200px]">
        <p className="text-xl font-semibold">Time: {time}:00</p>
      </div>

      <div className="w-[70%] flex items-center justify-center flex-col">
        <h1 className="uppercase font-bold mb-10 text-5xl">{game_name}</h1>
        <div className="w-full border-2 rounded-md p-10">
          <p className="uppercase text-2xl mb-10 font-semibold">
            rules of the game
          </p>
          <div className="space-y-5">
            {game_rules.map((rule, index) => {
              return (
                <div className="gap-x-2 flex items-center" key={index}>
                  <p>{index + 1}.</p>
                  <p className="text-xl">{rule}</p>
                </div>
              );
            })}

            <p>{objective}</p>
          </div>
        </div>
        <button
          className="w-[200px] py-5 text-center capitalize bg-black text-white text-xl rounded-md mt-14"
          onClick={startFunc}
        >
          start
        </button>
      </div>
    </div>
  );
};

export default Rules;
