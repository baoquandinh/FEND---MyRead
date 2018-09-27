import React, { Component } from 'react'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../API/BooksAPI'

class SearchBooks extends Component {
    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState({query: query })
        if (query !== '') {
            BooksAPI.search(query).then((query) => {
                console.log(query)

            })         
        } else {
            console.log("There is nothing to search")
        }
    }

    render() {
        return(
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
                    {/* {
                     showingBooks.map((book) => (
                     <li key={book.id}>
                        <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}></div>
                            <div className="book-shelf-changer">
                                <select>
                                    <option value="move" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                </select>
                            </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors}</div>
                     </li>
                     ))
                    } */}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks