import "./App.css";
import GlowingCursor from './GlowingCursor';

function App() {
  return (
    <div className="App">
      <GlowingCursor />
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
      </div>

    </div>
  );
}

export default App;
