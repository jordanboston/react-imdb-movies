import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './header.scss';

const Header = () => {
  return (
    <Navbar bg="dark mb-3" variant="dark">
      <Navbar.Brand className="brand-font">
        <h1>IMDB Movies</h1>
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;
