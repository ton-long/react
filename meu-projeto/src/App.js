import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';

function App() {

  //Entendendo o JSX

  const name = 'Luã'
  const newName = name.toUpperCase()

  function som(a, b){
    return a+b
  }

  const url = 'https://via.placeholder.com/150'
  const nome = 'Yan'
  
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
      <SayMyName nome={nome}/>

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
    </div> 
  );  
}

export default App;
