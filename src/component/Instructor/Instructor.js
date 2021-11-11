import React from "react";
import "./Instructor.css";
import instructor from "../../images/png.png";
const Instructor = () => {
  return (
    <div className="instructor">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img src={instructor} alt="" />
          </div>
          <div className="col-lg-6 mt-5 pt-5">
            <h2>
              Become <span>A Instructor</span>
            </h2>
            <h6>
              The Best Way To Learn is too tech : Lorem ipsum dolor sit amet,
              consectetur adipisicing.
            </h6>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, a
              vero? Consequatur alias nemo inventore magni laudantium expedita
              ad, ratione.
            </p>
            <button>Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
