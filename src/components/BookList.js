import React, {PropTypes}  from 'react';
import 'whatwg-fetch';
import _ from 'lodash';

const notFound = require('../images/page_404.png');

class BookList extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    fetch('http://localhost:3000/books').then(response => {
      return response.json();
    }).then(response => {
      this.props.getBooks(response);
    });
  }

  render() {
    let books = _.values(this.props.bookList).map((book, index)=> {
      return (
        <li key={index}>
          <div>
            <div className="content">
              <img className="cover-img" src={book.cover.large}/>
              <p className="card-title">
                {book.title}
              </p>
              <p className="writter">
                by <span>{book.by_statement}</span>
              </p>
              <br/>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              </p>
              <div className="content-footer">
                <span className="price">
                  $24.44
                </span>
                <button className="black-btn">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </li>
      );
    });

    return (
      <div>
        <div className={'not-found ' + (books.length ? 'hide' : 'show')}>
          <br/>
          <img src={notFound}/>
          <h1>No Results</h1>
        </div>
        <ul className="books-list">
          {books}
        </ul>
      </div>
    );
  }
}

BookList.propTypes = {
  bookList: PropTypes.object.isRequired,
  getBooks: PropTypes.func.isRequired
};

export default BookList;
