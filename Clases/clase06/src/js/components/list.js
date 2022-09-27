import Button from "./button.js";
import Input from "./input.js";
export default class List {
    constructor() {
        this.myList = [];
    }

    render(){

        let myList = "<ul>";

        for (let i = 0; i <= this.myList.length; i++) {

            myList += "<li>";

            let myButton = new Button("Boton","btn btn-dark ms-5 mb-2","boton");

            myList += myButton.render();

            myList += "</li>";

        }





        myList += "</ul>";

        return myList;

    }
};