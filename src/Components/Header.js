import React from "react";
import "./Header.css";
import headerImg from "./../Assets/Header icon.png";

const Header = ({ headerExpanded }) => {
  return (
    <div className="head-container">
      <img
        src={headerImg}
        className={`head-image ${
          headerExpanded ? "head-image-expanded" : "head-image-contracted"
        }`}
        alt="Header icon"
      />
      <h1
        className={`head-text ${
          headerExpanded ? "head-text-expanded" : "head-text-contracted"
        }`}
      >
        Name It!
      </h1>
    </div>
  );
};

export default Header;
