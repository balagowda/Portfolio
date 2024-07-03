import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import GlowingCursor from "./Components/GlowingCursor";
import NavBar from "./Components/NavBar";
import Project from "./Components/Project";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="App">
      <GlowingCursor id="color-cursor"/>
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      <div className="navbar">
        <NavBar />
      </div>
      <div class="background-image"></div>

      <div id="bio">
        <div className="children">
          <div className="left">
            <div className="content-set">
              <h2>Hi 👋, I'm</h2>
              <h1>BALACHANDREGOWDA P</h1>
              <p id="spin"></p>
            </div>
          </div>
          <div className="right">
            <img src="/man1.png" alt="profile pic" id="pic" />
          </div>
        </div>

        <div className="resume">
          <a href="/resume.pdf" download="BALACHANDREGOWDA_P_Resume.pdf">
            <button className="button-res">
              Download Resume
              <img src="/arrow.png" alt="arrow" />
            </button>
          </a>
        </div>
      </div>

      <section className="skills-section">
        <Skills />
      </section>

      <section className="project-section" id="project-section">
        <Project />
      </section>

      <section className="about-section" id="about-section">
        <About />
      </section>

      <section className="contact-section" id="contact-section">
        <Contact />
      </section>
    </div>
  );
}

export default App;
