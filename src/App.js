import React from 'react'
// import * as BooksAPI from './API/BooksAPI'
import ListBooks from './components/ListBooks'
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
      <Route exact path='/' render={() => (
        <ListBooks books={this.state.books}/>
      )}/>
      
      <Route path='/search' render={({history}) => (
        <SearchBooks
        books={this.state.books}
        onSearchBook={(book) => {
          history.push('/')
        }}
        />
      )}/>
      </div>
    )
  }
}

export default BooksApp
