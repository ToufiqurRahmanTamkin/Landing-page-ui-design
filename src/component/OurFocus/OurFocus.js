import {
  faLaptop,
  faLightbulb,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./OurFocus.css";
import OurFocusDetails from "./OurFocusDetails";
const OurFocus = () => {
  const elementOne = <FontAwesomeIcon icon={faLaptop} />;
  const elementTwo = <FontAwesomeIcon icon={faLightbulb} />;
  const elementThree = <FontAwesomeIcon icon={faNewspaper} />;

  const onFocus = [
    {
      name: "Technical SKill",
      p: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          accusamus quisquam neque vel quia saepe commodi accusantium. Atque,
          consequuntur? Laborum quisquam non est voluptatibus eveniet ipsa, vero
          voluptas perferendis minima.`,
      logo: elementOne,
      color: "#F29A49",
    },
    {
      name: "Creative Skills",
      p: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          accusamus quisquam neque vel quia saepe commodi accusantium. Atque,
          consequuntur? Laborum quisquam non est voluptatibus eveniet ipsa, vero
          voluptas perferendis minima.`,
      logo: elementTwo,
      color: "#22B060",
    },
    {
      name: "Practical Experience",
      p: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          accusamus quisquam neque vel quia saepe commodi accusantium. Atque,
          consequuntur? Laborum quisquam non est voluptatibus eveniet ipsa, vero
          voluptas perferendis minima.`,
      logo: elementThree,
      color: "#F29A49",
    },
  ];
  return (
    <div className="our__focus">
      <div className="container text-center">
        <h2>
          Our <span>Focus On You</span>
        </h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          accusamus quisquam neque vel quia saepe commodi accusantium. Atque,
          consequuntur? Laborum quisquam non est voluptatibus eveniet ipsa, vero
          voluptas perferendis minima.
        </p>
      </div>
      <div className="container">
        <div className="row">
          {onFocus.map((focus) => (
            <OurFocusDetails focusItem={focus}></OurFocusDetails>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurFocus;
