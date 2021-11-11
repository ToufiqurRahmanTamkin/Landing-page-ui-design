import React from "react";
import SellingCourses from "../SellingCourses/SellingCourses";
import "./style.css";
const News = () => {
  return (
    <div className="news">
      <>
        <div className="row">
          <div className="col-lg-12 text-center">
            <h6>Upcoming Courses</h6>
            <h2>
              <span>Upcoming</span> Global Revenue <span>Courses</span>
            </h2>
          </div>
        </div>
      </>
      <SellingCourses></SellingCourses>
    </div>
  );
};

export default News;
