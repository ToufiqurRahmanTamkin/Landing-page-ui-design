import React from "react";
import './OurClassLearning.css'
const OurClassLearningDetails = (props) => {
  const { logo, name, Description, color } = props.worldClassLearnItems;
  return (
    <div className="col-lg-4 text-center">
      <div className="ourClassLearning">
        <span style={{ background: `${color}` }}>{logo}</span>
        <h4>{name}</h4>
        <p>{Description}</p>
      </div>
    </div>
  );
};

export default OurClassLearningDetails;
