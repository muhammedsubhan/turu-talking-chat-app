import React, { useContext, useEffect, useState } from "react";
import PeopleChats from "../peoplesChat/PeopleChats";
import { CiSearch } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";
import { DarkContext } from "@/app/context/darkmode/DarkMode";
import MessageComp from "../message/MessageComp";
import { MessageContext } from "@/app/context/MessageContext/MessageContext";
import Image from "next/image";
import { Spinner } from "@chakra-ui/react";

const UsersChat = () => {
  const { mode } = useContext(DarkContext);
  const { setIsMessageOpen, isMessageOpen, setUserMessage } =
    useContext(MessageContext);
  const [searchUser, setSearchUser] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedUserMessage, setSelectedUserMessage] = useState("");

  const clearSearch = () => {
    setSearchUser("");
    setSelectedUserMessage("");
  };

  useEffect(() => {
    const getSearchUser = async () => {
      try {
        const trimmedSearchUser = searchUser.trim();

        if (trimmedSearchUser === "") {
          setSearchResults([]);
          setLoading(false);
          return;
        }

        setLoading(true);

        const data = await fetch(
          `http://localhost:8000/register/${trimmedSearchUser}`
        );
        const res = await data.json();
        setSearchResults(res);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getSearchUser();
  }, [searchUser]);

  const people = [
    {
      id: 1,
      img: "/profile.jpg",
      username: "subhan",
      text: "hello how are you! ",
    },
  ];

  const handleSearchResultClick = (message) => {
    setSearchUser("");
    setSelectedUserMessage(message);
    setUserMessage(message);
    setIsMessageOpen(true);
  };

  console.log(selectedUserMessage);

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
        <div className="px-5 py-2 relative">
          <div
            className={`flex items-center gap-2  p-3 rounded-md  ${
              mode === "dark" ? "bg-darksidebar text-white" : "bg-gray"
            }`}
          >
            <CiSearch className="text-xl font-semibold text-gray-500" />
            <input
              type="text"
              placeholder="Search User's"
              value={searchUser}
              onChange={(e) => setSearchUser(e.target.value)}
              className={` focus:outline-none w-full ${
                mode === "dark" ? "bg-darksidebar" : "bg-gray"
              }`}
            />
            {searchUser && (
              <FaTimes
                className="text-gray-500 cursor-pointer"
                onClick={clearSearch}
              />
            )}
          </div>

          <div
            className={`absolute left-0 top-[70px] z-[999]  w-full px-2 search-results`}
          >
            {loading ? (
              <div className="flex items-center justify-center mt-2">
                <Spinner size="md" className="text-purple " />
              </div>
            ) : (
              searchResults.map((item) => {
                return (
                  <div
                    key={item._id}
                    className={`rounded-sm p-3  transition-all   
                    ${
                      mode === "dark"
                        ? "hover:bg-darksidebar bg-chatbgcolor"
                        : "hover:bg-gray "
                    }`}
                    onClick={() => handleSearchResultClick(item)}
                  >
                    <div className="flex gap-5 items-center ">
                      <div className="border-2 border-purple rounded-full">
                        <Image
                          src={item.img}
                          width={70}
                          height={70}
                          alt="my-profile"
                          objectFit="cover"
                          objectPosition="center"
                          className="rounded-full  w-[50px] h-[49px] object-cover lg:w-[40px] lg:h-[39px] "
                        />
                      </div>
                      <div>
                        <p className="text-white">{item.username}</p>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
      <div className="overflow-y-auto max-h-[520px] scrollbar sm:max-h-[445px]">
        <p
          className={`text-sm px-6 pt-4 ${
            mode === "dark" ? "text-white" : "text-black"
          }`}
        >
          Recent Chats
        </p>
        {people.map((item) => {
          return (
            <div
              key={item.id}
              className={`rounded-md p-3 m-2 transition-all ${
                mode === "dark" ? "hover:bg-darksidebar" : "hover:bg-gray "
              }`}
              onClick={() => setIsMessageOpen(true)}
            >
              <PeopleChats data={item} />
            </div>
          );
        })}
      </div>
      {isMessageOpen && window.innerWidth <= 640 && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 ">
          <div
            className={`relative max-w-screen-sm w-full h-full p-4  ${
              mode === "dark" ? "bg-chatbgcolor" : "bg-white"
            }`}
          >
            <MessageComp setIsMessageOpen={setIsMessageOpen} />
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersChat;
