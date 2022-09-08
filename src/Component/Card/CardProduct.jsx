import React from "react";
import { Link } from "react-router-dom";
import "./CardProduct.css";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const CardProduct = ({ data }) => {
  return (
    <div className="relative shadow-xl rounded-lg hover:scale-105 transition-all">
      <Link to={`detail/${data.id}`}>
        <div className="w-full">
          <img src={data.img} className="w-full h-56 object-cover rounded-lg" alt="img" />
          <div className="absolute rounded-lg z-10 px-5 py-2 left-0 bottom-0 text-white bg-gradient-to-tr from-black w-full hover:pb-10 transition-all">
            <h1 className="font-semibold">{data.name}</h1>
            <h2 className="text-sm">
              {" "}
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(data.price)}{" "}
              / hari
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardProduct;
