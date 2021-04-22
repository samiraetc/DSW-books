import { useState } from 'react'
import './App.css';
import Book from './components/Books/Book';
import Images from './components/Images/Images';

function App() {
  
  const [books, setBooks] = useState(
    [
        { 
            id: 0,
            name: "A descoberta do mundo",
            author: "Clarice Lispector",
            pages: "480",
            img: "https://m.media-amazon.com/images/I/61iz3UgVyJL.jpg"
        },
        { 
            id: 1,
            name: "Genero e desigualdades",
            author: "Flávia Biroli",
            pages: "210",
            img: "https://images-na.ssl-images-amazon.com/images/I/910R29dLN1L.jpg"
        },
        { 
            id: 2,
            name: "Alice no pais das maravilhas",
            author: "Greg keys",
            pages: "268",
            img: "https://images-na.ssl-images-amazon.com/images/I/910R29dLN1L.jpg"
        }
    ]
);

const onBookSubmit = event => {
  event.preventDefault();
  console.log(event.target.name.value);
  let newBooks = [...books, {
    id: books.length + 1,
    name: event.target.name.value,
    author: event.target.author.value,
    pages:  event.target.pages.value,
    img:  event.target.img.value
  }];

  setBooks(newBooks);
}

const deleteBookHandler = index => {
  let newBooks = books.slice();
  newBooks.splice(index, 1);
  setBooks(newBooks);
  console.log(books);
}

const editBookHandler = (index, event) => {
  let newBooks = books.slice();
  newBooks.splice(index, 1);
  setBooks(newBooks);
  console.log(books);
}


  return (
    <div className="App">

      <div className="container">
        <form onSubmit={onBookSubmit}>
            <input type="text" id="name"  placeholder="Digite o nome do livro" />
            <input type="text" id="author" placeholder="Digite o nome do author(a)" />
            <input type="number" id="pages" placeholder="Número de páginas" />
            <input type="text" id="img" placeholder="Informe a URL da capa do livro" />
            <input type="submit" value="Cadastrar" />
        </form>
      </div>
     
      <div className="container-books">
      {
        books.map((book, index) => {
          return(
            <div className="books-list">
            <ul>
                <li className="list-item"><Images img={book.img} alt={book.name} />
                   <Book key={book.id} name={book.name} author={book.author} pages={book.pages} 
                   delete={() => deleteBookHandler(index)} 
                   edit={() => editBookHandler(index)} />
                </li>
            </ul>
            </div>
          )
        })
      }
      </div>
    </div>
  );
}

export default App;
