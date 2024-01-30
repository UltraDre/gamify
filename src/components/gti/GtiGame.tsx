import Image from "next/image";
import * as React from "react";

interface IGitGameProps {}

const GtiGame: React.FunctionComponent<IGitGameProps> = (props) => {
  return (
    <div className="w-full h-screen px-40 py-20 flex relative">
      <div className="absolute top-48 right-32">
        <p className="font-semibold text-5xl">2:00</p>
      </div>
      <div className="w-1/2 h-full flex flex-col items-center justify-center">
        <p className="text-2xl font-semibold">Guess the image</p>
        <div className="w-[80px] h-[80px] mt-8 rounded-full bg-black text-white flex items-center justify-center">
          <p className="text-3xl">1</p>
        </div>
        <div className="w-[550px] mt-10 px-4 py-6 justify-center flex items-center border-black rounded-md border-2">
          <div className="rounded-md w-[500px] h-[500px] overflow-hidden">
            <Image
              src={
                "https://res.cloudinary.com/dqd5vv1ln/image/upload/v1706399121/Gamify/05EJgFQEnogKigDmIVj1VI1-1.fit_lim.size_840x473.v1685049487_ua00v4.jpg"
              }
              alt="mouse"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full py-10">
        <div className="flex gap-x-5 items-center mt-12">
          <div className="w-[100px] h-[100px] bg-black rounded-full overflow-hidden">
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

        <div className="mt-10 py-10 h-[600px] flex flex-col justify-center">
          <p className="w-[500px] text-2xl font-semibold text-wrap mt-10">
            it is used to move cursor on the screen, select object and click on
            buttons
          </p>

          <input
            type="text"
            placeholder="type your answer here"
            className="focus:outline-none border-2 border-black w-[500px] h-[80px] rounded-md mt-10 px-5"
          />

          <div className="flex justify-between items-center w-[500px] mt-[150px]">
            <button className="w-[150px] text-3xl bg-black text-white rounded-md py-5">
              {"<<"}
            </button>
            <p className="text-2xl">1 of 20</p>
            <button className="w-[150px] text-3xl bg-black text-white rounded-md py-5">
              {">>"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GtiGame;
