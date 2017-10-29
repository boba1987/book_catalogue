import React, {PropTypes}  from 'react';
import Search from 'material-ui/svg-icons/action/search';

class SearchInput extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="SearchInput">
        <form>
          <input type="text" placeholder={this.props.placeholder}/>
          <button className="submit-button" type="submit">
            <Search style={{color: 'white'}}/>
          </button>
        </form>
      </div>
    );
  }
}

SearchInput.propTypes = {
  placeholder: PropTypes.string.isRequired
};

export default SearchInput;
