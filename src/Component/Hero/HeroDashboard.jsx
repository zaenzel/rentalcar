import React from "react";

const HeroDashboard = () => {
  return (
    <div className="pt-24 lg:pt-10 bg-gradient-to-t from-indigo-200 ">
      <div className="container justify-center items-center flex">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-5 lg:w-1/2 ">
            <h1 className={"text-lg sm:text-xl font-bold mb-5"}>
              Selamat datang,
              <span className="block mt-3 text-3xl sm:text-5xl text-biru-sekunder">
                Ardi Ariaputra Jaelani
              </span>
            </h1>
            <p className="text-sm text-slate-500 font-medium leading-relaxed mb-10">
              Semoga harimu menyenangkan !
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative">
              {/* <a href="http://www.freepik.com">Designed by Freepik</a> */}
              <a href="http://www.freepik.com">
                <img
                  src={"/images/hi.png"}
                  alt="foto"
                  className="max-w-full mx-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDashboard;
