"use client";
import Image from "next/image";
import React from "react";

const GtiRules = (props: {startFunc: () => void}) => {

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
        <p className="text-xl font-semibold">Time: 2:00</p>
      </div>

      <div className="w-[70%] flex items-center justify-center flex-col">
        <h1 className="uppercase font-bold mb-10 text-5xl">image guesses</h1>
        <div className="w-full border-2 rounded-md p-10">
          <p className="uppercase text-2xl mb-10 font-semibold">
            rules of the game
          </p>
          <div className="space-y-5">
            <div className="gap-x-2 flex items-center">
              <p>1.</p>
              <p className="text-xl">
                You have 2 minutes (120 seconds) to make guesses for all 20
                images.
              </p>
            </div>
            <div className="gap-x-2 flex items-center">
              <p>2.</p>
              <p className="text-xl">
                If you are unsure, skip to the next image. You can revert back
                to a previous guess.
              </p>
            </div>
            <div className="gap-x-2 flex items-center">
              <p>3.</p>
              <p className="text-xl">
                A brief description of what's in the image will be displayed
                above the answer box to guide your guesses.
              </p>
            </div>
            <div className="gap-x-2 flex items-center">
              <p>4.</p>
              <p className="text-xl">
                The score will be displayed after the countdown ends. Each
                correct guess earns points.
              </p>
            </div>
            <p>
              The primary goal is to have fun and challenge your knowledge
              skills within the given constraints. Enjoy the game!
            </p>
          </div>
        </div>
        <button
          className="w-[200px] py-5 text-center capitalize bg-black text-white text-xl rounded-md mt-14"
          onClick={props.startFunc}
        >
          start
        </button>
      </div>
    </div>
  );
};

export default GtiRules;
