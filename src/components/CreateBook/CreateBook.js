import React from 'react'

export const CreateBook = ({ onBookSubmit }) => {

    return (
        <div className="container">
            <form onSubmit={onBookSubmit}>
                <input type="text" id="name" placeholder="Digite o nome do livro" />
                <input type="text" id="author" placeholder="Digite o nome do author(a)" />
                <input type="number" id="pages" placeholder="Número de páginas" />
                <input type="text" id="img" placeholder="Informe a URL da capa do livro" />
                <input type="submit" value="Cadastrar" />
            </form>
        </div>
    )
}
