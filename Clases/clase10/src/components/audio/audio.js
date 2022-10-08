import React from "react";


export default function Audio(props) {

        return(
            <>
                <audio controls>
                    <source className='' src={props.src} type="audio/mpeg">
                    </source>
                </audio>
            </>
        )
}