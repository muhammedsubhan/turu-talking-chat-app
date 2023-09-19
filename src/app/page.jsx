"use client";

import Image from "next/image";
import React, { useContext, useState } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { FaRegMessage } from "react-icons/fa6";
import { FiSettings } from "react-icons/fi";
import { BsMoonStars, BsPersonFill, BsFillSunFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { MdModeEditOutline } from "react-icons/md";
import { PiPencilSimpleLineFill } from "react-icons/pi";

import PeopleChats from "./components/peoplesChat/PeopleChats";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { DarkContext } from "./context/darkmode/DarkMode";
// import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
const Home = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isChatsOpen, setIsChatsOpen] = useState(true);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isCallsOpen, setIsCallsOpen] = useState(false);
  const { mode, toggle } = useContext(DarkContext);

  const people = [
    {
      id: 1,
      img: "/profile.jpg",
      name: "subhan",
      text: "hello bitches hehehh ",
    },
    {
      id: 2,
      img: "/profile.jpg",
      name: "hamza",
      text: "hello bitches hehehh ",
    },
    {
      id: 3,
      img: "/profile.jpg",
      name: "haseeb",
      text: "hello bitches hehehh ",
    },
  ];

  const toggleChats = () => {
    setIsProfileOpen(false);
    setIsChatsOpen(true);
    setIsSettingsOpen(false);
    setIsCallsOpen(false);
  };
  const toggleCalls = () => {
    setIsProfileOpen(false);
    setIsChatsOpen(false);
    setIsSettingsOpen(false);
    setIsCallsOpen(true);
  };

  const toggleProfile = () => {
    setIsProfileOpen(true);
    setIsChatsOpen(false);
    setIsSettingsOpen(false);
    setIsCallsOpen(false);
  };

  const toggleSetting = () => {
    setIsProfileOpen(false);
    setIsChatsOpen(false);
    setIsSettingsOpen(true);
    setIsCallsOpen(false);
  };

  return (
    <>
      <div className="flex min-h-screen">
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
        <div
          className={`w-[500px]  md:w-full relative ${
            mode === "dark" ? "bg-darkprofile" : "bg-lightgray"
          }`}
        >
          {isCallsOpen && <div>This Div is For Calls Section </div>}
          {isSettingsOpen && (
            <div className="sm:min-h-[600px] sm:overflow-x-auto sm:mb-16">
              <div>
                <h1
                  className={`px-4 py-2 text-xl  font-medium ${
                    mode === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  Settings
                </h1>
              </div>
              <div className=" p-4 flex flex-col items-center justify-center">
                <div className="flex relative">
                  <Image
                    src="/profile.jpg"
                    width={130}
                    height={129}
                    alt="profile"
                    className="rounded-full h-[120px] object-cover lg:w-[100px] lg:h-[95px]"
                  />
                  <div
                    className="absolute right-0 -bottom-1 z-[999] cursor-pointer bg-gray p-3 rounded-full"
                    style={{
                      boxShadow:
                        "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
                    }}
                  >
                    <p>
                      <MdModeEditOutline className="text-xl" />
                    </p>
                  </div>
                </div>
                <div className="flex items-center flex-col p-3 gap-2">
                  <p
                    className={` text-base font-normal ${
                      mode === "dark" ? "text-white" : "text-black"
                    }`}
                  >
                    Subhan
                  </p>
                  <div className="flex items-center ">
                    <div className="flex gap-1 items-center">
                      <div className="active-circle"></div>
                      <small
                        className={`text-sm font-normal ${
                          mode === "dark" ? "text-white" : "text-black"
                        }`}
                      >
                        Active
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <hr
                className={`${
                  mode === "dark"
                    ? "text-darktext opacity-20"
                    : "text-textcolor opacity-90"
                }`}
              />

              <div className="py-3 px-2">
                <div className="text-end p-2 flex justify-end">
                  <button
                    className={` px-5 py-1 rounded-md flex items-center gap-2  hover:bg-slate-300 transition-all ${
                      mode === "dark"
                        ? "bg-darksidebar text-darktext hover:bg-gray hover:text-textcolor border border-lightgray"
                        : "bg-gray border"
                    }`}
                  >
                    <p>
                      <PiPencilSimpleLineFill />
                    </p>
                    Edit
                  </button>
                </div>
                <Accordion defaultIndex={[0]} allowMultiple>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          className={`flex  items-center gap-2  text-xl font-light ${
                            mode === "dark"
                              ? "text-darktext"
                              : "text-textcolor "
                          }`}
                        >
                          <BsPersonFill className="text-base" /> Personal Info
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      pb={4}
                      className={`text-sm  flex gap-2 ${
                        mode === "dark" ? "bg-darksidebar" : "bg-white"
                      }`}
                    >
                      <p className="text-base text-textcolor font-semibold flex flex-col gap-2">
                        Name:{" "}
                        <span
                          className={`text-sm  font-normal ${
                            mode === "dark" ? "text-darktext" : "text-black "
                          }`}
                        >
                          subhan
                        </span>
                      </p>
                    </AccordionPanel>
                    <AccordionPanel
                      pb={4}
                      className={`text-sm  flex gap-2 ${
                        mode === "dark" ? "bg-darksidebar" : "bg-white"
                      }`}
                    >
                      <p className="text-base text-textcolor font-semibold flex flex-col gap-2">
                        Email:{" "}
                        <span
                          className={`text-sm  font-normal ${
                            mode === "dark" ? "text-darktext" : "text-black "
                          }`}
                        >
                          subhan@gmail.com
                        </span>
                      </p>
                    </AccordionPanel>
                    <AccordionPanel
                      pb={4}
                      className={`text-sm  flex gap-2 ${
                        mode === "dark" ? "bg-darksidebar" : "bg-white"
                      }`}
                    >
                      <p className="text-base text-textcolor font-semibold flex flex-col gap-2">
                        Status:{" "}
                        <span
                          className={`text-sm  font-normal ${
                            mode === "dark" ? "text-darktext" : "text-black "
                          }`}
                        >
                          Busy Right now
                        </span>
                      </p>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          )}
          {/* PROFILE */}
          {isProfileOpen && (
            <div className="sm:min-h-[600px] sm:overflow-x-auto sm:mb-16">
              <div>
                <h1
                  className={`px-4 py-2 text-xl  font-medium ${
                    mode === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  Profile
                </h1>
              </div>
              <div className=" p-4 flex flex-col items-center justify-center">
                <Image
                  src="/profile.jpg"
                  width={130}
                  height={129}
                  alt="profile"
                  className="rounded-full h-[120px] object-cover lg:w-[100px] lg:h-[95px]"
                />
                <div className="flex items-center flex-col p-3 gap-2">
                  <p
                    className={` text-base font-normal ${
                      mode === "dark" ? "text-white" : "text-black"
                    }`}
                  >
                    Subhan
                  </p>
                  <div className="flex items-center gap-1">
                    <div className="active-circle"></div>
                    <small
                      className={`text-sm font-normal ${
                        mode === "dark" ? "text-white" : "text-black"
                      }`}
                    >
                      Active
                    </small>
                  </div>
                </div>
              </div>
              <hr
                className={`${
                  mode === "dark"
                    ? "text-darktext opacity-20"
                    : "text-textcolor opacity-90"
                }`}
              />

              <div className=" p-5">
                <p
                  className={` font-normal text-sm leading-loose ${
                    mode === "dark" ? "text-darktext" : "text-textcolor"
                  }`}
                >
                  If several languages coalesce, the grammar of the resulting
                  language is more simple and regular than that of the
                  individual.
                </p>
              </div>

              <div className="py-3 px-2 ">
                <Accordion defaultIndex={[0]} allowMultiple>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          className={`flex  items-center gap-2  text-xl font-light ${
                            mode === "dark"
                              ? "text-darktext"
                              : "text-textcolor "
                          }`}
                        >
                          <BsPersonFill className="text-base" /> About
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      pb={4}
                      className={`text-sm  flex gap-2 ${
                        mode === "dark" ? "bg-darksidebar" : "bg-white"
                      } `}
                    >
                      <p className="text-base text-textcolor font-semibold flex flex-col gap-2">
                        Email:{" "}
                        <span
                          className={`text-sm  font-normal ${
                            mode === "dark" ? "text-darktext" : "text-black "
                          }`}
                        >
                          Subhan@gmail.com
                        </span>
                      </p>
                    </AccordionPanel>
                    <AccordionPanel
                      pb={4}
                      className={`text-sm  ${
                        mode === "dark" ? "bg-darksidebar" : "bg-white"
                      }`}
                    >
                      <p className="text-base text-textcolor font-semibold flex flex-col gap-2">
                        Phone:{" "}
                        <span
                          className={`text-sm font-normal ${
                            mode === "dark" ? "text-darktext" : "text-black "
                          }`}
                        >
                          03010400528
                        </span>
                      </p>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          )}
          {/* CHATS */}
          {isChatsOpen && (
            <div>
              <div>
                <h1
                  className={`px-4 py-2 text-xl text-black font-medium ${
                    mode === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  Chats
                </h1>
                <div className="px-5 py-2 ">
                  <div
                    className={`flex items-center gap-2  p-3 rounded-md ${
                      mode === "dark" ? "bg-darksidebar text-white" : "bg-gray"
                    }`}
                  >
                    <CiSearch className="text-xl font-semibold text-gray-500" />
                    <input
                      type="text"
                      placeholder="Search User's"
                      className={` focus:outline-none w-full ${
                        mode === "dark" ? "bg-darksidebar" : "bg-gray"
                      }`}
                    />
                  </div>
                </div>
              </div>
              <div className="overflow-y-auto max-h-[520px] scrollbar sm:max-h-[445px]">
                {people.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className={`rounded-md p-3 m-2 transition-all ${
                        mode === "dark"
                          ? "hover:bg-darksidebar"
                          : "hover:bg-gray "
                      }`}
                    >
                      <PeopleChats data={item} />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          <div
            className={`hidden md:flex absolute z-[999] bottom-0  w-full h-16 ${
              mode === "dark" ? "bg-darksidebar" : "bg-white "
            }`}
          >
            <div className="flex items-center w-full justify-around">
              <p
                title="Profile"
                className={`text-2xl p-3  text-textcolor  hover:text-purple rounded-lg transition-all ${
                  mode === "dark"
                    ? "hover:bg-darkhover"
                    : "hover:bg-lightpurple"
                }`}
                onClick={toggleProfile}
              >
                <CgProfile />
              </p>
              <p
                title="Chats"
                className={`text-2xl p-3  text-textcolor  hover:text-purple rounded-lg transition-all ${
                  mode === "dark"
                    ? "hover:bg-darkhover"
                    : "hover:bg-lightpurple"
                }`}
                onClick={toggleChats}
              >
                <FaRegMessage />
              </p>
              <p
                title="Calls"
                className={`text-2xl p-3  text-textcolor  hover:text-purple rounded-lg transition-all ${
                  mode === "dark"
                    ? "hover:bg-darkhover"
                    : "hover:bg-lightpurple"
                }`}
                onClick={toggleCalls}
              >
                <BiPhoneCall />
              </p>
              <p
                title="Settings"
                className={`text-2xl p-3  text-textcolor  hover:text-purple rounded-lg transition-all ${
                  mode === "dark"
                    ? "hover:bg-darkhover"
                    : "hover:bg-lightpurple"
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
          </div>
        </div>

        <div className="w-full  md:hidden">chats</div>
      </div>
    </>
  );
};

export default Home;
