import React from "react";
import Link from "next/link";
import Image from "next/image";

const SignIn = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10">
      <div>
        <h1>logo</h1>
      </div>
      <form className="flex flex-col items-center justify-center gap-5">
        <input
          type="email"
          placeholder="Email"
          className="border-gray-300 border w-[315px] h-[45px] rounded-md  focus-within:outline-none xs:w-[270px]"
        />
        <input
          type="password"
          placeholder="Password"
          className="border-gray-300 border w-[315px] h-[45px] rounded-md  focus-within:outline-none xs:w-[270px]"
        />
        <button className="w-full py-1 bg-blue-300 rounded-md text-white font-semibold">
          LogIn
        </button>
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

export default SignIn;
