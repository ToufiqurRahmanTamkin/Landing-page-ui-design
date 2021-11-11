import React from "react";
import "./OurFocus.css";

const OurFocusDetails = (props) => {
  const { name, p, logo, color } = props.focusItem;
  return (
    <div className="col-lg-4 text-center mt-4">
      <div className="courses__Focus__rules">
        <span style={{ background: `${color}` }}>{logo}</span>
        <h3>{name}</h3>
        <p>{p}</p>
      </div>
    </div>
  );
};

export default OurFocusDetails;
