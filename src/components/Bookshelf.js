import React, {Component} from 'react'
import Book from './Book'

class Bookshelf extends Component {
    render() {
        console.log(this.props.shelfType)
        return(
            <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.shelfName}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    <Book 
                      books={this.props.books}
                      shelfName={this.props.shelfName}
                      shelfType={this.props.shelfType}/>
                    </ol>
                  </div>
                </div>
        )
    }
}

export default Bookshelf