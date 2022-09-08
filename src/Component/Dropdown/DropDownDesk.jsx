import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";

const DropDownDesk = ({data, dropDown, setDropdown }) => {
  return (
    <div
      className="p-2 border-2 rounded-md cursor-pointer"
      onClick={(e) => setDropdown(!dropDown)}
    >
      <div className="flex items-center justify-between">
        <h1>Deskripsi</h1>
        <div
          className={
            dropDown
              ? "rotate-180 transition duration-300 ease-in-out"
              : "rotate-0 transition duration-300 ease-in-out"
          }
        >
          <IoIosArrowDropdown className="text-xl text-neutral-600" />
        </div>
      </div>
      <p
        className={
          dropDown
            ? "max-h-fit text-sm overflow-hidden mt-5"
            : "max-h-0 text-sm overflow-hidden"
        }
      >
        {data.desc}
      </p>
    </div>
  );
};

export default DropDownDesk;
