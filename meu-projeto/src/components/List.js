import Item from "./Item"

function List(){
    return(
        <>
            <h3>Minha Lista</h3>
            <ul> 
                <Item marca= 'Mercedes'/>
                <Item marca= 'Ferrari'/>
                <Item marca= 'McLaren'/>
            </ul>
        </>
    )
}

export default List