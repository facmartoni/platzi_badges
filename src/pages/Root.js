import React from "react";
import { Link } from "react-router-dom";
import "./styles/Root.css";
import astronauts from "../images/astronauts.svg";
import platziConfLogo from "../images/platziconf-logo.svg";

export default function Root() {
  return (
    <div className="Root container-fluid d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row">
          <div className="col">
            <img
              className="Root__image my-2"
              src={platziConfLogo}
              alt="Platzi Conf Logo"
            />

            <h1 className="Root__title my-2">
              Badge
              <br />
              Management
              <br />
              System
            </h1>

            <Link className="btn btn-primary my-2" to="/badges">
              Start
            </Link>
          </div>
          <div className="col">
            <img
              className="Root__astronauts"
              src={astronauts}
              alt="Astronautas"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
