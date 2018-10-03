import React, {Component} from 'react'
import Book from '../components/Book'
import {Link} from 'react-router-dom'
import * as BooksAPI from '../API/BooksAPI'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class BookSearchPage extends Component {
    state = {
        query: '',
        books: []
    }

    componentWillMount = () => {
        console.log(this.state.books)
    }

    updateQuery = (query) => {
        this.setState({query: query})
        console.log("NICK", query)
        if (query !== '') {
            BooksAPI.search(query).then((books) => {
                this.setState({books: books || []})
            }).catch(err => {
                console.error(err)
            })
        } else {
            this.setState({books: []})
            console.log("There is nothing to search")
        }
    }

    clearQuery = () => {
        this.setState({query: ''})
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
                        onChange={(event) => this.updateQuery(event.target.value)}
                        />
                </div>
            </div>

            <div className="search-books-results">
                <ol className="books-grid">
                {(books | []).map((book) => <Book key={book.id} book={book} />)}
                </ol>
            </div>
        </div>
        )
    }
}

export default BookSearchPage

