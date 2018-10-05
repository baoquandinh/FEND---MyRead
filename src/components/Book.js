import React, { Component } from 'react'
import * as BooksAPI from '../API/BooksAPI'

class Book extends Component {
    updateBook(book, event) {
        const newShelf = event.target.value
        // TODO: Update Book
        BooksAPI.update(book, newShelf).then((book) => {
            this.props.onUpdate(newShelf)
        });
    }

    render() {
        const { book } = this.props
        let bookImageUrl = ''
        if(book.imageLinks) {
            bookImageUrl = book.imageLinks.smallThumbnail
        }
        return (
            <li className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookImageUrl})` }}>
                        <div className="book-shelf-changer">
                            <select value={ book.shelf || 'none' } onChange={(event) => { this.updateBook(book, event) }}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead" >Want to Read</option>
                                <option value="read" >Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                {(book.authors || []).map((author) => <div key={author} className="book-authors">{author}</div>)}
            </li>)

    }
}

export default Book