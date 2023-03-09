import React from "react";
import { AiFillHeart, AiOutlineGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-light p-5 mt-5 w-100">
      <div className="container text-center">
        <h5>
          Designed By Dev_Daniels <AiFillHeart color={"red"} />
        </h5>
        <div className="connect">
          <Link
            target={"_blank"}
            to="https://github.com/eodaneze"
            className="link"
          >
            <AiOutlineGithub />
          </Link>
          <Link
            target={"_blank"}
            to="https://www.linkedin.com/in/ezeali-daniel-1481a1211/" className="link"
          >
            <FaLinkedinIn />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
