"use client";

import { createContext, useState } from "react";

export const DarkContext = createContext();

export const DarkProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");

  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <DarkContext.Provider value={{ toggle, mode }}>
        <div className={`theme ${mode}`}>{children}</div>
      </DarkContext.Provider>
    </>
  );
};
