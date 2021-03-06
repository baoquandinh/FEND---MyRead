import React, { Component } from 'react'
import Book from './Book'


class Bookshelf extends Component {

    onUpdate = () => {
        this.props.onUpdate()
    }

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelfName}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                      this.props.books.filter((book) => book.shelf === this.props.shelfType).map((book) => {
                        return <Book key={book.id} 
                                    book={book} 
                                    shelfType={this.props.shelfType} 
                                    onUpdate={this.onUpdate}
                                />})
                    }
                    </ol>
                </div>
            </div>
        )
    }
}

export default Bookshelf