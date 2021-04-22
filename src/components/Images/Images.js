import React from 'react'
import './Images.css'

function Images(props) {
    return (
        <div>
            <img src={props.img}  alt={`Capa do livro ${props.name}`}/>
        </div>
    )
}

export default Images
