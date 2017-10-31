import React, {PropTypes}  from 'react';
import Search from 'material-ui/svg-icons/action/search';

class SearchInput extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch('http://localhost:3000/books?title=' + this.state.value).then(response => {
      return response.json();
    }).then(response => {
      this.props.getBooks(response);
    });
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div className="search-input-holder">
        <div className="SearchInput">
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder={this.props.placeholder} value={this.state.value} onChange={this.handleChange}/>
            <button className="submit-button" type="submit">
              <Search style={{color: 'white'}}/>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

SearchInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  getBooks: PropTypes.func.isRequired
};

export default SearchInput;
