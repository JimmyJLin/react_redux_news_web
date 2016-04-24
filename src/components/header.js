import React, { Component } from 'react';
import { Link } from 'react-router';


class Header extends Component {
  render() {
    return (
      <div className="header">
        <nav className="navbar navbar-lite">
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <Link to='/'> Home </Link>
            </li>
            <li className="nav-item">
              <Link to='/us'> U.S.</Link>
            </li>
            <li className="nav-item">
              <Link to='/world'> World </Link>
            </li>
            <li className="nav-item">
              <Link to='/business'> Business </Link>
            </li>
            <li className="nav-item">
              <Link to='/technology'> Technology </Link>
            </li>
            <li className="nav-item">
              <Link to='/entertainment'> Entertainment </Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Header;
