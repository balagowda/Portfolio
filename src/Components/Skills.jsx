import React from "react";
import "../Styles/Skills.css";
import "react-multi-carousel/lib/styles.css";

const Skills = () => {
  const image = [
    "java",
    "react",
    "html",
    "css",
    "javaScript",
    "git",
    "sql",
    "mongodb",
    "node",
    "firebase",
  ];

  return (
    <div className="skills-container">
      <p className="headline">SKILLS</p>
      <h2 className="title">My Technical Knowledge Base Includes</h2>
      <div className="technologies">
        <div className="image-holder">
          {image.map((val, id) => (
            <div className="image-container" key={id}>
              <img src={`/${val}.png`} alt={val} className="image" />
              <p className="value">{val}</p>
            </div>
          ))}
          {image.map((val, id) => (
            <div className="image-container" key={id} id="image-response">
              <img src={`/${val}.png`} alt={val} className="image" />
              <p className="value">{val}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
