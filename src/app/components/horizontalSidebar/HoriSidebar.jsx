"use client";

import React, { useContext } from "react";
import Image from "next/image";
import { CgProfile } from "react-icons/cg";
import { BiPhoneCall } from "react-icons/bi";
import { FaRegMessage } from "react-icons/fa6";
import { FiSettings } from "react-icons/fi";
import { DarkContext } from "@/app/context/darkmode/DarkMode";
const HoriSidebar = ({
  toggleChats,
  toggleProfile,
  toggleCalls,
  toggleSetting,
}) => {
  const { mode } = useContext(DarkContext);

  return (
    <>
      <div className="flex items-center w-full justify-around">
        <p
          title="Profile"
          className={`text-2xl p-3  text-textcolor  hover:text-purple rounded-lg transition-all ${
            mode === "dark" ? "hover:bg-darkhover" : "hover:bg-lightpurple"
          }`}
          onClick={toggleProfile}
        >
          <CgProfile />
        </p>
        <p
          title="Chats"
          className={`text-2xl p-3  text-textcolor  hover:text-purple rounded-lg transition-all ${
            mode === "dark" ? "hover:bg-darkhover" : "hover:bg-lightpurple"
          }`}
          onClick={toggleChats}
        >
          <FaRegMessage />
        </p>
        <p
          title="Calls"
          className={`text-2xl p-3  text-textcolor  hover:text-purple rounded-lg transition-all ${
            mode === "dark" ? "hover:bg-darkhover" : "hover:bg-lightpurple"
          }`}
          onClick={toggleCalls}
        >
          <BiPhoneCall />
        </p>
        <p
          title="Settings"
          className={`text-2xl p-3  text-textcolor  hover:text-purple rounded-lg transition-all ${
            mode === "dark" ? "hover:bg-darkhover" : "hover:bg-lightpurple"
          }`}
          onClick={toggleSetting}
        >
          <FiSettings />
        </p>
        <div>
          <Image
            src="/profile.jpg"
            width={70}
            height={70}
            alt="profile"
            className="rounded-full w-[50px] h-[49px] object-cover lg:w-[40px] lg:h-[39px]"
          />
        </div>
      </div>
    </>
  );
};

export default HoriSidebar;
