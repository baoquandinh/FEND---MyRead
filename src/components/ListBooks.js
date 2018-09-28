import React, {Component } from 'react'
import Bookshelf from './Bookshelf'
import { Link } from 'react-router-dom'

class ListBooks extends Component {

  state = {
    books: [],
    shelfName: '',
    shelfType: '',
    value: ''
  }

  // updateShelf = (event, book) => {
  //   console.log(book)
  //   console.log(`${book.title} current shelf is ${book.shelf}, we are now moving it to ${event.target.value}`)
  //   BooksAPI.update(book, event.target.value)    
  // }

   render() {
       return (
        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf 
            books={this.props.books}
            shelfType={'currentlyReading'}
            shelfName={'Currently reading'}
            />
            <Bookshelf 
            books={this.props.books}
            shelfType={'wantToRead'}
            shelfName={'Want to read'}
            />
            <Bookshelf 
            books={this.props.books}
            shelfType={'read'}
            shelfName={'Read'}
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