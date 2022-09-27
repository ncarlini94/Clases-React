import './App.css';
import Button from "../src/js/components/button";
import Video from "../src/js/components/video.js";

function App() {

//let myForm = new Form("form","");
//let myList = new List();
//let myVideo = new Video("Whiskey Blues Music | Best Of Slow Blues/Rock Songs | Relaxing Electric Guitar blues","450px", "400px", "https://www.youtube.com/embed/UP2XoGfhJ1Y", "ms-5")



  return (
    <div className="App">
      <header className="App-header">
      <Button/>
      <h3>Clase 06</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <Video/>
      </header>
    </div>
  );
}

export default App;
