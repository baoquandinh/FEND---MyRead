import React, { Component } from 'react'
import Book from './Book'
// import * as BooksAPI from '../API/BooksAPI'

// class Array {
//     map(precidate: (element) => any) {
//         var mappedArray = [];
//         for(var i in this.items) {
//             var mappedObject = predicate(this.items[i])
//             mappedArray.append(mappedObject)
//         }
//         return mappedArray;
//     }

//     filter(precidate: (element) => boolean) {
//         var mappedArray = [];
//         for(var i in this.items) {
//             if( predicate(this.items[i])) {
//                 mappedArray.append(this.items[i])
//             }
//         }
//         return mappedArray;
//     }
// }

class Bookshelf extends Component {

    // books: [{id: 1, name: "Nick"}, {id: 2, name: "BQ"}]

    // books.map((book) => {
    //     //... Somestuff
    //     return book.id + book.name;
    // })

    
    // // Output is now ["1Nick", "2BQ"]

    // A function that takes in a book and returns a boolean
    // describing whether it belongs to this shelf component.
    // belongsToShelf(book) { 
    //     // some magic algorithm to decide to if book should be on shelf
    //     // if (book.shelf === this.props.shelfType) {
    //     //   return true
    //     // } else {
    //     //   return false
    //     // }
    //     return book.shelf === this.props.shelfType
    // }

    // A function that takes in a book and return a html element/component
    // bookToElement(book) {
    //     //TODO: some magic to turn a book into a html element.
    //     return <Book 
    //       book={book}
    //       shelfType={this.props.shelfType}
    //     />
    // }

    onUpdate() {
        //TODO: Let the BookPage know something changed
        console.log("Calling onChange()")
        this.props.onUpdate()
    }

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelfName}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                    {/* // TODO: Write this only using inline/anonymous functions. */}
                    {
                      this.props.books.filter((book) => book.shelf === this.props.shelfType).map((book) => {
                        return <Book key={book.id} 
                                    book={book} 
                                    shelfType={this.props.shelfType} 
                                    onUpdate={this.onUpdate.bind(this)}
                                />
                      })
                        //Equivalant
                        // this.props.books.filter((book) => { return book.shelf === this.props.shelfType; })
                        // this.props.books.filter((book) => { 
                        // return book.shelf === this.props.shelfType; 
                        //})
                        //Equivalant
                        //   .map((book) => {
                        //     return <Book book={book} shelfType={this.props.shelfType}/>;
                        //     })
                    }
                    {/* {this.props.books.filter(this.belongsToShelf.bind(this)).map(this.bookToElement.bind(this))} */}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Bookshelf