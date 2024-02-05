"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { TiHome } from "react-icons/ti";

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
    },
    {
      id: 3,
      name: "records",
      url: "records",
    },
    {
      id: 4,
      name: "settings",
      url: "settings",
    },
  ];

  //   DECLARES
  const pathname = usePathname();

  return (
    <div className="bg-dark w-[20%] h-screen absolute right-0 py-12">
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
    </div>
  );
};

export default Sidebar;
