import Image from "next/image";
import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { FaRegMessage } from "react-icons/fa6";
import { FiSettings } from "react-icons/fi";
import { CiLogout } from "react-icons/ci";
const Home = () => {
  return (
    <>
      <div className="flex h-screen">
        <div className="w-[100px]  flex flex-col border-r md:hidden ">
          <div className="p-2 flex-grow flex flex-col items-center gap-10  ">
            <div>
              <Image
                src="/profile.jpg"
                width={70}
                height={70}
                layout="fixed"
                className="rounded-full w-[50px] h-[49px] object-cover lg:w-[40px] lg:h-[39px]"
              />
            </div>
            <p className="text-2xl p-2 rounded-full hover:bg-blue-300 transition-all ">
              <FaRegMessage />
            </p>
            <p className="text-2xl p-2 rounded-full hover:bg-blue-300 transition-all ">
              <BiPhoneCall />
            </p>
            <p className="text-2xl p-2 rounded-full hover:bg-blue-300 transition-all ">
              <FiSettings />
            </p>
          </div>
          <div className="flex justify-center mb-10">
            <p className="text-2xl p-2 rounded-full hover:bg-blue-300 transition-all ">
              <CiLogout />
            </p>
          </div>
        </div>
        <div className="w-[430px] ">people</div>
        <div className="w-full ">chats</div>
      </div>
    </>
  );
};

export default Home;
