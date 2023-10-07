"use client";
import React, { useContext, useState } from "react";
import Link from "next/link";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const LogIn = () => {
  const [loginData, setLoginData] = useState({
    Email: "",
    Password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const toast = useToast();
  const router = useRouter();

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setLoginData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(loginData);

    try {
      const data = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: loginData.Email,
          password: loginData.Password,
        }),
        credentials: "include",
      });

      const res = await data.json();

      if (res.status === 302) {
        const jwtToken = Cookies.get("jwtoken");

        if (jwtToken) {
          toast({
            title: "LogIn Successful.",
            description: "Welcome to Home Page.",
            status: "success",
            duration: 9000,
            isClosable: true,
          });

          router.push("/");
        }
      } else {
        setErrorMessage(
          res.error ||
            "LogIn Failed. There was an error logging in to your account."
        );
        toast({
          title: "LogIn Failed.",
          description: errorMessage,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10">
      <div>
        <h1>logo</h1>
      </div>
      <form
        className="flex flex-col items-center justify-center gap-5"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          placeholder="Email"
          name="Email"
          value={loginData.Email}
          onChange={handleOnChange}
          required
          className="border-gray-300 border w-[315px] h-[45px] rounded-md focus-within:outline-none xs:w-[270px]"
        />
        <input
          type="password"
          placeholder="Password"
          name="Password"
          value={loginData.Password}
          onChange={handleOnChange}
          required
          className="border-gray-300 border w-[315px] h-[45px] rounded-md focus-within:outline-none xs:w-[270px]"
        />
        <button
          type="submit"
          className="w-full py-1 bg-blue-300 rounded-md text-white font-semibold"
        >
          LogIn
        </button>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <p className="text-sm font-light">
          Don't have an Account?
          <span className="font-normal hover:underline underline-offset-2 ">
            {" "}
            <Link href="/signup">Create Account</Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default LogIn;
