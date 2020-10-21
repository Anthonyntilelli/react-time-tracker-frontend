import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <div className='navbar navbar-expand-sm bg-light justify-content-center'>
      <span className='nav-item'><NavLink className='nav-link' to='/'>Home</NavLink></span>
      { !props.loggedIn &&  <span className='nav-item'><NavLink className='nav-link' to='/login'>Login</NavLink></span> }
      <span className='nav-item'><NavLink className='nav-link' to='/clock'>Clock</NavLink></span>
      <span className='nav-item'><NavLink className='nav-link' to='/history'>History</NavLink></span>
      { props.admin &&  <span className='nav-item'><NavLink className='nav-link' to= '/admin'>Admin</NavLink></span> }
    </div>
  );
};

export default NavBar;
