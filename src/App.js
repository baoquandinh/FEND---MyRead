import React from 'react'
import * as BooksAPI from './API/BooksAPI'
import ListBooks from './components/ListBooks'
import SearchBooks from './components/SearchBooks'
import { Route } from 'react-router-dom'
import './css/App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  render() {
    return (
      <div className="app">
      <Route exact path='/' render={() => (
        <ListBooks books={this.state.books}/>
      )}/>
      
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
