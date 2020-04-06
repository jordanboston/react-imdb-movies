import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => {
  return (
    <Navbar bg="dark mb-3" variant="dark">
      <Navbar.Brand className="brand-font">
        <Link to="/">
          <h1>IMDB Movie Info</h1>
        </Link>
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;
