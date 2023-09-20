"use client";

import React, { useContext } from "react";
import { DarkContext } from "@/app/context/darkmode/DarkMode";
import Settings from "../settings/Settings";
import UsersChat from "../usersChat/UsersChat";
import HoriSidebar from "../horizontalSidebar/HoriSidebar";
import Profile from "../profile/Profile";
const Users = ({
  toggleChats,
  toggleCalls,
  toggleProfile,
  toggleSetting,
  isProfileOpen,
  isChatsOpen,
  isSettingsOpen,
  isCallsOpen,
}) => {
  const { mode } = useContext(DarkContext);

  return (
    <>
      <div>
        {/* Calls */}
        {isCallsOpen && <div>This Div is For Calls Section </div>}
        {/* settings */}
        {isSettingsOpen && <Settings />}
        {/* PROFILE */}
        {isProfileOpen && (
          <div className="sm:min-h-[600px] sm:overflow-x-auto sm:mb-16">
            <Profile />
          </div>
        )}
        {/* CHATS */}
        {isChatsOpen && <UsersChat />}
        <div
          className={`hidden md:flex fixed z-[999] bottom-0  w-full h-16 ${
            mode === "dark" ? "bg-darksidebar" : "bg-white "
          }`}
        >
          <HoriSidebar
            toggleChats={toggleChats}
            toggleCalls={toggleCalls}
            toggleProfile={toggleProfile}
            toggleSetting={toggleSetting}
          />
        </div>
      </div>
    </>
  );
};

export default Users;
