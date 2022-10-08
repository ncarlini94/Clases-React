import React from "react";

export default function Imagen(props) {

        return(
            <>
                <img src={props.src} className="ps-5" width={props.width} height={props.height} alt="img"></img>
            </>
        )
}