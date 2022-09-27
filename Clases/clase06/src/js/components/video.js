import react, {Component} from "react";

export default class Video extends Component {

    render(){

        let myVideo = <iframe className="ms-5" width="450px" height="400px" src="https://www.youtube.com/embed/UP2XoGfhJ1Y" title="Whiskey Blues Music | Best Of Slow Blues/Rock Songs | Relaxing Electric Guitar blues"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>

        return myVideo;
    }
};

