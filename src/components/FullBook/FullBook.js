import React, { useEffect } from 'react'
import { useParams } from 'react-router';
import Book from '../Books/Book';
import Images from '../Images/Images';

export const FullBook = ({ books, deleteBookHandler }) => {
    const { id } = useParams();

    return (
        <div>
            <div className="books-list">
                  <ul>
                    <li className="list-item"><Images img={books[id].img} alt={books[id].name} />
                      <Book
                        name={books[id].name}
                        author={books[id].author}
                        pages={books[id].pages}
                        delete={() => deleteBookHandler(id)}
                      />
                    </li>
                  </ul>
                </div>
        </div>
    )
}
