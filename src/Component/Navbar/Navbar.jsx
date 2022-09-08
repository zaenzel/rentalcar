import React, { useState } from "react";
import "./Navbar.css";
import {
  MdOutlineDashboard,
  MdLogout,
  MdOutlineQuestionAnswer,
  MdOutlineSpaceDashboard,
  MdGroup,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

const Navbar = ({ listcar }) => {
  const navigate = useNavigate();
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
    <nav className="header-fixed">
      <div className="container px-5 py-1 max-w-screen-lg">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <button
              className="font-bold font-['Cinzel'] text-lg text-biru-primer block py-3 tracking-widest cursor-pointer"
              onClick={(e) => {
                navigate("/");
              }}
            >
              Logo
            </button>
          </div>

          {/* humberger */}
          {listcar ? null : (
            <>
              <div className="sm:hidden flex items-center px-4">
                <button
                  className="block absolute right-4"
                  onClick={clcikedMenu}
                >
                  <span className={burgerClass}></span>
                  <span className={burgerClass}></span>
                  <span className={burgerClass}></span>
                </button>
              </div>
              <div>
                <ul className="hidden sm:flex space-x-7 text-sm">
                  <li
                    className="flex text-biru-primer space-x-1"
                    href="#beranda"
                  >
                    <AiFillHome className="text-lg" />
                    <a href="#beranda">Beranda</a>
                  </li>
                  <li className="flex text-biru-primer space-x-1">
                    <MdOutlineSpaceDashboard className="text-lg" />
                    <a href="#whyus">Why us</a>
                  </li>
                  <li className="flex text-biru-primer space-x-1">
                    <MdGroup className="text-lg" />
                    <a href="#testimonial">Testimonial</a>
                  </li>
                  <li className="flex text-biru-primer space-x-1">
                    <MdOutlineQuestionAnswer className="text-lg " />
                    <a href="#faq">FAQ</a>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>

        {/* modal */}
        <div className={menu}>
          <ul className="text-white text-sm w-full">
            <li className={isMenuClicked ? "items-menu clicked" : "items-menu"}>
              <AiFillHome className="text-lg" />
              <a href="#beranda">Beranda</a>
            </li>
            <li className={isMenuClicked ? "items-menu clicked" : "items-menu"}>
              <MdOutlineSpaceDashboard className="text-lg" />
              <a href="#whyus">Why us</a>
            </li>
            <li className={isMenuClicked ? "items-menu clicked" : "items-menu"}>
              <MdGroup className="text-lg" />
              <a href="#testimonial">Testimonial</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
