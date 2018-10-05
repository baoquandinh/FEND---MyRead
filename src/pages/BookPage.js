import React, { Component } from 'react'
import Bookshelf from '../components/Bookshelf'
import { Link } from 'react-router-dom'

class BookPage extends Component {
    onUpdate = () => {
        this.props.onUpdate()
    }

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Bookshelf
                            books={this.props.myBooks}
                            shelfType={'currentlyReading'}
                            shelfName={'Currently reading'}
                            onUpdate={this.onUpdate}
                        />
                        <Bookshelf
                            books={this.props.myBooks}
                            shelfType={'wantToRead'}
                            shelfName={'Want to read'}
                            onUpdate={this.onUpdate}
                        />
                        <Bookshelf
                            books={this.props.myBooks}
                            shelfType={'read'}
                            shelfName={'Read'}
                            onUpdate={this.onUpdate}
                        />
                    </div>
                </div>
                <div className="open-search">
                    <Link to='/search' />
                </div>
            </div>
        )
    }
}

export default BookPage
