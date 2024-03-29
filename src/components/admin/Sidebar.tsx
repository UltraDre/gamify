"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import * as React from "react";
import { TiHome } from "react-icons/ti";
import { PiGameControllerFill } from "react-icons/pi";
import { TbClockRecord } from "react-icons/tb";
import { GiSettingsKnobs } from "react-icons/gi";
import { PiStudentThin } from "react-icons/pi";
import { FaRankingStar } from "react-icons/fa6";

interface ISidebarProps {}

const Sidebar: React.FunctionComponent<ISidebarProps> = (props) => {
  const adminSidebar = [
    {
      id: 1,
      name: "dashboard",
      url: "admin_panel_setup",
      iconType: <TiHome />,
    },
    {
      id: 2,
      name: "game setting",
      url: "game_setting",
      iconType: <PiGameControllerFill />,
    },
    {
      id: 3,
      name: "records",
      url: "records",
      iconType: <TbClockRecord />,
    },
    {
      id: 4,
      name: "students",
      url: "students",
      iconType: <PiStudentThin />,
    },
    {
      id: 5,
      name: "leaderboard",
      url: "ranking",
      iconType: <FaRankingStar />,
    },
    {
      id: 6,
      name: "settings",
      url: "settings",
      iconType: <GiSettingsKnobs />,
    },
  ];

  //   DECLARES
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("minadoggledin");
    localStorage.removeItem("_inlogegdwoh");
    router.push("/");
  };

  return (
    <div className="bg-dark w-[20%] h-screen fixed right-0 py-12">
      {/* Logo  */}
      <div className="flex gap-x-5 items-center px-10">
        <div className="w-[50px] h-[50px] rounded">
          <Image
            src={
              "https://res.cloudinary.com/dqd5vv1ln/image/upload/v1706399121/Gamify/b6028e8d7f03e0087d17912b97f43b07_zac63o.png"
            }
            alt="mapoly logo"
            width={1000}
            height={1000}
          />
        </div>
        <p className="capitalize font-semibold text-light text-lg">
          moshood abiola polytechnic
        </p>
      </div>

      {/* profile  */}
      <div className="flex gap-x-3 items-center mt-10 px-10">
        <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
          <Image
            src={
              "https://res.cloudinary.com/dqd5vv1ln/image/upload/v1706526910/Gamify/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector_vji9kt.jpg"
            }
            alt="profile image"
            width={1000}
            height={1000}
            priority
          />
        </div>
        <div className="text-light text-lg">
          <p className="capitalize font-medium">john doe</p>
          <p className="capitalize font-medium">admin</p>
        </div>
      </div>

      <div className="space-y-4 mt-10">
        {adminSidebar.map(({ id, name, url, iconType }) => (
          <div
            className={`flex items-center gap-x-3 px-10  hover:bg-semiDark hover:bg-opacity-30 duration-300 py-5 ${
              pathname === `/${url}`
                ? "bg-semiDark bg-opacity-30"
                : "hover:bg-semiDark hover:bg-opacity-30"
            }`}
            key={id}
          >
            <p className="text-2xl text-light" key={id}>
              {iconType}
            </p>
            <Link
              href={`/${url}`}
              className="capitalize font-medium text-light text-xl"
            >
              {name}
            </Link>
          </div>
        ))}
      </div>

      <button
        className="capitalize text-xl text-white bg-blue rounded-md px-10 py-4 absolute left-10 bottom-10"
        onClick={handleLogout}
      >
        logout
      </button>
    </div>
  );
};

export default Sidebar;
