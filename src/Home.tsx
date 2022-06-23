import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Submit from "./Submit";

const Home = () => {
  return (
    <div className="su">
      <div className="container">
        <div className="top">
          <h1>Hire Our Traineees</h1>
          <p className="height">
            Please provide your details, our HR will touch base with you.
          </p>
        </div>
        <div className="dr">
          <div className="bottom">
            <p className="sure">* Required</p>
          </div>
          {/* <label >1.Company Name </label><input type="text" placeholder='Enter The Name ' className='col-8' /> */}
          <h5 className="si">1.Company Name *</h5>
          <br />
          <input
            type="text"
            className="col-10"
            placeholder="Enter The Company Name"
          />
          <br />
          <br />
          <br />
          <h5 className="si">2.HR Name *</h5>
          <br />
          <input
            type="text"
            className="col-10"
            placeholder="Enter The Company Name"
          />
          <br />
          <br />
          <br />
          <h5 className="si">3.Email *</h5>
          <br />
          <input
            type="text"
            className="col-10"
            placeholder="Enter The Company Name"
          />
          <br />
          <br />
          <br />
          <h5 className="si">4.Contact Number *</h5>
          <br />
          <input
            type="text"
            className="col-10"
            placeholder="Enter The Company Name"
          />
          <br />
          <br />
          <br />

          {/* <button className='button'><a href="Submitted">Submit</a> */}

          <Link to="/Submit" className="button">
            {" "}
            Submit{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
