import React, { useState } from 'react';

export default function ContadorHooks (props) {
    const [contador, setContador] = useState(0);

    const sumar = () => setContador (contador+1);
    const restar = () => setContador (contador-1)

    


    return(
        <>
        <h2>Hooks - useState</h2>
        <h3>{props.titulo}</h3>
        <nav>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
        </nav>
        <h3>{contador}</h3>
        </>
    )

}

ContadorHooks.defaultProps = {
    titulo: "contador de clicks",

}
