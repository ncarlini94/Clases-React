import './App.css';
import Audio from "./components/audio/audio"
import Imagen from './components/img/imagen';
import Video from "./components/video/video"

function App() {
  return (
    <>
    <div className='container'>
    <div className='position-relative'>
      <Audio/>
      <Video/>
      <Imagen/>
      </div>
      </div>
    </>
  );
}

export default App;
