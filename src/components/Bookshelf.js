import React, {Component} from 'react'
import Book from './Book'
import * as BooksAPI from '../API/BooksAPI'


class Bookshelf extends Component {
    state = {
        shelf: []
    }


    updateShelf = (book, event) => {
        BooksAPI.get(book.id).then(this.setState({shelf: book.shelf}))
        BooksAPI.update(book, event.target.value)
        // .then(
        //     this.setState ( () => ({
        //         shelf: event.target.value
        //     }))
        // )
        console.log(`This was the previous shelf: ${this.state.shelf}`)
    }

    render() {
        return(
            <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.shelfName}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    <Book 
                      books={this.props.books}
                      shelfName={this.props.shelfName}
                      shelfType={this.props.shelfType}
                      shelf={this.state.shelf}  
                      onUpdateShelf = { (book, event) => {this.updateShelf(book, event)}}
                      />
                    </ol>
                  </div>
                </div>
        )
    }
}

export default Bookshelf