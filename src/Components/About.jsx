import React from "react";
import "../Styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-info">
        <p className="title-about">More about me</p>
        <div className="about-desc-section">
          <p className="about-desc">
            I am Balachandregowda P, based in Bangalore, India.
          </p>
          <p className="about-desc">
            I have been learning and build projects on Full-Stack Web
            Development.
          </p>
          <p className="about-desc">
            I have designed and developed a range of full-stack applications
            using React, NodeJS, Firebase, MongoDB, SQL, etc...
          </p>
        </div>
      </div>

      <div className="image-section">
        <img
          className="self-image"
          src={`${process.env.PUBLIC_URL}/images/self.png`}
          alt="My pic"
        />
      </div>
    </div>
  );
};

export default About;
