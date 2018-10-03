import React, { Component } from 'react'
import Bookshelf from '../components/Bookshelf'
import * as BooksAPI from '../API/BooksAPI'
import { Link } from 'react-router-dom'

class BookPage extends Component {
    state = {
        books: []
    }

    componentWillMount() {
        this.getAllBooks()
        console.log(this.state.books)
    }

    getAllBooks() {
        // Get all the books from api and set state
        BooksAPI.getAll().then((books) => {
            this.setState({books: books});
        });
        
    }

    onBookChange() {
        // Reget all books since your storage system is cloud only.
        this.getAllBooks()
        console.log("Something changed")
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
                            onChange={this.onBookChange.bind(this)}
                        />
                        <Bookshelf
                            books={this.state.books}
                            shelfType={'wantToRead'}
                            shelfName={'Want to read'}
                            onChange={this.onBookChange.bind(this)}
                        />
                        <Bookshelf
                            books={this.state.books}
                            shelfType={'read'}
                            shelfName={'Read'}
                            onChange={this.onBookChange.bind(this)}
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
