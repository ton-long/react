import './App.css';
import { useState } from 'react';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';
import Condicional from './components/Condicional';
import OutraLista from './components/OutraLista';
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao';
//React Router
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Empresa from './Pages/Empresa';
import Contato from './Pages/Contato';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';

function App() {

  //Entendendo o JSX

  const name = 'Luã'
  const newName = name.toUpperCase()

  function som(a, b){
    return a+b
  }

  const url = 'https://via.placeholder.com/150'
  const nome2 = 'Yan'

  const meusItens = ['React', 'Vue', 'Angular']
  //State Lift
  const [nome, setNome] = useState()

  return (
    <div className="App">
      <h1>Olá Mundo! </h1>
      <p>Meu primeiro app. </p>
      <h2>Alterando o JSX </h2>
      <p>Olá, {name}! </p>
      <p>Seu nome em letras maiúsculas: {newName}. </p>
      <p>Soma: {som(1, 3)} </p>
      <img src={url} alt='minha imagem' />   

      {/*Trabalhando com componentes*/}

      <HelloWorld/>  

      {/*Props*/}

      <h1>Trabalhando com Props</h1>
      <SayMyName nome='Luã'/>
      <SayMyName nome='Lucas'/>
      <SayMyName nome={nome2}/>

      <Pessoa
        nome='Mateus'
        idade='31'
        profissao='Programador'
        foto='https://via.placeholder.com/100'
      />

      {/*React Fragments*/}

      <List/>

      {/*Eventos no React*/}

      <h1>Testando Eventos</h1>      
      <Evento numero= '2'/>
      <Form/>

      <h1>Renderização Condicional</h1>
      <Condicional/>

      <h1>Renderização de Listas</h1>
      <OutraLista itens={meusItens}/>
      <OutraLista itens={[]}/>

      <h1>State Lift</h1>
      <SeuNome setNome={setNome} />
      <Saudacao nome={nome}/>
      
      <h1>React Router exemplo:</h1>
      <Router> 
        <NavBar/>           
        <Routes>
            <Route exact path="/" element={ <Home/> } />
            <Route path="/empresa" element={ <Empresa/> } />
            <Route path="/contato" element={ <Contato/>} />            
        </Routes> 
        <Footer/>       
      </Router>
    </div> 
  );  
}

export default App;