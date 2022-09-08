import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <div className="container max-w-lg -translate-y-5 sm:-translate-y-10">
      <div className="p-5 border border-gray-300 shadow-xl rounded-lg bg-white ">
        <form className=" px-5 py-2 flex justify-center items-center rounded-2xl border-2 focus:border-2 focus:border-biru-primer">
          <input className="outline-none w-full" placeholder="Cari mobil"/>
          <span className="cursor-pointer">
            <BsSearch />
          </span>
        </form>
      </div>
    </div>
  );
};

export default SearchInput;
