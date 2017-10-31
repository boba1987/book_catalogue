import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from '../actions/bookCatalogueActions';

import Header from '../components/Header';
import SearchInput from '../components/SearchInput';
import ContainerTitle from '../components/ContainerTitle';
import BookList from '../components/BookList';

export const CatalogPage = (props) => {
  return (
    <div>
      <Header/>
      <div className="contentHolder">
        <SearchInput
          placeholder="Search"
          getBooks={props.actions.getBooks}/>
        <ContainerTitle
          placeholder="FEATURED"/>
        <BookList
          bookList={props.bookList}
          getBooks={props.actions.getBooks}/>
      </div>
    </div>
  );
};

CatalogPage.propTypes = {
  actions: PropTypes.object.isRequired,
  bookList: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    bookList: state.booksListReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CatalogPage);
