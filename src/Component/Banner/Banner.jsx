import React from "react";
import { useNavigate } from "react-router-dom";
import "./Banner.css";
const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="container" id="banner">
      <div className="banner">
        <h1 className="title">Sewa Mobil Sekarang</h1>
        <p className="text">
          sewa mobil terbaik untuk perjalananmu dengan harga hemat dan mobil terawat. Proses mudah persyaratan ga ribet{" "}
        </p>
        <button className="btn" onClick={(e) => navigate("listcar")}>
          Mulai Sewa
        </button>
      </div>
    </div>
  );
};

export default Banner;
