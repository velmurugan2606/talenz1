import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="active">
      <h1 className="center">
        source our <strong>ACTIVE IT JOB SEEKERS</strong>
      </h1>
      {/* <span className='boder'>Hire Our Candidate</span>   */}
      <Link className="right2" to="/Home">
        Hire Our Candidate
      </Link>
    </div>
  );
};

export default Banner;
