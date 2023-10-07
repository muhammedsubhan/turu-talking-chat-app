"use client";

import { useToast } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SignUp = () => {
  const [createUserData, setCreateUserData] = useState({
    Username: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
  });
  const toast = useToast();
  const router = useRouter();

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setCreateUserData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!createUserData.Username) {
      toast({
        title: "Validation Error",
        description: "Username is required.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    if (!createUserData.Email) {
      toast({
        title: "Validation Error",
        description: "Email is required.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    if (!isValidEmail(createUserData.Email)) {
      toast({
        title: "Validation Error",
        description: "Invalid email address.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    if (!createUserData.Password) {
      toast({
        title: "Validation Error",
        description: "Password is required.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    if (createUserData.Password.length < 6) {
      toast({
        title: "Validation Error",
        description: "Password must be at least 6 characters.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    if (createUserData.Password !== createUserData.ConfirmPassword) {
      toast({
        title: "Validation Error",
        description: "Passwords do not match.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    try {
      const data = await fetch("http://localhost:8000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: createUserData.Username,
          email: createUserData.Email,
          password: createUserData.Password,
          confirmpassowrd: createUserData.ConfirmPassword,
        }),
      });
      if (data.status === 201) {
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        router.push("/login");
      } else {
        toast({
          title: "Account creation failed.",
          description: "There was an error creating your account.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen gap-16">
        <div>
          <h1>Logo</h1>
        </div>
        <form
          className="flex flex-col items-center justify-center gap-5 "
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="UserName"
            name="Username"
            value={createUserData.Username}
            onChange={handleOnChange}
            className="border-gray-300 border w-[315px] h-[45px] rounded-md  focus-within:outline-none xs:w-[270px]"
          />
          <input
            type="email"
            placeholder="Email"
            name="Email"
            value={createUserData.Email}
            onChange={handleOnChange}
            className="border-gray-300 border w-[315px] h-[45px] rounded-md  focus-within:outline-none xs:w-[270px]"
          />
          <input
            type="password"
            placeholder="Password"
            name="Password"
            value={createUserData.Password}
            onChange={handleOnChange}
            className="border-gray-300 border w-[315px] h-[45px] rounded-md  focus-within:outline-none xs:w-[270px]"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="ConfirmPassword"
            value={createUserData.ConfirmPassword}
            onChange={handleOnChange}
            className="border-gray-300 border w-[315px] h-[45px] rounded-md  focus-within:outline-none xs:w-[270px]"
          />
          <button
            type="submit"
            className="w-full py-1 bg-blue-300 rounded-md text-white font-semibold "
          >
            Create Now
          </button>
          <p className="text-sm font-light ">
            Already have an Account?
            <span className="font-normal hover:underline underline-offset-2 ">
              {" "}
              <Link href="/login">LogIn</Link>
            </span>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignUp;
