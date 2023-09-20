"use client";

import { DarkContext } from "@/app/context/darkmode/DarkMode";
import Image from "next/image";
import React, { useContext } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { FaRegMessage } from "react-icons/fa6";
import { FiSettings } from "react-icons/fi";
import { BsMoonStars, BsFillSunFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

const Sidebar = ({
  toggleChats,
  toggleProfile,
  toggleCalls,
  toggleSetting,
}) => {
  const { mode, toggle } = useContext(DarkContext);

  return (
    <>
      <div
        className={`w-[100px]  flex flex-col  md:hidden  ${
          mode === "dark" ? "bg-darksidebar" : "bg-white "
        }`}
      >
        <div className="p-2 flex-grow flex flex-col items-center gap-10  ">
          <div>
            {/* <Menu>
                <MenuButton> */}
            <Image
              src="/profile.jpg"
              width={70}
              height={70}
              alt="profile"
              className="rounded-full  w-[50px] h-[49px] object-cover lg:w-[40px] lg:h-[39px]"
            />
            {/* </MenuButton>
                <MenuList>
                  <MenuItem>Profile</MenuItem>
                  <MenuItem>Setting</MenuItem>
                  <MenuItem>Lock Screen</MenuItem>
                  <MenuItem>Log out</MenuItem>
                </MenuList>
              </Menu> */}
          </div>
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
        </div>
        <div className="flex justify-center mb-10">
          <button onClick={toggle} className="text-2xl text-textcolor  ">
            {mode === "light" ? <BsMoonStars /> : <BsFillSunFill />}
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
