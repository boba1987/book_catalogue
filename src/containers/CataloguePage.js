import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Header from '../components/Header';

export const CatalogPage = () => {
  return (
    <div>
      <Header/>
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
