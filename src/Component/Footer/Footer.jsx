import React from "react";
import { BsFacebook, BsInstagram, BsWhatsapp, BsTwitter } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h1 className="title-footer">Hubungi kami</h1>
      <div className="icon-wraper">
        <BsFacebook className="icon-footer" />
        <BsInstagram className="icon-footer" />
        <BsWhatsapp className="icon-footer" />
        <BsTwitter className="icon-footer" />
      </div>
    </div>
  );
};

export default Footer;
