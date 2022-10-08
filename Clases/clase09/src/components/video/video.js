import React , {Component} from "react";
import Movie from "../../assets/video/video_ciudad.mp4"

export default class Video extends Component {

    render(){
        return(
            <>
                <video className="mt-5" src={Movie} autoplay controls width="800px" >
                Tu navegador no admite el elemento <code>video</code>.
                </video>
            </>
        )
    }
}