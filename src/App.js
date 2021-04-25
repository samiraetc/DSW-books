import { useState } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { CreateBook } from './components/CreateBook/CreateBook';
import { FullBook } from './components/FullBook/FullBook';
import { Header } from './components/Header/Header';
import { ListBooks } from './components/ListBooks/ListBooks'

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
      pages: event.target.pages.value,
      img: event.target.img.value
    }];

    setBooks(newBooks);
  }

  const deleteBookHandler = index => {
    let newBooks = books.slice();
    newBooks.splice(index, 1);
    setBooks(newBooks);

  }

  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <Header />
          <Redirect from="/" to="/livros" />
          <Route path="/livros" exact>
            <ListBooks deleteBookHandler={deleteBookHandler} books={books} />
          </Route>
          <Route path="/livros/novolivro">
            <CreateBook onBookSubmit={onBookSubmit} />
          </Route>
          <Route path="/livros/:id">
            <FullBook />
          </Route>
          <Route render={() => <div>Pagina nao encontrada</div>} />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
