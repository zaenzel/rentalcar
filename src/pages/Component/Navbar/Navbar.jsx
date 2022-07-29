import React, { useState } from "react";
import "./Navbar.css";
import { MdOutlineDashboard, MdLogout } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const [user, serUser] = useState(true);
  const [burgerClass, setBurgerClass] = useState("hamburger-line unclicked");
  const [menu, setMenu] = useState("menu hide");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const clcikedMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("hamburger-line clicked");
      setMenu("menu show");
    } else {
      setBurgerClass("hamburger-line unclicked");
      setMenu("menu hide");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <nav className="absolute top-0 left-0 w-full flex justify-center items-center z-20 ">
      <div className="container px-5 max-w-screen-lg">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <a
              href="/"
              className="font-bold font-['Cinzel'] text-lg text-biru-primer block py-3 tracking-widest"
            >
              Logo
            </a>
          </div>
          {user ? (
            <div className="flex items-center px-4">
              <button className="block absolute right-4" onClick={clcikedMenu}>
                <span className={burgerClass}></span>
                <span className={burgerClass}></span>
                <span className={burgerClass}></span>
              </button>
            </div>
          ) : (
            <button className="py-2 px-5 bg-biru-primer text-white text-sm rounded-md">
              Login
            </button>
          )}
        </div>
        <div className={menu}>
          <ul className="text-white text-sm w-full">
            <li className={isMenuClicked? "items-menu clicked" : "items-menu"}>
              <MdOutlineDashboard className="text-xl" />
              <a href="">Dashboard</a>
            </li>
            <li className={isMenuClicked? "items-menu clicked" : "items-menu"}>
              <CgProfile className="text-xl" />
              <a href="">Profile</a>
            </li>
            <li className={isMenuClicked? "items-menu clicked" : "items-menu border-none"}>
              <MdLogout className="text-xl" />
              <a href="">Keluar</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
