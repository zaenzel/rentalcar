import React from "react";
import { AiFillCar } from "react-icons/ai";
import { GiPriceTag } from "react-icons/gi";
import { BiTimeFive } from "react-icons/bi";
import { FaAddressCard } from "react-icons/fa";
import "./WhyUs.css";

const WhyUs = () => {
  return (
    <div className="container" id="whyus">
      <div className="content-whyUs">
        <div className="title-whyUs">
          <h1 >Kenapa harus sewa di Rentalin?</h1>
        </div>
        <div className="card-wrapper-whyUs">
          <div className="card-whyUs">
            <AiFillCar className="text-3xl text-biru-primer" />
            <h1 className="font-bold">Mobil bervariasi</h1>
            <p className="text-sm">
              Tersedia banyak pilihan mobil, kondisi masih fresh, bersih dan
              terawat
            </p>
          </div>
          <div className="card-whyUs md:basis-1/2">
            <GiPriceTag className="text-3xl text-green-600" />
            <h1 className="font-bold">Harga murah</h1>
            <p className="text-sm">
              Harga murah dan bersaing, bisa bandingkan harga kami dengan rental
              mobil lain
            </p>
          </div>
          <div className="card-whyUs md:basis-1/2">
            <BiTimeFive className="text-3xl text-yellow-500" />
            <h1 className="font-bold">Layanan 24 Jam</h1>
            <p className="text-sm">
              Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
              tersedia di akhir minggu
            </p>
          </div>
          <div className="card-whyUs md:basis-1/2">
            <FaAddressCard className="text-3xl text-purple-500" />
            <h1 className="font-bold">Persyaratan Mudah</h1>
            <p className="text-sm">
              Cukup dengan kartu identitas kamu bisa menggunakan layanan kami
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
