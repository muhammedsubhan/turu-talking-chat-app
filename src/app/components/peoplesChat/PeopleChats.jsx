import Image from "next/image";
import React from "react";

const PeopleChats = ({ data }) => {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          <Image
            src={data.img}
            width={40}
            height={40}
            layout="fixed"
            alt="user-profile"
            className="rounded-full w-[40px] h-[39px] object-cover lg:w-[40px] lg:h-[39px]"
          />
          <div className="flex flex-col">
            <h1 className="text-lg font-medium text-black">{data.name}</h1>
            <small className="font-normal text-sm text-gray-400">
              {data.text}
            </small>
          </div>
        </div>
        <p className="text-xs text-gray-400 font-normal">05 min</p>
      </div>
    </>
  );
};

export default PeopleChats;
