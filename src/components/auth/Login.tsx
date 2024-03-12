"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Watermark from "../general/watermark";

type FormInput = {
  identify: string;
  pass: string;
};

const Login = () => {
  const [formInput, setFormInput] = useState<FormInput>({
    identify: "",
    pass: "",
  });
  const [formErr, setFormErr] = useState<{ touch: boolean; isErr: boolean }>({
    touch: false,
    isErr: false,
  });

  // DECLARES
  const router = useRouter();

  // FUNCTIONS
  const loginFunc = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formInput.identify === "admin" && formInput.pass === "1234") {
      router.push("/admin_panel_setup");
    } else {
      const pattern = /^\d{2}\/\d{2}\/\d{4}$/;
      if (!formErr.isErr && pattern.test(formInput.identify)) {
        router.push("/gotw");
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormInput((prev) => ({ ...prev, identify: e.target.value }))
    setFormErr((prev) => ({ ...prev, touch: true }));
  };

  // USE EFFECT
  useEffect(() => {
    if (formInput.identify !== "admin") {
      const pattern = /^\d{2}\/\d{2}\/\d{4}$/;
      if (pattern.test(formInput.identify)) {
        setFormErr((prev) => ({ ...prev, isErr: false }));
      } else {
        setFormErr((prev) => ({ ...prev, isErr: true }));
      }
    } else {
      setFormErr((prev) => ({ ...prev, isErr: false }));
    }
  }, [formInput.identify]);

  return (
    <>
      <Watermark />

      <div className="w-full px-20 flex h-screen items-center justify-center relative z-10">
        <div className="w-1/2 h-full flex items-center justify-center">
          <div className="w-[600px] h-[600px]">
            <Image
              src={
                "https://res.cloudinary.com/dqd5vv1ln/image/upload/v1706399121/Gamify/b6028e8d7f03e0087d17912b97f43b07_zac63o.png"
              }
              alt="mapoly logo"
              width={1000}
              height={1000}
              priority
            />
          </div>
        </div>
        <div className="w-1/2 h-full flex items-center justify-center px-10">
          <form className="w-full h-[400px] flex flex-col" onSubmit={loginFunc}>
            <h3 className="font-semibold capitalize text-5xl mb-10">
              Game center
            </h3>
            <p className="capitalize font-medium text-lg mb-5">
              {formInput.identify !== "admin" ? "matric number" : "admin login"}
            </p>
            <input
              type="text"
              placeholder={
                formInput.identify !== "admin" ? "00/00/0000" : "admin login"
              }
              value={formInput.identify}
              onChange={(e) => handleChange(e)}
              className={`border-2 ${
                formErr.isErr && formErr.touch
                  ? "border-red-500"
                  : "border-black"
              } focus:outline-none rounded-md w-[400px] py-5 px-6 mb-5`}
            />
            {formInput.identify === "admin" && (
              <>
                <p className="capitalize font-medium text-lg mb-5">password</p>
                <input
                  type="password"
                  value={formInput.pass}
                  onChange={(e) =>
                    setFormInput((prev) => ({ ...prev, pass: e.target.value }))
                  }
                  className="border-2 border-black focus:outline-none rounded-md w-[400px] py-5 px-6"
                />
              </>
            )}
            {formErr.isErr && formErr.touch && (
              <p className="text-red-500 font-medium text-md mb-5">
                Matric number can only be in 00/00/0000 format
              </p>
            )}
            <button className="bg-black rounded-md mt-5 text-white px-10 py-6 text-xl text-center w-[200px]">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
