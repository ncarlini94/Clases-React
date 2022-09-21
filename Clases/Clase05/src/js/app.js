import Button from "./components/button.js";
import Audio from "./components/audio.js";
import Form from "./components/form.js";
import Video from "./components/video.js";

let viewVideo = document.getElementById("viewVideo");
let form = document.getElementById("form");
let width = document.getElementById("wvalue")
let height = document.getElementById("hvalue")
let button = document.getElementById("button")

let myForm = new Form("Formulario", width, height, "number", "row");
let myVideo = new Video("Whiskey Blues Music | Best Of Slow Blues/Rock Songs | Relaxing Electric Guitar blues","450px", "400px", "https://www.youtube.com/embed/UP2XoGfhJ1Y", "ms-5")
let myButton = new Button("Boton","btn btn-dark ms-5 mb-2","button")


viewVideo.innerHTML += myVideo.render()
form.innerHTML += myForm.render()
button.innerHTML += myButton.render()