import React, { useContext } from "react";
import Image from "next/image";
import { MdModeEditOutline } from "react-icons/md";
import { PiPencilSimpleLineFill } from "react-icons/pi";
import { BsPersonFill } from "react-icons/bs";

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { DarkContext } from "@/app/context/darkmode/DarkMode";
const Profile = () => {
  const { mode } = useContext(DarkContext);

  return (
    <>
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
                      mode === "dark" ? "text-darktext" : "text-textcolor "
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
    </>
  );
};

export default Profile;
