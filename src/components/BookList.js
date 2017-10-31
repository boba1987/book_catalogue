import React, {PropTypes}  from 'react';
import 'whatwg-fetch';

class BookList extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    fetch('http://localhost:3000/books').then(response => {
      return response.json();
    }).then(response => {
      console.log(response);
      //this.props.getBooks();
    });

  }

  render() {
    return (
      <div>
        <ul className="books-list">
          <li>
            <div>
              <div className="content">
                <img className="cover-img" src="https://covers.openlibrary.org/b/id/6995592-L.jpg"/>
                <p className="card-title">
                  Title
                </p>
                <p className="writter">
                  by <span>Slobodan Djordjevic</span>
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
        </ul>
      </div>
    );
  }
}

BookList.propTypes = {
  bookList: PropTypes.array.isRequired,
  getBooks: PropTypes.func.isRequired
};

export default BookList;
