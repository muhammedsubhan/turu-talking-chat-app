"use client";

import React, { useContext, useState } from "react";
import { DarkContext } from "./context/darkmode/DarkMode";
import Sidebar from "./components/sidebar/Sidebar";
import Users from "./components/users/Users";
import MessageComp from "./components/message/MessageComp";
import { MessageContext } from "./context/MessageContext/MessageContext";

const Home = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isChatsOpen, setIsChatsOpen] = useState(true);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isCallsOpen, setIsCallsOpen] = useState(false);
  const { mode } = useContext(DarkContext);
  const { userMessage } = useContext(MessageContext);

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
        <Sidebar
          toggleChats={toggleChats}
          toggleCalls={toggleCalls}
          toggleProfile={toggleProfile}
          toggleSetting={toggleSetting}
        />
        <div
          className={`w-[500px]  md:w-full relative ${
            mode === "dark" ? "bg-darkprofile" : "bg-lightgray"
          }`}
        >
          <Users
            toggleChats={toggleChats}
            toggleCalls={toggleCalls}
            toggleProfile={toggleProfile}
            toggleSetting={toggleSetting}
            isProfileOpen={isProfileOpen}
            isChatsOpen={isChatsOpen}
            isSettingsOpen={isSettingsOpen}
            isCallsOpen={isCallsOpen}
          />
        </div>

        <div
          className={`w-full md:hidden relative ${
            mode === "dark" ? "bg-chatbgcolor" : "bg-white"
          }`}
        >
          {userMessage ? (
            <MessageComp />
          ) : (
            <div className="flex items-center justify-center  h-screen">
              <div
                className={`${mode === "dark" ? "text-white" : "text-black"}`}
              >
                no messages yet{" "}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
