import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Header from '../components/Header';
import SearchInput from '../components/SearchInput';
import ContainerTitle from '../components/ContainerTitle';
import BookList from '../components/BookList';

export const CatalogPage = () => {
  return (
    <div>
      <Header/>
      <div className="contentHolder">
        <SearchInput
          placeholder="Search"/>
        <ContainerTitle
          placeholder="FEATURED"/>
        <BookList />
      </div>
    </div>
  );
};

CatalogPage.propTypes = {

};

function mapStateToProps() {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CatalogPage);
