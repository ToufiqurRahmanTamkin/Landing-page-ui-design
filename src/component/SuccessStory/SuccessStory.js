import React from "react";
import "./SuccessStory.css";

const SuccessStory = () => {
  return (
    <div className="successStrory">
      <div className="row">
        <div className="col-lg-6 px-5">
          <div className="container">
            <div className="row">
              <div className="successStoryCaption">
                <h1>
                  Get Inspire by <br />
                  Our Success Stories
                </h1>{" "}
                <div className="success">
                  <span>
                    <i class="fas fa-quote-left"></i>
                  </span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error, voluptate, nulla, dolore magnam id deleniti quisquam
                    porro et reprehenderit facere non! Blanditiis voluptatem est
                    necessitatibus eligendi. Repellat, nostrum magnam! Iusto.
                  </p>

                  <h6>Zaidul Islam</h6>
                  <small>Designer Of Evenytheme</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="successStory"></div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;
