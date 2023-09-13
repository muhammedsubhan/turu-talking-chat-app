import Link from "next/link";
import React from "react";

const SignUp = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen gap-16">
        <div>
          <h1>Logo</h1>
        </div>
        <form className="flex flex-col items-center justify-center gap-5 ">
          <input
            type="text"
            placeholder="UserName"
            className="border-gray-300 border w-[315px] h-[45px] rounded-md  focus-within:outline-none xs:w-[270px]"
          />
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
          <input
            type="password"
            placeholder="Confirm Password"
            className="border-gray-300 border w-[315px] h-[45px] rounded-md  focus-within:outline-none xs:w-[270px]"
          />
          <button className="w-full py-1 bg-blue-300 rounded-md text-white font-semibold ">
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
