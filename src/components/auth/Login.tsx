"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { ReactEventHandler } from "react";

const Login = () => {
  const router = useRouter();
  const loginFunc = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/gotw");
  };

  return (
    <div className="w-full px-20 flex h-screen items-center justify-center">
      <div className="w-1/2 h-full flex items-center justify-center">
        <div className="w-[600px] h-[600px]">
          <Image
            src={
              "https://res.cloudinary.com/dqd5vv1ln/image/upload/v1706399121/Gamify/b6028e8d7f03e0087d17912b97f43b07_zac63o.png"
            }
            alt="mapoly logo"
            width={1000}
            height={1000}
          />
        </div>
      </div>
      <div className="w-1/2 h-full flex items-center justify-center px-10">
        <form className="w-full h-[400px] flex flex-col" onSubmit={loginFunc}>
          <h3 className="font-semibold capitalize text-5xl mb-10">
            Game center
          </h3>
          <p className="capitalize font-medium text-lg mb-5">matric number</p>
          <input
            type="text"
            className="border-2 border-black rounded-md w-[400px] py-5 px-6"
          />
          <button className="bg-black rounded-md mt-5 text-white px-10 py-6 text-xl text-center w-[200px]">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
