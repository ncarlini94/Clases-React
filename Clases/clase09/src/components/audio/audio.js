import React , {Component} from "react";
import Melodia from "../../assets/audio/Melodia.mp3"

export default class Audio extends Component {

    render(){
        return(
            <>
                <audio controls>
                    <source className='' src={Melodia} type="audio/mpeg">
                    </source>
                </audio>
            </>
        )
    }
}