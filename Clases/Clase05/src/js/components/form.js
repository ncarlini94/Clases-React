import Button from "./button.js";
import Input from "./input.js";

export default class Form {
    constructor(element, css_class) {
        this.element = element;
        this.css_class = css_class;
    }

    render(){

        let myForm = `<form>`


        for (let i = 0; i < this.element.length; i++) {
            if (i <= 2) {
                let input = new Input("text","",`Item`)

                myForm += input.render()

                console.log(myForm)
            }

        }

        let myButton = new Button("Enviar","btn btn-dark ms-5 mb-2","boton");

        myForm += myButton.render();

        myForm += `</form>`



        return myForm;
    }
};