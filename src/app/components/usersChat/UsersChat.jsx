import React, { useContext } from "react";
import PeopleChats from "../peoplesChat/PeopleChats";
import { CiSearch } from "react-icons/ci";
import { DarkContext } from "@/app/context/darkmode/DarkMode";

const UsersChat = () => {
  const { mode } = useContext(DarkContext);

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
      id: 4,
      img: "/profile.jpg",
      name: "hamza",
      text: "hello bitches hehehh ",
    },
    {
      id: 5,
      img: "/profile.jpg",
      name: "haseeb",
      text: "hello bitches hehehh ",
    },
    {
      id: 6,
      img: "/profile.jpg",
      name: "hamza",
      text: "hello bitches hehehh ",
    },
    {
      id: 7,
      img: "/profile.jpg",
      name: "haseeb",
      text: "hello bitches hehehh ",
    },
  ];

  return (
    <div>
      <div>
        <h1
          className={`px-4 py-2 text-xl text-black font-medium ${
            mode === "dark" ? "text-white" : "text-black"
          }`}
        >
          Chats
        </h1>
        <div className="px-5 py-2 ">
          <div
            className={`flex items-center gap-2  p-3 rounded-md ${
              mode === "dark" ? "bg-darksidebar text-white" : "bg-gray"
            }`}
          >
            <CiSearch className="text-xl font-semibold text-gray-500" />
            <input
              type="text"
              placeholder="Search User's"
              className={` focus:outline-none w-full ${
                mode === "dark" ? "bg-darksidebar" : "bg-gray"
              }`}
            />
          </div>
        </div>
      </div>
      <div className="overflow-y-auto max-h-[520px] scrollbar sm:max-h-[445px]">
        {people.map((item) => {
          return (
            <div
              key={item.id}
              className={`rounded-md p-3 m-2 transition-all ${
                mode === "dark" ? "hover:bg-darksidebar" : "hover:bg-gray "
              }`}
            >
              <PeopleChats data={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UsersChat;
