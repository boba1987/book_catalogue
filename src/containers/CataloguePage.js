import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

export const CatalogPage = () => {
  return (
    <div>Hello world</div>
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
