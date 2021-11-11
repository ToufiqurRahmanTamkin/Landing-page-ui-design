import React from "react";
import "./SellingCourses.css";
import img1 from "../../images/111.jpg";
import imgTwo from "../../images/22.jpg";
import imgThree from "../../images/33.jpg";
import imgFour from "../../images/444.jpg";
import OurCourcesDetails from "../OurCources/OurCourcesDetails/OurCourcesDetails";
import OurSellingCourseDetails from "./OurSellingCourseDetails";

const SellingCourses = () => {
  const ourSellingData = [
    {
      name: "Game Development With Java",
      sellingPoint: "Best Selling Now",
      count: 12545,
      price: 785,
      img: img1,
    },
    {
      name: "Web Development With JS",
      sellingPoint: "Best Selling Now",
      count: 12545,
      price: 785,
      img: imgTwo,
    },
    {
      name: "AI Development With Python",
      sellingPoint: "Best Selling Now",
      count: 12545,
      price: 785,
      img: imgThree,
    },
    {
      name: "Fronted Developer",
      sellingPoint: "Best Selling Now",
      count: 12545,
      price: 785,
      img: imgFour,
    },
  ];
  return (
    <div className="pb-5">
      <div className="container">
        {/* //Slider// */}

        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className="container">
                <div className="row">
                  {ourSellingData.map((ourSellingDataItems) => (
                    <OurSellingCourseDetails
                      ourSellingDataItem={ourSellingDataItems}
                    ></OurSellingCourseDetails>
                  ))}
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div className="container">
                <div className="row">
                  {ourSellingData.map((ourSellingDataItems) => (
                    <OurSellingCourseDetails
                      ourSellingDataItem={ourSellingDataItems}
                    ></OurSellingCourseDetails>
                  ))}
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div className="container">
                <div className="row">
                  {ourSellingData.map((ourSellingDataItems) => (
                    <OurSellingCourseDetails
                      ourSellingDataItem={ourSellingDataItems}
                    ></OurSellingCourseDetails>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev other-position"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next other-position-next-icon"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="view-more">
        <button>View More</button>
      </div>
    </div>
  );
};

export default SellingCourses;
