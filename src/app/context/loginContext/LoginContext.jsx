"use client";

import { createContext, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");

  const router = useRouter();

  const handelLogout = () => {
    const jwtToken = Cookies.get("jwtoken");
    if (jwtToken) {
      Cookies.remove("jwtoken");
    }

    router.push("/login");
  };

  return (
    <>
      <LoginContext.Provider
        value={{ currentUser, setCurrentUser, handelLogout }}
      >
        <div>{children}</div>
      </LoginContext.Provider>
    </>
  );
};
