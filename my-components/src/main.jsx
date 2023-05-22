import React from 'react'
import ReactDOM from 'react-dom/client'
import PrimeiroComponente from './componentes/PrimeiroComponente';
import {CompA, CompB as B} from './componentes/DoisComponentes';
import MultiElementos from './componentes/MultiElementos';
import ComponenteClasse from './componentes/ComponenteClasse';
import ComponenteComFuncao from './componentes/ComponenteComFuncao';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrimeiroComponente valor="Este é um valor dentro dos props"/>
    <div>
    <CompA valor="Olá, eu sou A!" />
    <B valor="B está na área!" />
    </div>
    <MultiElementos/> 
    <ComponenteClasse valor="Esse é o valor passado dentro do props em um Componente Classe"/>

    <ComponenteComFuncao/> 
  </React.StrictMode>
)
