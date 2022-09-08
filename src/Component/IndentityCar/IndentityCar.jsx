import React from "react";
import { MdGroup, MdDateRange } from "react-icons/md";
import { GiSteeringWheel } from "react-icons/gi";

const IndentityCar = ({ data }) => {
  const price = parseInt(data.price)
  return (
    <div>
      <h1 className="font-bold">{data.name}</h1>
      <h2 className="text-sm mt-2">
       Rp. {price.toLocaleString("id-ID")} / hari
      </h2>
      <div className="text-sm text-neutral-500 mt-5 space-y-2 lg:space-y-0 lg:space-x-4 lg:flex">
        <p className="flex items-center">
          <span className="mr-1">
            <MdGroup />{" "}
          </span>
          {data.capacity} orang
        </p>
        <p className="flex items-center">
          <span className="mr-1">
            <GiSteeringWheel />
          </span>
          {data.tipe}
        </p>
        <p className="flex items-center">
          <span className="mr-1">
            <MdDateRange />
          </span>{" "}
          Tahun {data.year}
        </p>
      </div>
    </div>
  );
};

export default IndentityCar;
