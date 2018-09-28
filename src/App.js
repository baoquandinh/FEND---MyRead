import React from 'react'
import * as BooksAPI from './API/BooksAPI'
import BookPage from './pages/BookPage'
import SearchBooks from './components/SearchBooks'
import { Route } from 'react-router-dom'
import './css/App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }
  render() {
    return (
      <div className="app">
      <Route exact path='/' render={BookPage}/>
      
      <Route path='/search' render={({history}) => (
        <SearchBooks
        // books={this.state.books}
        // onSearchBook={(book) => {
        //   history.push('/')
        // }}
        />
      )}/>
      </div>
    )
  }
}

export default BooksApp
