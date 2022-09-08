import React from "react";
import { SiCheckmarx } from "react-icons/si";

const ValueSection = () => {
  return (
    <div className="container" id="value">
      <div className="flex flex-wrap items-center">
        <div className="w-full py-10 self-start md:w-1/2">
          <img src="/images/orang54.png" className="max-w-full mx-auto" />
        </div>
        <div className="w-full space-y-6 md:w-1/2 md:px-10">
          <h1 className="font-bold text-xl">
            Rental mobil terbaik untuk segala jenis perjalanan!
          </h1>
          <h3 className="text-sm">
            Sewa mobil di (Lokasimu) bersama Rentalin jaminan harga
            lebih murah dibandingkan yang lain, serta
            kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
            meeting, dll.
          </h3>
          <ul className="text-sm space-y-4">
            <li className="flex justify-start lg:items-center">
              <SiCheckmarx className="mr-3 text-green-700 " />
              Sewa Mobil Dengan Supir di Bali 12 Jam
            </li>
            <li className="flex justify-start lg:items-center">
              <SiCheckmarx className="mr-3 text-green-700" />
              Sewa Mobil Lepas Kunci di Bali 24 Jam
            </li>
            <li className="flex justify-start lg:items-center">
              <SiCheckmarx className="mr-3 text-green-700" />
              Sewa Mobil Jangka Panjang Bulanan
            </li>
            <li className="flex justify-start lg:items-center">
              <SiCheckmarx className="mr-3 text-green-700" />
              Gratis Antar - Jemput Mobil di Bandara
            </li>
            <li className="flex justify-start lg:items-center">
              <SiCheckmarx className="mr-3 text-green-700" />
              Layanan Airport Transfer / Drop In Out
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ValueSection;
