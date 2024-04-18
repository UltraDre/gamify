"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface IGameOfTheWeekProps {
  game_link: string | undefined;
  game_name: string | undefined;
  game_img: string | undefined;
}

const GameOfTheWeek: React.FunctionComponent<IGameOfTheWeekProps> = ({
  game_link,
  game_name,
  game_img,
}) => {
  const router = useRouter();
  const nextFunc = () => {
    router.push(`/${game_link}`);
  };

  return (
    <div className="w-full h-screen py-10 px-20 relative flex items-center justify-center">
      {/* Mapoly logo  */}
      <div className="absolute left-20 top-20 w-[200px] h-[200px]">
        <Image
          src="https://res.cloudinary.com/dqd5vv1ln/image/upload/v1706399121/Gamify/b6028e8d7f03e0087d17912b97f43b07_zac63o.png"
          alt="mapoly logo"
          width={1000}
          height={1000}
        />
      </div>

      <div className="w-[400px] flex items-center justify-center flex-col">
        <h1 className="uppercase font-bold mb-10 text-4xl">game of the week</h1>
        <div className="w-full">
          <div className="w-[350px] h-[350px]">
            <Image
              src={game_img ? game_img : ""}
              alt="game of the week"
              width={1000}
              height={1000}
            />
          </div>
          <p className="capitalize text-2xl text-center font-medium">
            {game_name}
          </p>
        </div>
        <button
          className="w-[200px] py-5 text-center capitalize bg-black text-white text-xl rounded-md mt-14"
          onClick={nextFunc}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default GameOfTheWeek;
