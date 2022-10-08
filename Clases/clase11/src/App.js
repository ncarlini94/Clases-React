import './App.css';
import Img1 from "./assets/img/img1.jpg";
import Img2 from "./assets/img/img2.jpg";
import Img3 from "./assets/img/img3.jpg";
import Img4 from "./assets/img/img4.jpg";
import Img5 from "./assets/img/img5.jpg";

function App() {

  const Img = [
    {imagen : Img1},
    {imagen : Img2},
    {imagen : Img3},
    {imagen : Img4},
    {imagen : Img5}
  ]
  return (
    <div className="App bg-secondary">
    <div className="container-flex">

    <div>
    <h2 className="fw-bold">Map</h2>
      {
        Img.map((e)=>{
          return(
          <img src={e.imagen} className="p-3" width="500px" alt="img"></img>
        )
        })
      }
      </div>

      <div>
    <h2 className="fw-bold">Filter</h2>
      {
        Img.filter(e=> e.length > 6).map((e)=>{
          console.log(e)
          return(
          <img src={e.imagen} className="p-3" width="500px" alt="img"></img>
        )
        })
      }
      </div>


      </div>
    </div>
  );
}

export default App;
