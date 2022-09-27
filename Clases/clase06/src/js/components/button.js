export default class Button {
    constructor(text, css_class, id) {
        this.texto = text;
        this.css_class = css_class;
        this.id = id;
    }

    render(){
    let button = `<button class="${this.css_class}" type="button" id=${this.id}>${this.texto}</button>`

    return button;
    }
};