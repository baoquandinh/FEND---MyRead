import React, { Component } from 'react'
import Bookshelf from './Bookshelf'
import { Link } from 'react-router-dom'

class BookPage extends Component {

    state = {
        books: []
    }

    componentWillMount() {
        this.getAllBooks()
    }

    getAllBooks() {
        // Get all the books from api and set state
    }

    onBookChange() {
        // Reget all books since your storage system is cloud only.
    }

    render() {
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
                            onChange={this.onBookChange}
                        />
                        <Bookshelf
                            books={this.state.books}
                            shelfType={'wantToRead'}
                            shelfName={'Want to read'}
                            onChange={this.onBookChange}
                        />
                        <Bookshelf
                            books={this.state.books}
                            shelfType={'read'}
                            shelfName={'Read'}
                            onChange={this.onBookChange}
                        />
                    </div>
                </div>
                <div className="open-search">
                    <Link to='/search' />
                </div>
            </div>
        )
    }
}

export default BookPage
