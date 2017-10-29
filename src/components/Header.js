import React from 'react';

class Header extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="header">
        <p className="title">
          BOOK STORE
        </p>
        <span className="sub-title">
          THE BIGGEST CHOICE ON THE WEB
        </span>
      </div>
    );
  }
}

export default Header;
