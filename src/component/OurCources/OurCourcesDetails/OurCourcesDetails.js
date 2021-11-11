import React from "react";

const OurCourcesDetails = (props) => {
  const { name, description, icon } = props.course || {};
  return (
    <>
      <div className="col-lg-4 my-5">
        <div className="course-card">
          <div className="logo">
            <p>{icon}</p>
          </div>
          <h3>{name}</h3>
          <p className="description">{description}</p>
        </div>
      </div>
    </>
  );
};

export default OurCourcesDetails;
