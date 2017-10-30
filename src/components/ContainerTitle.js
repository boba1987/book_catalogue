import React, {PropTypes}  from 'react';

class ContainerTitle extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="container-title">
        {this.props.placeholder}
      </div>
    );
  }
}

ContainerTitle.propTypes = {
  placeholder: PropTypes.string.isRequired
};

export default ContainerTitle;
