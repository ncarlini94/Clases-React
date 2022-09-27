export default class Input {
    constructor(type,value, text){
        this.type = type;
        this.value = value;
        this.text = text;
    }

    render(){
        let input = `<input type=${this.type} value=${this.value}>${this.text}</input>`

        return input;
    }
}