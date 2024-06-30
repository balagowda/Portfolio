import "./App.css";
import GlowingCursor from "./Components/GlowingCursor";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      {/* <GlowingCursor /> */}
      <div class="area">
        <ul class="circles">
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
        <NavBar/>
      </div>
    
      <div id="bio">
        <div class="left">
          <div class="content-set">
            <h2>Hi 👋, I'm</h2>
            <h1>BALACHANDREGOWDA P</h1>
            <p id="spin"></p>

          </div>
        </div>
        <div class="right">
          <img src="/man1.png" alt="profile pic" id="pic" />
        </div>

        <div className="resume">
          <a href="/resume.pdf" download="BALACHANDREGOWDA_P_Resume.pdf">
            <button>Download Resume
              <img src="/arrow.png" alt="arrow" />
            </button>
          </a>
        </div>

      </div>

    </div>
  );
}

export default App;
