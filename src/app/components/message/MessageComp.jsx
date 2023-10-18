import React, { useContext, useState, useEffect } from "react";
import Image from "next/image";
import { HiOutlineSearch } from "react-icons/hi";
import { BiArrowBack } from "react-icons/bi";
import { IoCallOutline } from "react-icons/io5";
import { BsCameraVideo } from "react-icons/bs";
import { BiTime, BiSolidSend } from "react-icons/bi";
import { BsEmojiSmile } from "react-icons/bs";
import { HiOutlinePhoto } from "react-icons/hi2";
import { DarkContext } from "@/app/context/darkmode/DarkMode";
import { MessageContext } from "@/app/context/MessageContext/MessageContext";
import { LoginContext } from "@/app/context/loginContext/LoginContext";
import { Spinner } from "@chakra-ui/react";

const MessageComp = ({ setIsMessageOpen }) => {
  const [searchToggle, setSearchToggle] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { mode } = useContext(DarkContext);
  const { userMessage } = useContext(MessageContext);
  const { currentUser } = useContext(LoginContext);
  const [message, setMessage] = useState("");
  const [chatId, setChatId] = useState("");

  const convo = [
    {
      id: 1,
      receive: "Good Morning!!",
      send: "Good Morning babe, how are you?",
    },
    {
      id: 2,
      receive: "Good Morning!!",
      send: "Good Morning babe, how are you?",
    },
    {
      id: 3,
      receive: "Good Morning!!",
      send: "Good Morning babe, how are you?",
    },
    {
      id: 4,
      receive: "Good Morning!!",
      send: "Good Morning babe, how are you?",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  
  const handleSendMessage = async () => {
    setChatId(localStorage.getItem("chatId")); // Set chatId from your source.

    try {
      const data = await fetch("http://localhost:8000/sendmessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: message, chatId: chatId }),
        credentials: "include",
      });
      const res = await data.json();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   const fetchMessages = async () => {
  //     try {
  //       const data = await fetch(`http://localhost:8000/allchats/${chatId}`);
  //       if (data.status === 404) {
  //         throw new Error("Resource not found");
  //       }
  //       const res = await data.json();
  //       console.log("All messages response", res);
  //     } catch (error) {
  //       console.error("Error fetching messages:", error);
  //     }
  //   };

 
  //     fetchMessages();
   
  // }, [chatId]);

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <Spinner size="xl" className="text-purple" />
        </div>
      ) : (
        <div>
          <div className="py-4 px-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BiArrowBack
                onClick={() => setIsMessageOpen(false)}
                className={`font-semibold text-xl hidden sm:block ${
                  mode === "dark" ? "text-white" : "text-black"
                }`}
              />
              <Image
                src={userMessage.img}
                width={70}
                height={70}
                alt="chat-pic"
                className="rounded-full w-[50px] h-[49px] object-cover sm:w-[40px] sm:h-[39px]"
              />
              <p
                className={`text-sm sm:text-xs ${
                  mode === "dark" ? "text-white" : "text-black"
                }`}
              >
                {userMessage.username}
              </p>
              <div className="active-circle"></div>
            </div>
            <div>
              <ul className="flex items-center gap-8 sm:gap-3">
                <li className="text-darktext text-2xl cursor-pointer relative sm:text-base">
                  <HiOutlineSearch
                    onClick={() => setSearchToggle((prev) => !prev)}
                  />

                  {searchToggle && (
                    <div className="absolute top-14 -left-60 z-[999] sm:-left-32">
                      <div
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg drop-shadow-lg ${
                          mode === "dark"
                            ? "bg-darkprofile text-white"
                            : "bg-lightgray text-black"
                        }`}
                      >
                        <input
                          type="text"
                          placeholder="Search...."
                          className={`focus:outline-none w-[210px] px-4 py-2 rounded-lg text-base sm:w-[170px] ${
                            mode === "dark" ? "bg-darksidebar" : "bg-gray"
                          }`}
                        />
                      </div>
                    </div>
                  )}
                </li>
                <li className="text-darktext text-2xl cursor-pointer sm:text-base">
                  <IoCallOutline />
                </li>
                <li className="text-darktext text-2xl cursor-pointer sm:text-base">
                  <BsCameraVideo />
                </li>
              </ul>
            </div>
          </div>
          <hr
            className={`${
              mode === "dark"
                ? "text-darktext opacity-20"
                : "text-textcolor opacity-90"
            }`}
          />

          <div className="overflow-y-auto max-h-[550px] scrollbar sm:max-h-[460px]">
            {convo.map((msg) => {
              return (
                <div
                  key={msg.id}
                  className="flex items-end gap-3 mb-4 text-white p-5"
                >
                  <div>
                    <Image
                      src={userMessage.img}
                      width={40}
                      height={40}
                      alt="sender-profile"
                      className="rounded-full max-w-[40px] h-[39px] object-cover lg:w-[40px] lg:h-[39px]"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="bg-purple py-2 px-4 rounded-lg">
                      <p className="flex flex-wrap">{msg.receive}</p>
                      <small className="flex items-center justify-end mt-1 gap-1">
                        <BiTime /> <span>10:00</span>
                      </small>
                    </div>
                    <small
                      className={`text-xs font-normal ${
                        mode === "dark" ? "text-white" : "text-black"
                      }`}
                    >
                      {userMessage.username}
                    </small>
                  </div>
                </div>
              );
            })}

            {convo.map((msg) => {
              return (
                <div
                  key={msg.id}
                  className="flex items-end gap-3 flex-row-reverse text-white p-5"
                >
                  <div>
                    <Image
                      src={currentUser.img}
                      width={40}
                      height={40}
                      alt="myprofile"
                      className="rounded-full max-w-[40px] h-[39px] object-cover lg:w-[40px] lg:h-[39px]"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div
                      className={`py-2 px-4 rounded-lg ${
                        mode === "dark"
                          ? "bg-darksidebar text-white"
                          : "bg-gray text-black"
                      }`}
                    >
                      <p className="flex flex-wrap">{msg.send}</p>
                      <small className="flex items-center mt-1 gap-1">
                        <BiTime /> <span>10:00</span>
                      </small>
                    </div>
                    <small
                      className={`text-xs font-normal flex flex-row-reverse ${
                        mode === "dark" ? "text-white" : "text-black"
                      }`}
                    >
                      {currentUser.username}
                    </small>
                  </div>
                </div>
              );
            })}
          </div>

          <div
            className={`absolute bottom-0 w-full ${
              mode === "dark" ? "bg-chatbgcolor" : "bg-white"
            }`}
          >
            <hr
              className={`${
                mode === "dark"
                  ? "text-darktext opacity-20"
                  : "text-textcolor opacity-90"
              }`}
            />
            <div className="w-full flex items-center gap-4 sm:gap-1 px-5 sm:px-4">
              <div className="py-4  w-full">
                <input
                  type="text"
                  placeholder="Enter Message..."
                  onChange={(e) => setMessage(e.target.value)}
                  className={`focus:outline-none w-full py-2 px-3 rounded-lg ${
                    mode === "dark"
                      ? "bg-darksidebar text-white"
                      : "bg-gray text-black"
                  }`}
                />
              </div>
              <div className="flex items-center gap-6 sm:gap-3">
                <button className="text-2xl text-purple font-bold sm:text-base">
                  <BsEmojiSmile />
                </button>
                <button className="text-2xl text-purple font-bold sm:text-base">
                  <HiOutlinePhoto />
                </button>
                <button
                  onClick={handleSendMessage}
                  className="px-3 py-2 sm:px-2 sm:py-1 text-xl rounded-lg bg-purple text-white sm:text-base"
                >
                  <BiSolidSend />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MessageComp;
