import {
  faCertificate,
  faFileSignature,
  faGlobe,
  faInbox,
  faStar,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import OurClassLearningDetails from "./OurClassLearningDetails";

const OurClassLearning = () => {
  const elementOne = <FontAwesomeIcon icon={faStar} />;
  const elementTwo = <FontAwesomeIcon icon={faUsers} />;
  const elementThree = <FontAwesomeIcon icon={faInbox} />;
  const elementFour = <FontAwesomeIcon icon={faGlobe} />;
  const elementFive = <FontAwesomeIcon icon={faFileSignature} />;
  const elementSix = <FontAwesomeIcon icon={faCertificate} />;
  const worldClassLearning = [
    {
      logo: elementOne,
      name: "top rated courses",
      Description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius corrupti, labore recusandae architecto voluptatum eveniet quasi!`,
      color: "#F29A49",
    },
    {
      logo: elementTwo,
      name: "Team Of Expert",
      Description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius corrupti, labore recusandae architecto voluptatum eveniet quasi!`,
      color: "#F2CA4B",
    },
    {
      logo: elementThree,
      name: "24/7 Online Support",
      Description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius corrupti, labore recusandae architecto voluptatum eveniet quasi!`,
      color: "#9C50E1",
    },
    {
      logo: elementFour,
      name: "Work Globally",
      Description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius corrupti, labore recusandae architecto voluptatum eveniet quasi!`,
      color: "#2B81EE",
    },
    {
      logo: elementFive,
      name: "100% verified Content",
      Description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius corrupti, labore recusandae architecto voluptatum eveniet quasi!`,
      color: "#22AE5F",
    },
    {
      logo: elementSix,
      name: "Certificate",
      Description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius corrupti, labore recusandae architecto voluptatum eveniet quasi!`,
      color: "#299DDC",
    },
  ];
  return (
    <div className="world___classLearning">
      <div className="container">
        <h2 className="text-center mb-5 opacity-75 pb-2">
          World Learning Features and Value
        </h2>
        <div className="row">
          {worldClassLearning.map((worldClassLearn) => (
            <OurClassLearningDetails
              worldClassLearnItems={worldClassLearn}
            ></OurClassLearningDetails>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurClassLearning;
