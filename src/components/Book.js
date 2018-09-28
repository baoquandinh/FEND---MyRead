import React, { Component } from 'react'
// import Bookshelf from './Bookshelf'

class Book extends Component {

    updateBook(book, event) {
        // Update Book
        // Let BookShelf know the book was updated on compelete
    }

    render() {
        const { book } = this.props
        return (
            <li key={book.id}>
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}>
                        <div className="book-shelf-changer">
                            <select value={this.props.shelfType} onChange={(event) => { this.updateBook(book, event) }}>
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
                <div className="book-authors">{book.authors[0]}</div>
            </li>)

    }
}

export default Book

// onChange={(event) => { this.updateShelf(book, event) }