import Button from "./evento/Button"

function Evento({ numero }){
  
  function meuEvento(){
    window.alert(`Clicou!! ${numero}`)
  }
  function primeiroEvento(){
    window.alert("Ativou o primeiro evento.")
  }
  function segundoEvento(){
    alert("Ativou o segundo evento.")
  }

  return(
    <>
      <p>Clique para disparar um evento:</p>      
      <button onClick={meuEvento}>Ativar!</button> 
      {/*Passando eventos por props */}
      <Button event= {primeiroEvento} text='Primeiro Evento'/>
      <Button event= {segundoEvento} text='Segundo evento.'/>
    </>
  )
}

export default Evento