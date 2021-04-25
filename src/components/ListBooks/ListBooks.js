import React from 'react'
import { Link } from 'react-router-dom'
import Book from '../Books/Book'
import Images from '../Images/Images'

export const ListBooks = ({ books, deleteBookHandler }) => {
  return (
    <div>
      <div className="container-books">
        {
          books.map((book, index) => {
            return (
              <Link to={"/livros/" + book.id} key={index}>
                <div className="books-list">
                  <ul>
                    <li className="list-item"><Images img={book.img} alt={book.name} />
                      <Book
                        name={book.name}
                        author={book.author}
                        pages={book.pages}
                        delete={() => deleteBookHandler(index)}
                      />
                    </li>
                  </ul>
                </div>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}
