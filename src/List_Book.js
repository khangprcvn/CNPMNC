import React, { Component } from 'react';
import data_book from './data_book';
import Book from './Book';

class ListBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listBook: []
    };
  }

  componentWillMount() {
    this.setState({ listBook: data_book });
  }
  render() {
    return (
      <div>
        <h2 style={{textAlign: "center"}}>List Book</h2>
        {this.state.listBook.map(book => (
          <Book 
            key={book.id}
            id={book.id}
            name={book.name}
            owner={book.current_owner}
            category={book.category}
            author={book.author}
            status={book.status}
            link={book.link}
            image={book.image}
          />
        ))}
      </div>
    );
  }
}

export default ListBook;
