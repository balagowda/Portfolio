import React from "react";
import "../Styles/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className="contact-container">
      <p className="headline">CONTACT</p>
      <h2 className="title">Connect with Me</h2>

      <div className="connect">
        <div className="connect-icons">
          <a
            href="mailto:balagowda8787@gmail.com"
            className="link-icon"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} className="icons"/>
          </a>
          <a
            href="https://www.linkedin.com/in/balachandregowda-p-20034a224/"
            className="link-icon"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icons"/>
          </a>
          <a
            href="https://x.com/balagowda_02"
            className="link-icon"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faXTwitter} className="icons"/>
          </a>
          <a
            href="https://github.com/balagowda"
            className="link-icon"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="icons"/>
          </a>
        </div>
        <div className="rights">
        © 2024 Balachandregowda P. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Contact;
