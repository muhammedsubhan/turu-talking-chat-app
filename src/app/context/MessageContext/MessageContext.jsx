"use client";

import { createContext, useState } from "react";

export const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const [userMessage, setUserMessage] = useState("");
  const [isMessageOpen, setIsMessageOpen] = useState(false);



  return (
    <>
      <MessageContext.Provider value={{ setUserMessage, userMessage,setIsMessageOpen,isMessageOpen }}>
        <div>{children}</div>
      </MessageContext.Provider>
    </>
  );
};
