import React, {Component} from 'react'
import * as BooksAPI from '../API/BooksAPI'


class Bookshelf extends Component {
    state = {
        shelf: []
    }

    updateShelf = (book, event) => {
        let newShelf = event.target.value
        BooksAPI.update(book, newShelf).then(() => {
            this.setState({shelf: newShelf})
          })
    }

    render() {
        const {books, shelfType, onUpdateShelf} = this.props
        // console.log(this.props.books)

        return(
            <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.shelfName}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {/* {console.log(books)} */}
                    {/* {console.log(this.state.books)} */}
                    {
                        books.filter((book) => book.shelf === shelfType).map((book) => 
                        <li key={book.id}>
                        <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}>
                                    <div className="book-shelf-changer">
                                        <select value={shelfType} onChange={(event) => this.updateShelf(book, event)}>
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
                    {/* <Book 
                      books={this.props.books}
                      shelfName={this.props.shelfName}
                      shelfType={this.props.shelfType}
                      shelf={this.state.shelf}  
                      onUpdateShelf = { (book, event) => {this.updateShelf(book, event)}}
                      /> */}
                    </ol>
                  </div>
                </div>
        )
    }
}

export default Bookshelf