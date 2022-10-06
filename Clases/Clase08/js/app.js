'use strict'; //
import Video from "./js/Video";
import Button from "./js/Button";

const ReactElement = React.createElement;

const domContainer = document.getElementById("myApp");
ReactDOM.render([ReactElement(Button), ReactElement(Video)] , domContainer);