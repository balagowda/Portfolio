import React from 'react'
import '../Styles/Project.css'
import ProjectPart from '../Components/ProjectPart';

const Project = () => {
  return (
    <div className='project-container'>
       <p className="headline1">PROJECTS</p>
       <h2 className="title">My Project Portfolio</h2>

      <ProjectPart
        title={"Amazon"}
        desc={
          "Amazon clone project using React, Redux, HTML, CSS, MongoDB, and a Node.js backend, featuring dynamic content tracking and core functionalities like product listing, user authentication, and shopping cart management."
        }
        features={[
          "User Authentication",
          "Browse Products",
          "Responsive UI",
          "State Management",
          "Add or Remove Products to Cart",
        ]}
        techStack={["react", "css","javaScript", "mongodb", "node" ]}
        liveLink={"https://rich-plum-fish-gear.cyclic.app/"}
        repoLink={"https://github.com/balagowda/Mern-Stack-web"}
      />

      <ProjectPart
        title={"YouTube"}
        desc={
          "YouTube clone project using React, Redux, HTML, and CSS, which replicates the core functionalities of YouTube, including video playback, user authentication, and dynamic content loading."
        }
        features={[
          "User Authentication",
          "Responsive UI",
          "State Management",
          "Subsribed Tab",
          "Comments"
        ]}
        techStack={["react", "html", "css","javaScript","firebase"]}
        liveLink={"https://balagowda-yt-clone.web.app/"}
        repoLink={"https://github.com/balagowda/Youtube-clone"}
      />

      <ProjectPart
        title={"Customer-Returns"}
        desc={"Automated System for Material Return from Customer."}
        features={[
          "User Authentication",
          "Delivery Status",
          "Check & Return Ordered Products",
          "Approval & Response From Manufacturer",
          "Responsive UI",
          "State Management",
        ]}
        techStack={["react", "html", "css","javaScript" , "firebase"]}
        liveLink={"https://customerreturn-97bdd.web.app/"}
        repoLink={"https://github.com/balagowda/Customer-Returns"}
      />

    </div>
  )
}

export default Project