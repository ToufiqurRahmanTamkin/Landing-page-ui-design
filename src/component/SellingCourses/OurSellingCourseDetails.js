import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const OurSellingCourseDetails = (props) => {
  const { name, sellingPoint, count, price, img } = props.ourSellingDataItem;
  return (
    <div className="col-lg-3">
      <div className="user-selling-card">
        <div className="selling-card-img">
          <img src={img} alt="" />
        </div>
        <div className="selling-card-text">
          <h3>{name}</h3>
          <p>{sellingPoint}</p>
          <div className="flex-item">
            <div className="star">
              <span>
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span>
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span>
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span>
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span className="opacity-50">
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span className="reviews">(10200) reviews</span>
            </div>
          </div>
          <p className="mt-1">${price}</p>
          <div className="add-to-card">
            <button>Add To Card</button>
            <span>
              <FontAwesomeIcon icon={faHeart} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSellingCourseDetails;
