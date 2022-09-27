export default class Video {
    constructor(title, width, height, url, css_class) {
        this.title = title;
        this.width = width;
        this.height = height;
        this.url = url;
        this.css_class = css_class;
    }

    render(){

        let myVideo = `<iframe class=${this.css_class} width=${this.width} height=${this.height} src="https://www.youtube.com/embed/UP2XoGfhJ1Y" title=${this.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

        return myVideo;
    }
};

