import './App.css';

function App() {
  const name = 'Luã'
  const newName = name.toUpperCase()

  function som(a, b){
    return a+b
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <h1>Olá Mundo! </h1>
      <p>Meu primeiro app. </p>
      <h2>Alterando o JSX </h2>
      <p>Olá, {name}! </p>
      <p>Seu nome em letras maiúsculas: {newName}. </p>
      <p>Soma: {som(1, 3)} </p>
      <img src={url} alt='minha imagem' />
    </div>
  );
}

export default App;
