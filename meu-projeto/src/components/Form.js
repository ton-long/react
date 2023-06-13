function Form(){

    function cadastrarUsuario(e){
        e.preventDefault()
        alert('Usuário cadastrado.')
    }

    return(
      <>
        <h2>Meu Cadastro</h2>  
        <form onSubmit={cadastrarUsuario}>        
            <input type="text" placeholder="Digite o seu nome"/>      
            <input type="submit" value="Cadastrar"/>        
        </form>
      </>
    )
}

export default Form