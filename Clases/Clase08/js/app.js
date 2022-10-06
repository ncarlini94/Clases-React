'use strict'; //
import Button from "./components/Button.js";
import Video from "./components/Video.js";

const ReactElement = React.createElement;


const domContainer = document.getElementById("myApp");
ReactDOM.render([ReactElement(Button), ReactElement(Video)] , domContainer);