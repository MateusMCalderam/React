import React from 'react'
import './App.css'
{/*import Pessoa from './componentes/componente1'
import SayMyName from './componentes/SayMyName'
import List from './componentes/list'*/}
import Eventos from './componentes/eventos'
import Form from './componentes/form'
import Buttun from './componentes/button'
import Condicional from './componentes2/Condicionais'

function App() {
  return (
    <div>
      {/*<h1>Olá Mundo</h1>
      <SayMyName nome="Mateus"/>
      <Pessoa 
      nome="Mateus" 
      idade="15"
      profissão="Estudante"/>
      <List />
      <h1>Testando Eventos</h1>
      <Eventos/>
      <Form />*/}
      <h1>Renderizando Condicional</h1>
      <Condicional />
      </div>
  )
}

export default App
