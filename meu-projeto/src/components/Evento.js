function Evento({ numero }){
  
  function meuEvento(){
    window.alert(`Clicou!! ${numero}`)
  }
  
  return(
    <>
      <p>Clique para disparar um evento:</p>
      <button onClick={meuEvento}>Ativar!</button>
    </>
  )
}

export default Evento