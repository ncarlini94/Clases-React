import React, {Component} from "react";
import Button from "../button/button"
import "./input.css"

export default class Input extends Component {
    render(){
        return(
            <div>
            <input id="user" placeholder="Usuario" type="text" maxLength="5"></input>
            <input id="password" placeholder="Password" type="password"></input>
            <Button/>
            </div>
        )
    }
}