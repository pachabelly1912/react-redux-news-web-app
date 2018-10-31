import React from 'react';
import './style.scss';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      // <header class="w3-container w3-center w3-padding-32">
      <header className="header-container">
        <h1><b>The New York Time</b></h1>
        <p>The most popular <span className="tag">newspaper</span> in the world</p>
      </header>
    );
  }
}

export default Header;
