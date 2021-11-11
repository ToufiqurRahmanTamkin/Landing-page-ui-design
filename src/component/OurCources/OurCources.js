import React from "react";
import "./Cources.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faCoffee,
  faUserGraduate,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import OurCourcesDetails from "./OurCourcesDetails/OurCourcesDetails";
const OurCourse = () => {
  const elementOne = <FontAwesomeIcon icon={faUserGraduate} />;
  const elementTwo = <FontAwesomeIcon icon={faBook} />;
  const elementThree = <FontAwesomeIcon icon={faVideo} />;

  const coursesData = [
    {
      name: "Tought by Industry Experts",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
      vel voluptas nesciunt consequatur fugit iusto, omnis
      exercitationem `,
      icon: elementOne,
    },
    {
      name: "Tought by Industry Experts",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
      vel voluptas nesciunt consequatur fugit iusto, omnis
      exercitationem `,
      icon: elementTwo,
    },
    {
      name: "Flexible & Affordable",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
      vel voluptas nesciunt consequatur fugit iusto, omnis
      exercitationem `,
      icon: elementThree,
    },
  ];

  return (
    <div className="Course">
      <div className="container px-4">
        <div className="row">
          <div className="col-lg-12">
            <div className="about_our_courses">
              <h6>Over 12345+ Courses</h6>
              <h1>Why You Are Here ? </h1>
            </div>
          </div>
          <div className="row px-5 ">
            {coursesData.map((courses) => (
              <OurCourcesDetails course={courses}></OurCourcesDetails>
            ))}
          </div>
        </div>
      </div>

      <div className="our-Selling-course">
        <h1>
          <span className="custom___color"> Best </span>
          Selling Courses
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
          reprehenderit blanditiis quia odit perspiciati.
        </p>
      </div>
    </div>
  );
};

export default OurCourse;
