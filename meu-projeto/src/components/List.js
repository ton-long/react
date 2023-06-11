import Item from "./Item"

function List(){
    return(
        <>
            <h3>Minha Lista</h3>
            <ul> 
                <Item marca= 'Mercedes' ano_lancamento={2001}/>
                <Item marca= 'Ferrari' ano_lancamento={1991}/>
                <Item marca= 'McLaren'/>
                <Item/>            
            </ul>
        </>
    )
}

export default List