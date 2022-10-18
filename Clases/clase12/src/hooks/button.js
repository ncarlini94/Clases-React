import React, { useState } from 'react';

export default function Button() {

    const [count, setCount] = useState(0);

    return(
        <>
        <div>
            <h4>Cantidad de imagenes {count}</h4>
            <button onClick={()=> setCount(count +1)}>+</button>
            <button onClick={()=> setCount(count -1)}>-</button>
        </div>
        </>
    )
}