import React, { useState } from "react";

function Contador() {
    const [contador,Setcontador] = useState(0)
    
    function Adicionar() {
        Setcontador(contador+1)
    }
    function Reduzir() {
        Setcontador(contador-1)
    }
    function Reset() {
        Setcontador(0)
    }

    return(
        <div>
            <h1>{contador}</h1>
            <button onClick={Adicionar}>Adicionar</button>
            <button onClick={Reduzir}>Reduzir</button>
            <button onClick={Reset}>Resetar</button>
        </div>
    )
}
export default Contador