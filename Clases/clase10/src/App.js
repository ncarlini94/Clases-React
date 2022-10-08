import logo from './logo.svg';
import './App.css';
import Audio from "./components/audio/audio";
import Imagen from './components/img/imagen';
import Video from "./components/video/video";
import Melodia from "./assets/audio/Melodia.mp3"
import foto from "./assets/img/img_dog.jpg"
import Movie from "./assets/video/video_ciudad.mp4"


function App() {
  return (
    <div className="App bg-secondary">
        <div className='container d-flex flex-column'>
        <img src={logo} className="App-logo" alt="logo" />
        <Audio className="" src={Melodia}/>
        <Video className="" src={Movie} width={800}/>
        <Imagen className="" src={foto} width={360} heigth={340}/>
        </div>
    </div>
  );
}

export default App;
