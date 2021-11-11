import React from "react";
import "./Slider.css";
import bannerImg from "../../images/1212-removebg-preview.png";
import bannerImgTwo from "../../images/jjjjjjjjjjjjjjjjjjjjjjjjjjjj-removebg-preview.png";
const Slider = () => {
  return (
    <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active slider_main_bg ">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="about_site_caption">
                    <h1>
                      Where <span className="bold_text">Dreams</span> Become{" "}
                      <br />
                      <span className="bold_text">Doer</span> And
                      <span className="bold_text"> Earner</span>
                    </h1>

                    <h6>Learn A Skill ; The World is Yours</h6>
                    <button>Start Learning </button>
                    <h6
                      style={{
                        position: "relative",
                        top: "14px",
                        margin: "0px 10px ",
                      }}
                    >
                      Become A Instructor
                    </h6>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="banner___img">
                    <img src={bannerImg} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item slider_main_bg">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="about_site_caption">
                    <h1>
                      Where <span className="bold_text">Dreams</span> Become{" "}
                      <br />
                      <span className="bold_text">Doer</span> And
                      <span className="bold_text"> Earner</span>
                    </h1>

                    <h6>Learn A Skill ; The World is Yours</h6>
                    <button>Start Learning </button>
                    <h6
                      style={{
                        position: "relative",
                        top: "14px",
                        margin: "0px 10px ",
                      }}
                    >
                      Become A Instructor
                    </h6>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="banner___img">
                    <img src={bannerImgTwo} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item slider_main_bg">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="about_site_caption">
                    <h1>
                      Where <span className="bold_text">Dreams</span> Become{" "}
                      <br />
                      <span className="bold_text">Doer</span> And
                      <span className="bold_text"> Earner</span>
                    </h1>

                    <h6>Learn A Skill ; The World is Yours</h6>
                    <button>Start Learning </button>
                    <h6
                      style={{
                        position: "relative",
                        top: "14px",
                        margin: "0px 10px ",
                      }}
                    >
                      Become A Instructor
                    </h6>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="banner___img">
                    <img src={bannerImg} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev display-showing"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next display-showing"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
