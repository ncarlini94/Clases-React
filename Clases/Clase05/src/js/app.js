import Button from "./components/button.js";
import Audio from "./components/audio.js";
import Form from "./components/form.js";
import Video from "./components/video.js";
import List from "./components/list.js";

let viewVideo = document.getElementById("viewVideo");
let list = document.getElementById("list");
let button = document.getElementById("button")
let form = document.getElementById("form")

let myForm = new Form("form","");
let myList = new List();
let myVideo = new Video("Whiskey Blues Music | Best Of Slow Blues/Rock Songs | Relaxing Electric Guitar blues","450px", "400px", "https://www.youtube.com/embed/UP2XoGfhJ1Y", "ms-5")
let myButton = new Button("Boton","btn btn-dark ms-5 mb-2","button")


form.innerHTML += myForm.render()
viewVideo.innerHTML += myVideo.render()
list.innerHTML += myList.render()
button.innerHTML += myButton.render()