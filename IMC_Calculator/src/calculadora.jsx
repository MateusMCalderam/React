import React, { useState } from "react";

const index = () => {
    const [peso,SetPeso] = useState()
    const [altura,SetAltura] = useState()
    const [result,SetResult] = useState(0)

    function CalcIMC(){
        const imc = peso / (altura*altura)
        SetResult(imc.toFixed(1))
    }

    return(
        <div>
            <h1>Calculadora de IMC</h1> <br />
            <input 
            type="number"
            placeholder="PESO (Kg)"
            onChange={(e) => SetPeso(+e.target.value)}
            />

            <input 
            type="number"
            placeholder="ALTURA (M)" 
            onChange={(e) => SetAltura(+e.target.value)}/>
            <br/> 

            <button onClick={CalcIMC}>CALCULAR</button> 
            <br />
            <h1>{result}</h1>
        </div>
    )

}
export default index;
