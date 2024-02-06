import Image from "next/image";
import * as React from "react";
import { LiaTimesSolid } from "react-icons/lia";

interface IImageGuessSetupProps {}

const ImageGuessSetup: React.FunctionComponent<IImageGuessSetupProps> = (
  props
) => {
  return (
    <div className="bg-light min-w-full min-h-screen flex items-center justify-center flex-col">
      <p className="text-3xl font-semibold capitalize">questions</p>
      <div className="flex flex-wrap gap-x-10 items-center mt-10">
        {[0, 1, 2].map((items) => (
          <div className="relative" key={items}>
            <button className="absolute text-2xl -top-2 -right-5">
              <LiaTimesSolid />
            </button>
            <div className="rounded-full w-[80px] h-[80px] overflow-hidden flex items-center justify-center">
              <Image
                src={
                  "https://res.cloudinary.com/dqd5vv1ln/image/upload/v1706399121/Gamify/05EJgFQEnogKigDmIVj1VI1-1.fit_lim.size_840x473.v1685049487_ua00v4.jpg"
                }
                alt="mouse"
                width={1000}
                height={1000}
                priority={true}
              />
              <p className="absolute text-white z-50 text-3xl font-medium">
                {items + 1}
              </p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 z-10 rounded-full w-[80px] h-[80px]"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGuessSetup;
