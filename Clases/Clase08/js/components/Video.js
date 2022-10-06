'use strict'; //


const ReactElement = React.createElement;

export default class Video extends React.Component {

    render(){
        return ReactElement(
            'iframe',
            {src:'https://www.youtube.com/embed/UP2XoGfhJ1Y', class:'Video'},
        )
    }
}