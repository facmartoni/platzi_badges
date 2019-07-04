import React from "react";
import "./styles/Hero.css";
import logo from "../images/badge-header.svg";

class Hero extends React.Component {
  render() {
    return (
      <div className="BadgeNew__hero">
        <img className="img-fluid" src={logo} alt="Logo" />
      </div>
    );
  }
}

export default Hero;
