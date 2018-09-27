import React, {Component } from 'react'
// import Bookshelf from './Bookshelf'
// import * as BooksAPI from '../BooksAPI'

class Book extends Component {
  state = {
    value: ''
  }

  updateShelf = (event, book) => {
    console.log(book)
    console.log(`${book.title} current shelf is ${book.shelf}, we are now moving it to ${event.target.value}`)
    //BooksAPI.update(book, event.target.value)    
  }

    render () {
      const { books } = this.props  
        return (
          books.filter((book) => book.shelf === this.props.shelfType).map((book) => 
          <li key={book.id}>
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}>
              <div className="book-shelf-changer">
                  <select value={this.state.value} onChange={(event) => {this.updateShelf(event, book)}}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read" >Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors[0]}</div>
          </li>)
        )}
    }

export default Book