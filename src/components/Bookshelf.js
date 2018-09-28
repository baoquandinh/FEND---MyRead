import React, { Component } from 'react'
import Book from './Book'
import * as BooksAPI from '../API/BooksAPI'


class Bookshelf extends Component {

    onUpdate() {
        // Let the BookPage know something changed
    }

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelfName}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        <Book
                            books={this.props.books}
                            shelfName={this.props.shelfName}
                            shelfType={this.props.shelfType}
                            shelf={this.state.shelf}
                            onUpdate={this.onUpdate}
                        />
                    </ol>
                </div>
            </div>
        )
    }
}

export default Bookshelf