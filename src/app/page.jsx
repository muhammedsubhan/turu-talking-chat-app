"use client";

import React, { useContext, useEffect, useState } from "react";
import { DarkContext } from "./context/darkmode/DarkMode";
import Sidebar from "./components/sidebar/Sidebar";
import Users from "./components/users/Users";
import MessageComp from "./components/message/MessageComp";
import { MessageContext } from "./context/MessageContext/MessageContext";
import { LoginContext } from "./context/loginContext/LoginContext";

const Home = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isChatsOpen, setIsChatsOpen] = useState(true);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isCallsOpen, setIsCallsOpen] = useState(false);
  const { mode } = useContext(DarkContext);
  const { userMessage } = useContext(MessageContext);
  const { setCurrentUser } = useContext(LoginContext);

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const data = await fetch("http://localhost:8000/getCurrentUser", {
          credentials: "include",
        });
        const res = await data.json();

        setCurrentUser(res);
      } catch (error) {
        console.log(error);
      }
    };
    getCurrentUser();
  }, []);

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
          className={`w-[550px]  md:w-full relative ${
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
                no messages yet
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
