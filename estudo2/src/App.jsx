import React, { useState } from 'react'
import './App.css'
{/*import Pessoa from './componentes/componente1'
import SayMyName from './componentes/SayMyName'
import List from './componentes/list'
import Eventos from './componentes/eventos'
import Form from './componentes/form'
import Buttun from './componentes/button'
import Condicional from './componentes2/Condicionais'
import OutrasListas from './componentes/OutraLista'
import SeuNome from './componentes/SeuNome'
import Saudacao from './componentes/Saudacao'*/}

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Empresa from './pages/empresa'
import Contato from './pages/contato'

function App() {

  //const meusItens = ['React','Vue','Angular']
 //const [nome,setNome] = useState()

  return (
    <div>
      <>{
      /*<h1>Olá Mundo</h1>
      <SayMyName nome="Mateus"/>
      <Pessoa 
      nome="Mateus" 
      idade="15"
      profissão="Estudante"/>
      <List />
      <h1>Testando Eventos</h1>
      <Eventos/>
      <Form />
      <Condicional /
      <OutrasListas itens={meusItens}/>
      <OutrasListas itens={[]}/>
      */
      }</>
      <h1>Router</h1>
        <Router>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/empresa">Empresa</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
          </ul>
          <Routes>
            <Route exact path="/" element={<Home />}> </Route>
            <Route exact path="/contato" element={<Contato />}> </Route>
            <Route exact path="/empresa" element={<Empresa />}> </Route>
            {/* </Route>
            <Route  path="/empresa">
              <Empresa />
            </Route>
            <Route  path="/contato">
              <Contato />
            </Route> */}
          </Routes>
        </Router>
      </div>
  )
}

export default App
