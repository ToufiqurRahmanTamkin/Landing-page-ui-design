import React from "react";
import "./Subscribe.css";
const Subscribe = () => {
  return (
    <div>
      <div className="subscribe">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="subscribe__title">
                <h1>
                  Subscribe To Our <br />
                  Newsletter To Get Daily <br />
                  Content !
                </h1>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="subscribe___our_site">
                <form action="">
                  <div className="need-flex">
                    <input
                      type="email"
                      name=""
                      id=""
                      placeholder="Enter your email"
                    />
                    <button type="submit">
                      <i class="far fa-paper-plane"></i>
                    </button>
                  </div>
                  <div className="term-and-condition">
                    <input type="checkbox" name="" id="" />
                    <span>
                      I agree with this term and condition of this company
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="start___learning_today">
        <h1>Start Learning Today !</h1>
        <p>If you need problem please contact our support team 018888888641</p>
      </div>
    </div>
  );
};

export default Subscribe;
