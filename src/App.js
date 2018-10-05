import React from 'react'
import * as BooksAPI from './API/BooksAPI'
import BookPage from './pages/BookPage'
import BookSearchPage from './pages/BookSearchPage'
import { Route } from 'react-router-dom'
import './css/App.css'

class BooksApp extends React.Component {
  state = {
    myBooks: []
  }

  componentWillMount() {
    this.getAllBooks()
}

getAllBooks() {
    // Get all the books from api and set state
    BooksAPI.getAll().then((books) => {
        this.setState({myBooks: books});
    });
    
}

onUpdate = () => {
  this.getAllBooks()
}

  render() {
    return (
      <div className="app">
      <Route exact path='/' render={ () => <BookPage myBooks={this.state.myBooks} onUpdate={this.onUpdate}/>}/>
      <Route path='/search' render={() => <BookSearchPage myBooks={this.state.myBooks} onUpdate={this.onUpdate}/>}/>
      </div>
    )
  }
}

export default BooksApp
