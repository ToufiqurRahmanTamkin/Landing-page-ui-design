import React from "react";
import "./TruePotential.css";

const TruePotential = () => {
  return (
    <div className="true-potential">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1>
              Explore Your <br />
              <span>True Potential</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
              quod explicabo! Laudantium quae neque blanditiis? Qui dolore
              deserunt eveniet error ratione repellat perferendis a neque quam!
              Qui soluta deserunt vel.
            </p>
            <button className="potential">Start Learning From Tomorrow</button>
          </div>
          <div className="col-lg-6">
            <div className="team-photo">
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className="modal-btn"
              >
                <i class="far fa-play-circle"></i>
              </button>

              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/IMxDeACOWCE"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                    <div class="modal-footer"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TruePotential;
