import React from "react";
import { Link } from "react-router-dom";
import logo from "../image/logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <img src={logo} alt="" />
      {/* <strong className="right"> */}
      {/* <a href="Hire Our Candidates">Hire Our Candidates</a> */}
      {/* </strong> */}
      <Link className="right1" to="/Home">
        Hire Our Candidate
      </Link>
    </div>
  );
}
export default Navbar;
