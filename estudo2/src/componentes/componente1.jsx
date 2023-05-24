import React from 'react';
import { useState } from 'react';

function CalcIMC(){
    const [peso,Setpeso] = useState(0)
    const [altura,Setaltura] = useState(0)
    const [result,Setresult] = useState(0)

    const calculoIMC = () => {
    const imc= peso/(altura*altura)
    const formatedimc = imc.toFixed(1)
    Setresult(+formatedimc)
    }

    return(
        <div>
            <input 
            type="number" 
            placeholder="PESO (KG)" 
            onChange={(e) => Setpeso(+e.target.value)} 
            value={peso} />

            <input 
            type="number"
            placeholder="ALTURA (M)" 
            onChange={(e) => Setaltura(+e.target.value)} 
            value={altura} />
            
            <button onClick={calculoIMC}>Calcular</button>
            <h1>{result}</h1>
        </div>
    )
}
export default CalcIMC