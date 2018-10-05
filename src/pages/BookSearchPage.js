import React, {Component} from 'react'
import Book from '../components/Book'
import {Link} from 'react-router-dom'
import * as BooksAPI from '../API/BooksAPI'

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
                if(books.error !== undefined) {
                    console.log(books)
                    this.setState({books: []})
                } else {
                    this.setState({books: books})
                }
                console.log(books)
            }).catch(err => {
                console.log(err)
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
                {books.map((book) => {
                    let myBooks = this.props.myBooks;
                    let myMatchingBook = myBooks.find(b => b.id == book.id)
                    if (myMatchingBook) {
                        console.log("Replacing with My Book:", myMatchingBook)
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

