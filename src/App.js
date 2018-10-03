import React from 'react'
import BookPage from './pages/BookPage'
import BookSearchPage from './pages/BookSearchPage'
import { Route } from 'react-router-dom'
import './css/App.css'

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
      <Route exact path='/' component={BookPage}/>
      <Route path='/search' component={BookSearchPage}/>
      </div>
    )
  }
}

export default BooksApp
