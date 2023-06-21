import { useState } from 'react'

function Form(){

  function cadastrarUsuario(e){
    e.preventDefault()
    console.log(`O usuário: ${name} foi cadastrado com a senha: ${password}.`)        
    alert('Usuário cadastrado.')
  }

  const[name, setName] = useState()
  const[password, setPassword] = useState()

  return(
    <>
      <h2>Meu Cadastro</h2>  
      <form onSubmit={cadastrarUsuario}>  
        <div>
          <label htmlFor="name">Nome: </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite o seu nome"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="senha">Senha: </label>
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Digite a sua senha"
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>

        <input type="submit" value="Cadastrar"/>        
      </form>
    </>
  )
}

export default Form