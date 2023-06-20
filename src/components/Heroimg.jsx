import React from "react";
import "./HeroImgStyles.css";
import first from "../img/1.jpg";
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={first} alt="first" />
      </div>
      <div className="content">
        <p>Hi, I'M PRIYANKA PRASAD</p>
        <h1>Software Developer | Java | ReactJs</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heroimg;
