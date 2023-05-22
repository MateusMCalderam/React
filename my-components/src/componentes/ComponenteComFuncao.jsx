import React from 'react';


export default props => {
const title = 'A lista abaixo tem uma função dentro de um componente'
const aprovados = ['Maria', 'Ana', 'João', 'Roberto'];

const gerarItens = itens => {
return itens.map(item => <li>{item}</li>);
}
return(
[
<h1>{title}</h1>,
<ul>
{gerarItens(aprovados)}
</ul>
]
)
}