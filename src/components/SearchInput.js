import React, {PropTypes}  from 'react';
import Search from 'material-ui/svg-icons/action/search';
import HighlightOff from 'material-ui/svg-icons/action/highlight-off';
import IconButton from 'material-ui/IconButton';
import Checkbox from 'material-ui/Checkbox';

class SearchInput extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      value: '',
      showClear: false,
      checked: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    if (!this.state.value) {
      return;
    }

    let queryString = "title";
    let olidPattern = /^OL\d+M$/i;


    if (this.state.checked && olidPattern.test(this.state.value)) {
      queryString = 'olid';
    }

    fetch('http://localhost:4000/books?'+ queryString + '=' + this.state.value).then(response => {
      return response.json();
    }).then(response => {
      this.props.getBooks(response);
      this.setState({showClear: true});
    });
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleClear() {
    this.setState({value: '', showClear: false});

    fetch('http://localhost:4000/books').then(response => {
      return response.json();
    }).then(response => {
      this.props.getBooks(response);
    });
  }

  updateCheck() {
    this.setState((oldState) => {
      return {
        checked: !oldState.checked,
      };
    });
  }

  render() {
    return (
      <div className="search-input-holder">
        <div className="SearchInput">
          <span className={"clear " + (this.state.showClear ? "show" : "hide")}>
            <IconButton
              tooltip="Clear"
              onClick={this.handleClear}>
              <HighlightOff/>
            </IconButton>
          </span>
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder={this.props.placeholder} value={this.state.value} onChange={this.handleChange}/>
            <button className="submit-button" type="submit">
              <Search style={{color: 'white'}}/>
            </button>
          </form>
        </div>
        <Checkbox
          label="Include OLID search"
          checked={this.state.checked}
          onCheck={this.updateCheck.bind(this)}
          style={{margin: 10}}
        />
      </div>
    );
  }
}

SearchInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  getBooks: PropTypes.func.isRequired
};

export default SearchInput;
