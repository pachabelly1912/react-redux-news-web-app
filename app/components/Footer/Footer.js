import React from 'react';
import './style.scss';

const Footer = () => (
  <footer>
    <button
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }}
      className="button"
      style={{ verticalAlign: 'middle' }}
    >
      <span>Top </span>
    </button>
    <p>
      <a>Tran Dinh Nguyen Kha</a>
    </p>
  </footer>
);

export default Footer;
