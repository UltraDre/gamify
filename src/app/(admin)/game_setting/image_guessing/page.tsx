"use client";
import { adminRoutes } from "@/utils/adminRoutes";
import { useRouter } from "next/navigation";
import * as React from "react";
import { CiCirclePlus } from "react-icons/ci";
import ListQuestion from "@/components/admin/image_guessing/ListQuestion";

interface IImageGuessSetupProps {}

const ImageGuessSetup: React.FunctionComponent<IImageGuessSetupProps> = (
  props
) => {
  const [conditionMeet, setConditionMeet] = React.useState<boolean>(false);

  // DECLARES
  const router = useRouter();

  React.useEffect(() => {
    const sessionId = localStorage.getItem("dsspid");
    const gotw = localStorage.getItem("dgoftw");
    const semes = localStorage.getItem("dsspid");
    const level = localStorage.getItem("dslpidd");
    const time = localStorage.getItem("dpidtp");

    if (sessionId && gotw && semes && level && time) {
      setConditionMeet(true);
    }

    const timeOut = setTimeout(() => {
      if (!conditionMeet) {
        router.push(adminRoutes.game_setting);
      }
    }, 2000);

    return () => clearTimeout(timeOut);
  }, [conditionMeet]);

  return conditionMeet ? (
    <div className="bg-light min-w-full min-h-screen py-12 flex items-center justify-center flex-col">
      {/* Questions  */}
      <p className="text-3xl font-semibold capitalize">questions</p>
      <div className="flex flex-wrap gap-x-10 items-center mt-10">
        {[0, 1, 2].map((items) => (
          <ListQuestion key={items} qData={items} />
        ))}
      </div>

      {/* Add Questions  */}
      <div className="bg-white w-[60%] relative rounded-md pt-12 pb-32 mt-20 px-14">
        <p className="text-3xl font-semibold capitalize text-center">
          add questions
        </p>

        <form className="flex gap-x-10 justify-center mt-10">
          <div className="space-y-4">
            <p className="capitalize font-medium text-xl text-left">image</p>
            <div className="border-2 rounded-md w-52 h-40 flex items-center justify-center">
              <p className="cursor-pointer text-5xl">
                <CiCirclePlus />
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="space-y-4">
              <p className="capitalize font-medium text-xl text-left">
                question
              </p>
              <textarea
                name="text"
                id=""
                cols={30}
                rows={10}
                className="text-lg focus:outline-none border-2 rounded-md w-[500px] resize-none px-6 py-4 h-[200px]"
                placeholder="Type the question here"
              ></textarea>
            </div>

            <div className="space-y-4">
              <p className="capitalize font-medium text-xl text-left">answer</p>
              <textarea
                name="text"
                id=""
                cols={30}
                rows={10}
                className="text-lg focus:outline-none border-2 rounded-md w-[500px] resize-none px-6 py-4 h-[200px]"
                placeholder="Type the question here"
              ></textarea>
            </div>
          </div>
        </form>

        <button className="absolute bottom-10 rounded-md left-1/2 -translate-x-1/2 capitalize text-lg bg-dark text-light w-[180px] py-4">
          add
        </button>
      </div>
    </div>
  ) : null;
};

export default ImageGuessSetup;
