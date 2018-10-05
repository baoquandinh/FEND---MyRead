import React, {Component} from 'react'
import Book from '../components/Book'
import {Link} from 'react-router-dom'
import * as BooksAPI from '../API/BooksAPI'

class BookSearchPage extends Component {
    state = {
        query: '',
        books: []
    }

    updateQuery = (event) => {
        let query = event.target.value
        this.setState({query: query})

        if (query !== '') {
            BooksAPI.search(query).then((books) => {
                if(books.error !== undefined) {

                    this.setState({books: []})
                } else {
                    this.setState({books: books})
                }
            })
        } else {
            this.setState({books: []})

        }
    }

    render() {
        const {books} = this.state
        return (
            <div className="search-books">
            <div className="search-books-bar">
                <Link className="close-search" to={'/'}>Close</Link>
                <div className="search-books-input-wrapper">
                    <input 
                        type="text" 
                        placeholder="Search by title or author"
                        value={this.state.query}
                        onChange={this.updateQuery}
                        />
                </div>
            </div>

            <div className="search-books-results">
                <ol className="books-grid">
                {books.map((book) => {
                    let myBooks = this.props.myBooks;
                    let myMatchingBook = myBooks.find(b => b.id === book.id)
                    if (myMatchingBook) {
                        book = myMatchingBook
                    }
                    return  <Book key={book.id} book={book} onUpdate={() => {
                        this.props.onUpdate()
                    }}/>
                })} 
                </ol>
            </div>
        </div>
        )
    }
}

export default BookSearchPage

