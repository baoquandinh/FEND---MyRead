import React, { Component } from 'react'

class Book extends Component {
    render() {
        // console.log("Rendering the book")
        // console.log(this.props.book)
        const { book, shelf, onUpdate } = this.props
        console.log(shelf)
        return (
            <div>
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}>
                        <div className="book-shelf-changer">
                            <select value={shelf} onChange={(event) => {onUpdate(book , event) }}>
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
            </div>
        )
    }
}

export default Book

// onChange={(event) => { this.updateShelf(book, event) }