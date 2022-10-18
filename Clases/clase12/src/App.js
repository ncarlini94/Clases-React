import './App.css';
import React, { useState } from 'react';
import Img1 from "./assets/img/img1.jpg";
import Img2 from "./assets/img/img2.jpg";
import Img3 from "./assets/img/img3.jpg";
import Img4 from "./assets/img/img4.jpg";
import Img5 from "./assets/img/img5.jpg";

function App() {

  const Img = [
    {id : 1,
    imagen : Img1},
    {id : 2,
      imagen : Img2},
    {id : 3,
      imagen : Img3},
    {id : 4,
      imagen : Img4},
    {id : 5,
      imagen : Img5}
  ]

  const [count, setCount] = useState(0);

  console.log(count)

  return (
    <div className="App bg-secondary">
    <div className="container-flex">

    <div>
    <h2 className="fw-bold pt-3">Map</h2>
      {
        Img.map((e)=>{
          return(
          <img key={e.id} src={e.imagen} className="p-3" width="500px" alt="img"></img>
        )
        })
      }
    <h2 className="fw-bold">Filter</h2>
      </div>
            <button className='btn btn-primary m-2' onClick={()=> setCount(count +1)}>+</button>
            <button className='btn btn-primary m-2' onClick={()=> setCount(count -1)}>-</button>
      <div>
      {
        Img.filter(value => value.id <= count).map((e)=>{
          return(
          <img key={e.id} src={e.imagen} className="p-3" width="250px" alt="img"></img>
        )
        })
      }
      </div>


      </div>
    </div>
  );
}

export default App;
