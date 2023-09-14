import Image from "next/image";
import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { FaRegMessage } from "react-icons/fa6";
import { FiSettings } from "react-icons/fi";
import { BsMoonStars } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import PeopleChats from "./components/peoplesChat/PeopleChats";
const Home = () => {
  const people = [
    {
      id: 1,
      img: "/profile.jpg",
      name: "subhan",
      text: "hello bitches hehehh ",
    },
    {
      id: 2,
      img: "/profile.jpg",
      name: "hamza",
      text: "hello bitches hehehh ",
    },
    {
      id: 3,
      img: "/profile.jpg",
      name: "haseeb",
      text: "hello bitches hehehh ",
    },
    {
      id: 2,
      img: "/profile.jpg",
      name: "hamza",
      text: "hello bitches hehehh ",
    },
    {
      id: 3,
      img: "/profile.jpg",
      name: "haseeb",
      text: "hello bitches hehehh ",
    },
    {
      id: 2,
      img: "/profile.jpg",
      name: "hamza",
      text: "hello bitches hehehh ",
    },
    {
      id: 3,
      img: "/profile.jpg",
      name: "haseeb",
      text: "hello bitches hehehh ",
    },
    {
      id: 2,
      img: "/profile.jpg",
      name: "hamza",
      text: "hello bitches hehehh ",
    },
    {
      id: 3,
      img: "/profile.jpg",
      name: "haseeb",
      text: "hello bitches hehehh ",
    },
  ];

  return (
    <>
      <div className="flex min-h-screen">
        <div className="w-[100px]  flex flex-col border-r border-gray md:hidden bg-white">
          <div className="p-2 flex-grow flex flex-col items-center gap-10  ">
            <div>
              <Image
                src="/profile.jpg"
                width={70}
                height={70}
                layout="fixed"
                alt="profile"
                className="rounded-full w-[50px] h-[49px] object-cover lg:w-[40px] lg:h-[39px]"
              />
            </div>
            <p
              title="Profile"
              className="text-2xl p-3  text-textcolor hover:bg-lightpurple hover:text-purple rounded-lg transition-all"
            >
              <CgProfile />
            </p>
            <p
              title="Chats"
              className="text-2xl p-3 text-textcolor hover:bg-lightpurple hover:text-purple rounded-lg transition-all "
            >
              <FaRegMessage />
            </p>
            <p
              title="Calls"
              className="text-2xl p-3 text-textcolor hover:bg-lightpurple hover:text-purple rounded-lg transition-all "
            >
              <BiPhoneCall />
            </p>
            <p
              title="Settings"
              className="text-2xl p-3 text-textcolor hover:bg-lightpurple hover:text-purple rounded-lg transition-all "
            >
              <FiSettings />
            </p>
          </div>
          <div className="flex justify-center mb-10">
            <p className="text-2xl text-textcolor">
              <BsMoonStars />
            </p>
          </div>
        </div>
        <div className="w-[500px] bg-lightgray md:w-full relative ">
          <div>
            <h1 className="px-4 py-2 text-xl text-black font-medium">Chats</h1>
            <div className="px-5 py-2 mb-10">
              <div className="flex items-center gap-2 bg-gray p-3 rounded-md">
                <CiSearch className="text-xl font-semibold text-gray-500" />
                <input
                  type="text"
                  placeholder="Search User's"
                  className="bg-gray focus:outline-none w-full"
                />
              </div>
            </div>
          </div>

          <div
            className="overflow-y-auto max-h-[500px] scrollbar sm:max-h-[400px]"
            style={{ marginBottom: "40px" }}
          >
            {people.map((item) => {
              return (
                <div
                  key={item.id}
                  className="rounded-md p-3 m-2 hover:bg-gray transition-all"
                >
                  <PeopleChats data={item} />
                </div>
              );
            })}
          </div>
          <div className="hidden md:flex absolute z-[999] bottom-0 bg-white w-full h-16 ">
            <div className="flex items-center w-full justify-around">
              <p
                title="Profile"
                className="text-2xl p-3  text-textcolor hover:bg-lightpurple hover:text-purple rounded-lg transition-all"
              >
                <CgProfile />
              </p>
              <p
                title="Chats"
                className="text-2xl p-3  text-textcolor hover:bg-lightpurple hover:text-purple rounded-lg transition-all"
              >
                <FaRegMessage />
              </p>
              <p
                title="Calls"
                className="text-2xl p-3  text-textcolor hover:bg-lightpurple hover:text-purple rounded-lg transition-all"
              >
                <BiPhoneCall />
              </p>
              <p
                title="Settings"
                className="text-2xl p-3  text-textcolor hover:bg-lightpurple hover:text-purple rounded-lg transition-all"
              >
                <FiSettings />
              </p>
              <div>
                <Image
                  src="/profile.jpg"
                  width={70}
                  height={70}
                  layout="fixed"
                  alt="profile"
                  className="rounded-full w-[50px] h-[49px] object-cover lg:w-[40px] lg:h-[39px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:hidden">chats</div>
      </div>
    </>
  );
};

export default Home;
