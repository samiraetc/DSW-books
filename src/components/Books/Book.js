import React  from 'react'
import './Books.css'
function Book(props) {

    return (
        <div className="Books">
            <div className="info">
               <p>{props.name}</p>
               <p> {props.author}</p>
               <p> {props.pages}</p>
               </div>
               <button onClick={props.delete}>Excluir</button>
               <button onClick={props.edit}>Editar</button>
        </div>
    )
}

export default Book
