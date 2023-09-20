import React, { useContext } from 'react'
import { BsPersonFill } from "react-icons/bs";
import Image from "next/image";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { DarkContext } from '@/app/context/darkmode/DarkMode';
const Profile = () => {
    const { mode } = useContext(DarkContext);

  return (
    <>
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
                language is more simple and regular than that of the individual.
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
                          mode === "dark" ? "text-darktext" : "text-textcolor "
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
    </>
  )
}

export default Profile