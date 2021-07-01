import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <Link to="/" className="navbar-brand" href="#">
        Vidly
      </Link>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/movies" className="nav-link" href="#">
              Movies
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/customers" className="nav-link" href="#">
              Customers
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/rentals" className="nav-link" href="#">
              Movies
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
