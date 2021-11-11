import React from "react";
import "./style.css";
import classes from "../../images/onlineCLass.jpg";
import SellingCourses from "../SellingCourses/SellingCourses";
const OnlineClass = () => {
  return (
    <div className="mb-4 mt-5">
      <div className="liveOnlineClass">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2>
                <span>Live Online </span> Courses
              </h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Sapiente aspernatur accusantium enim, quis animi est maiores
                inventore nemo deserunt. Unde ipsa quis nostrum consequatur,
                iste voluptatem?
              </p>
            </div>
            <div className="col-lg-6">
              <div className="need-position">
                <img src={classes} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ourResponse"></div>
      <div className="custom__div">
        <SellingCourses></SellingCourses>
      </div>
    </div>
  );
};

export default OnlineClass;
