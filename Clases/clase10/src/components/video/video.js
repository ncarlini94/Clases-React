import React from "react";

export default function Video(props) {

        return(
            <>
                <video className="mt-5" src={props.src} autoplay controls width={props.width} >
                Tu navegador no admite el elemento <code>video</code>.
                </video>
            </>
        )
}