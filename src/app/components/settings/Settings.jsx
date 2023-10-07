import React, { useContext, useRef, useState, useEffect } from "react";
import Image from "next/image";
import { MdModeEditOutline } from "react-icons/md";
import { PiPencilSimpleLineFill } from "react-icons/pi";
import { BsPersonFill } from "react-icons/bs";
import { Spinner } from "@chakra-ui/react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { DarkContext } from "@/app/context/darkmode/DarkMode";
import { LoginContext } from "@/app/context/loginContext/LoginContext";

const Profile = () => {
  const { mode } = useContext(DarkContext);
  const { currentUser, setCurrentUser } = useContext(LoginContext);
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(
    currentUser.img || "/profileimg.png"
  );
  const [updateProfileImage, setUpdateProfileImage] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [newUsername, setNewUsername] = useState(currentUser.username);
  const [newEmail, setNewEmail] = useState(currentUser.email);
  const [newStatus, setNewStatus] = useState(currentUser.status || "");

  const fileInputRef = useRef(null);

  useEffect(() => {}, [updateProfileImage]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreviewImage(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleImageUpload = async () => {
    if (selectedImage) {
      const formData = new FormData();
      formData.append("image", selectedImage);

      try {
        setIsUploading(true);
        const response = await fetch("http://localhost:8000/uploadImage", {
          method: "POST",
          body: formData,
          credentials: "include",
        });

        const data = await response.json();

        if (response.ok) {
          console.log("Image uploaded successfully");
          if (data.img) {
            setCurrentUser({ ...currentUser, img: data.img });
            setUpdateProfileImage((prev) => prev + 1);
          }
        } else {
          console.error("Image upload failed");
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      } finally {
        setIsUploading(false);
      }
    }
  };

  const openFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSaveChanges = async () => {
    try {
      const updatedUserData = {
        username: newUsername,
        email: newEmail,
        status: newStatus,
      };

      const response = await fetch(
        `http://localhost:8000/updateUser/${currentUser._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUserData),
        }
      );

      if (response.ok) {
        const updatedUser = await response.json();
        setCurrentUser(updatedUser);
        console.log(updatedUser);
      } else {
        console.error("Failed to update user data");
      }
    } catch (error) {
      console.error("Error updating user data:", error);
    }
    setIsEditing(false);
  };

  return (
    <>
      <div className="sm:min-h-[600px] sm:overflow-x-auto sm:mb-16">
        <div>
          <h1
            className={`px-4 py-2 text-xl  font-medium ${
              mode === "dark" ? "text-white" : "text-black"
            }`}
          >
            Settings
          </h1>
        </div>
        <div className="p-4 flex flex-col items-center justify-center">
          <div className="flex relative">
            <div className="border-2 border-purple rounded-full">
              <Image
                src={previewImage}
                width={130}
                height={129}
                alt="setting-profile"
                className="rounded-full h-[125px] object-cover lg:w-[100px] lg:h-[95px]"
              />
            </div>
            <label
              className="absolute right-0 -bottom-1 z-[999] cursor-pointer bg-purple p-3 rounded-full"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
              }}
            >
              <p>
                <MdModeEditOutline
                  className="text-xl text-gray"
                  onClick={openFileInput}
                />
              </p>
            </label>
            <input
              type="file"
              style={{ display: "none" }}
              onChange={handleImageChange}
              ref={fileInputRef}
              id="profile-image-upload"
            />
          </div>
          {selectedImage && (
            <div className="text-center">
              {isUploading ? (
                <Spinner className="mt-2 text-purple" />
              ) : (
                <button
                  onClick={handleImageUpload}
                  className="mt-2 px-5 py-1 rounded-md flex items-center gap-2 bg-purple text-white"
                >
                  Upload
                </button>
              )}
            </div>
          )}
          <div className="flex items-center flex-col p-3 gap-2">
            <p
              className={` text-base font-normal ${
                mode === "dark" ? "text-white" : "text-black"
              }`}
            >
              {currentUser.username}
            </p>
            <div className="flex gap-1 items-center">
              <div className="flex gap-1 items-center">
                <div className="active-circle"></div>
                <small
                  className={`text-sm font-normal ${
                    mode === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  Active
                </small>
              </div>
            </div>
          </div>
        </div>
        <hr
          className={`${
            mode === "dark"
              ? "text-darktext opacity-20"
              : "text-textcolor opacity-90"
          }`}
        />

        <div className="py-3 px-2 max-w-[550px]">
          <div className="text-end p-2 flex justify-end">
            <button
              className="px-5 py-1 rounded-md flex items-center gap-2 bg-purple text-white"
              onClick={() => setIsEditing(!isEditing)}
            >
              <p>
                <PiPencilSimpleLineFill />
              </p>
              {isEditing ? "Cancel" : "Edit"}
            </button>
          </div>
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    className={`flex  items-center gap-2  text-xl font-light ${
                      mode === "dark" ? "text-darktext" : "text-textcolor "
                    }`}
                  >
                    <BsPersonFill className="text-base" /> Personal Info
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                className={`text-sm  flex gap-2 ${
                  mode === "dark" ? "bg-darksidebar" : "bg-white"
                }`}
              >
                {isEditing ? (
                  <div className="flex flex-col items-center">
                    <div className="flex flex-col gap-2 ">
                      <label className="text-base text-textcolor font-semibold">
                        Name
                      </label>
                      <input
                        type="text"
                        className={` focus:outline-none w-[280px] h-[35px] border border-textcolor rounded-lg px-2 ${
                          mode === "dark"
                            ? "bg-darksidebar text-white"
                            : "bg-gray text-black"
                        }`}
                        value={newUsername}
                        onChange={(e) => setNewUsername(e.target.value)}
                      />
                      <label className="text-base text-textcolor font-semibold">
                        Email
                      </label>
                      <input
                        type="email"
                        className={` focus:outline-none w-[280px] h-[35px] border border-textcolor rounded-lg px-2 ${
                          mode === "dark"
                            ? "bg-darksidebar text-white"
                            : "bg-gray text-black"
                        }`}
                        value={newEmail}
                        onChange={(e) => setNewEmail(e.target.value)}
                      />
                      <label className="text-base text-textcolor font-semibold">
                        Status
                      </label>
                      <input
                        type="text"
                        className={` focus:outline-none w-[280px] h-[35px] border border-textcolor rounded-lg px-2 ${
                          mode === "dark"
                            ? "bg-darksidebar text-white"
                            : "bg-gray text-black"
                        }`}
                        value={newStatus}
                        onChange={(e) => setNewStatus(e.target.value)}
                      />

                      <button
                        className=" py-2 sm:py-1 text-xl rounded-lg bg-purple text-white sm:text-base"
                        onClick={handleSaveChanges}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                ) : (
                  <p className="text-base text-textcolor font-semibold flex flex-col gap-2">
                    Name:{" "}
                    <span
                      className={`text-sm  font-normal ${
                        mode === "dark" ? "text-darktext" : "text-black "
                      }`}
                    >
                      {newUsername}
                    </span>
                    Email:{" "}
                    <span
                      className={`text-sm  font-normal ${
                        mode === "dark" ? "text-darktext" : "text-black "
                      }`}
                    >
                      {newEmail}
                    </span>
                    Status:{" "}
                    <span
                      className={`text-sm  font-normal ${
                        mode === "dark" ? "text-darktext" : "text-black "
                      }`}
                    >
                      {newStatus || "Hi, i am new to this App"}
                    </span>
                  </p>
                )}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Profile;
