import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './navbar.css';
import logo from '../../assets/img/logo.png';

export const Navbar = () => {
  return (
    <div className='navbar container'>
      <div className='logo'>
        <Link to='/'>
          <img src={logo} alt='Logo Personal' className='logo' />
        </Link>
      </div>
      <div className='menu'>
        <ul>
          <li>
            <NavLink to='/about' activeClassName='active'>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact' activeClassName='active'>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
