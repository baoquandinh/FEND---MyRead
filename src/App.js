import React from 'react'
import Bookshelf from './components/Bookshelf'
import SearchBooks from './components/SearchBooks'
import { Route } from 'react-router-dom'
import './css/App.css'

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
      <Route exact path='/' render={() => (
        <Bookshelf />
      )}/>
      
      <Route path='/search' render={({history}) => (
        <SearchBooks
        // onSearchBook={() => {
        //   history.push('/')
        // }}
        />
      )}/>
      </div>
    )
  }
}

export default BooksApp
