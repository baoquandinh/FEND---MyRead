import React, {Component } from 'react'
import Bookshelf from './Bookshelf'
import * as BooksAPI from '../API/BooksAPI'
import { Link } from 'react-router-dom'
import BooksApp from '../App';

class ListBooks extends Component {

  state = {
    books: [],
    shelfName: '',
    shelfType: '',
    shelf: []
    // value: ''
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
    console.log("Component did mount ran")
  }

   render() {
     console.log(this.state.shelf)
       return (
        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf 
            books={this.state.books}
            shelfType={'currentlyReading'}
            shelfName={'Currently reading'}
            // onUpdateShelf={this.updateShelf}
            />
            <Bookshelf 
            books={this.state.books}
            shelfType={'wantToRead'}
            shelfName={'Want to read'}
            // onUpdateShelf={this.updateShelf}

            />
            <Bookshelf 
            books={this.state.books}
            shelfType={'read'}
            shelfName={'Read'}
            // onUpdateShelf={this.updateShelf}

            />
          </div>
        </div>
        <div className="open-search">
            <Link to='/search'/>
        </div>
      </div>
       )
   }
}

export default ListBooks