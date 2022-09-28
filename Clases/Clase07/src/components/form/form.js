import React, {Component} from "react";
import Input from "../input/input";
import "./form.css"

export default class Form extends Component {
    render(){
        return(
            <div>
            <form className="Form">
            <Input/>
            </form>
            </div>
        )
    }
}