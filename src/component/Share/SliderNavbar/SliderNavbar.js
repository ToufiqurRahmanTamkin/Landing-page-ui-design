import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./SliderNavbar";
///navbar slider
const SliderNavbar = () => {
  // navbar__slider___setting
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="ui_navbar">
          <ul>
            <li>
              {" "}
              <a href="/">Accounting</a>
            </li>
            <li>
              {" "}
              <a href="/">Web Design</a>
            </li>
            <li>
              {" "}
              <a href="/">Web Development</a>
            </li>
            <li>
              {" "}
              <a href="/">Best Selling Count</a>
            </li>
            <li>
              {" "}
              <a href="/">Digital Marketing</a>
            </li>
            <li>
              {" "}
              <a href="/">Freelancing</a>
            </li>
            <li>
              {" "}
              <a href="/">Graphics Design</a>
            </li>
            <li>
              {" "}
              <a href="/">SEO Marketing</a>
            </li>
            <li>
              <a href="">Photo Shop</a>
            </li>
            <li>
              <a href="">E booking</a>
            </li>
          </ul>
        </div>
        {/* // */}
        <div className="ui_navbar ">
          <ul>
            <li>
              {" "}
              <a href="/">Graphics Design</a>
            </li>
            <li>
              {" "}
              <a href="/">SEO Marketing</a>
            </li>
            <li>
              <a href="">Photo Shop</a>
            </li>
            <li>
              <a href="">E booking</a>
            </li>
            <li>
              {" "}
              <a href="/">Accounting</a>
            </li>
            <li>
              {" "}
              <a href="/">Web Design</a>
            </li>
            <li>
              {" "}
              <a href="/">Web Development</a>
            </li>
            <li>
              {" "}
              <a href="/">Best Selling Count</a>
            </li>
            <li>
              {" "}
              <a href="/">Digital Marketing</a>
            </li>
            <li>
              {" "}
              <a href="/">Freelancing</a>
            </li>
          </ul>
        </div>
      </Slider>
    </div>
  );
};

export default SliderNavbar;
