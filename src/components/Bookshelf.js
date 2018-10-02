import React, {Component } from 'react'
import Shelf from './Shelf'
import * as BooksAPI from '../API/BooksAPI'
import { Link } from 'react-router-dom'

class Bookshelf extends Component {

  state = {
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books: books})
    })
    console.log("Component didMount ran")
  }

  updateShelves = (book, event) => {
    console.log(`${book.title} is being moved to ${event.target.value}`)
    console.log(this.state.books)
  }

   render() {
     console.log(this.state.books) // Should be empty as expected
       return (
        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf 
            books={this.state.books}
            shelfType={'currentlyReading'}
            shelfName={'Currently reading'}
            onUpdate={this.updateShelves}
            />
            <Shelf 
            books={this.state.books}
            shelfType={'wantToRead'}
            shelfName={'Want to read'}
            onUpdate={this.updateShelves}
            />
            <Shelf 
            books={this.state.books}
            shelfType={'read'}
            shelfName={'Read'}
            onUpdate={this.updateShelves}
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

export default Bookshelf