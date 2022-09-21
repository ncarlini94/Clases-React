import Button from "./button.js";

export default class Form {
    constructor(title, width, height, type, css_class) {
        this.title = title;
        this.width = width;
        this.height = height;
        this.type = type;
        this.css_class = css_class;
    }

    render(){
        let form = `
        <div class="ms-2 mb-4">
        <form class=${this.css_class}>
        <div class="col">
        <label for="fname">Width:</label><br>
        <input type=${this.type} id="wvalue" name="width">
        </div>
        <div class="col">
        <label for="lname">Height:</label><br>
        <input type=${this.type} id="hvalue" name="height">
        </div>
        <div class="col mt-2">
        <input class="btn btn-primary mt-2" type="submit" onclik="" id="submit" name="submit">
        </div>
        </form>
        </div>
</form>
        `
        return form;
    }

    submit(){
        let submit = document.getElementById(submit)
    }
};