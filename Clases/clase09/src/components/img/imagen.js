import React , {Component} from "react";
import foto from "../../assets/img/img_dog.jpg"

export default class Imagen extends Component {

    render(){
        return(
            <>
                <img src={foto} className="ps-5" width="340px" height="360px" alt="img"></img>
            </>
        )
    }
}