"use client";

import React, { useContext } from "react";
import Image from "next/image";
import { CgProfile } from "react-icons/cg";
import { BiPhoneCall } from "react-icons/bi";
import { FaRegMessage } from "react-icons/fa6";
import { FiSettings } from "react-icons/fi";
import { DarkContext } from "@/app/context/darkmode/DarkMode";
import { LoginContext } from "@/app/context/loginContext/LoginContext";
import { BsMoonStars, BsFillSunFill } from "react-icons/bs";
import { TbLogout } from "react-icons/tb";
import { AiFillLock } from "react-icons/ai";
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spinner,
} from "@chakra-ui/react";
const HoriSidebar = ({
  toggleChats,
  toggleProfile,
  toggleCalls,
  toggleSetting,
}) => {
  const { mode, toggle } = useContext(DarkContext);
  const { currentUser, handelLogout } = useContext(LoginContext);

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
          <Menu>
            <MenuButton>
              {currentUser.img ? (
                <div className="border-2 border-purple rounded-full">
                  <Image
                    src={currentUser.img || "/profileimg.png"}
                    width={70}
                    height={70}
                    alt="my-profile"
                    objectFit="cover"
                    objectPosition="center"
                    className="rounded-full  w-[50px] h-[49px] object-cover lg:w-[40px] lg:h-[39px] "
                  />
                </div>
              ) : (
                <Spinner size="lg" className=" text-purple " />
              )}
            </MenuButton>
            <MenuList>
              <MenuItem onClick={toggle}>
                Change Theme
                {mode === "light" ? <BsMoonStars /> : <BsFillSunFill />}
              </MenuItem>
              <MenuItem>
                Lock Screen <AiFillLock />
              </MenuItem>
              <MenuDivider />
              <MenuItem onClick={handelLogout}>
                Log out <TbLogout />
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </>
  );
};

export default HoriSidebar;
