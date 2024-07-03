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
            Tech Enthusiast who loves creating
            dynamic and user-friendly applications. I have experience with Java
            and JavaScript, and I enjoy turning ideas into smooth,
            enjoyable digital experiences. I've worked on various projects,
            including e-commerce platforms and open-source contributions. I’m
            always eager to solve problems and learn new technologies. Take a
            look at my work and see how I bring creativity and functionality
            together.
          </p>
        </div>
      </div>

      <div className="image-section">
        <img
          className="self-image"
          src={`/man.png`}
          alt="My pic"
        />
      </div>
    </div>
  );
};

export default About;
