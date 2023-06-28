import { useState } from "react"

function Condicional(){
    
    const [email, setEmail] = useState()
    const [userEmail, setuserEmail] = useState()
    
    function enviarEmail(e){
        e.preventDefault()
        setuserEmail(email)
    }
    function limparEmail(){
        setuserEmail('')
    }

    return(
        <>
            <h2>Cadastre se email:</h2>
            <form>
                <input type="email" placeholder="Digite seu email..." onChange={(e)=> setEmail(e.target.value)}></input>
                <button type="submit" onClick={enviarEmail}>Enviar</button>
                {userEmail &&(
                    <div>
                        <p>O email do usuário é: {userEmail}</p>
                        <button onClick={limparEmail}>limpar</button>
                    </div>
                )}                
            </form>       
        </>
    )
}

export default Condicional