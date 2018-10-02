import React, {Component} from 'react'
import Book from './Book'
import * as BooksAPI from '../API/BooksAPI'
import Bookshelf from './Bookshelf';


class Shelf extends Component {
    state = {
        books: []
    }

    render() {
        // console.log(`Rendering shelf ${this.props.shelfType}`)
        const {books, shelfType, onUpdate} = this.props
        console.log(this.state.books)
        return(
            <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.shelfName}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                        books.filter((book) => book.shelf === shelfType).map((book) => (
                            <li key={book.id}>
                                <Book book={book}
                                shelf={shelfType} 
                                onUpdate={onUpdate}
                                />
                            </li>
                            ))
                    }
                    </ol>
                  </div>
                </div>
        )
    }
}

export default Shelf