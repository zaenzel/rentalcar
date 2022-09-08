import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = ({ img }) => {
  const navigate = useNavigate()
  return (
    <div className="pt-36 bg-gradient-to-t from-indigo-200" id="beranda">
      <div className="container">
        <div className="flex flex-wrap items-center">
          <div className="w-full px-5 lg:w-1/2 lg:self-start">
            <h1 className={ "text-lg sm:text-xl font-bold mb-5"}>
              Solusi Terbaik Untuk{" "}
              <span className="block text-3xl sm:text-5xl text-biru-sekunder">
                Sewa <span className="text-lg sm:text-xl text-black">&</span>{" "}
                Rental{" "}
                <span className="text-lg sm:text-xl text-black">Mobil</span>
              </span>
            </h1>
            <p className="text-sm text-slate-500 font-medium leading-relaxed mb-10">
              Selamat datang di Rentalin. Platform untuk kamu yang ingin
              <span className="font-bold text-black text-base"> sewa</span> atau
              <span className="font-bold text-black text-base">
                {" "}
                rental
              </span>{" "}
              mobil
            </p>
            <button
              className="py-3 px-8 text-white text-sm bg-biru-primer rounded-3xl hover:opacity-90 transition duration-300 ease-in-out"
              onClick={e=>navigate("/listcar")}
            >
              Mulai Rental
            </button>
          </div>
          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="relative mt-10 sm:mt-0 sm:right-0">
              <img
                src={"/images/mobil.png"}
                alt="foto"
                className="max-w-full mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
