import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
  return (
    < Row as='nav'>
      <Col className='navbar navbar-expand-sm bg-light justify-content-center'>
        <span className='nav-item'><NavLink className='nav-link' to='/'>Home</NavLink></span>
        { !props.loggedIn &&  <span className='nav-item'><NavLink className='nav-link' to='/login'>Login</NavLink></span> }
        <span className='nav-item'><NavLink className='nav-link' to='/clock'>Clock</NavLink></span>
        <span className='nav-item'><NavLink className='nav-link' to='/history'>History</NavLink></span>
        { props.admin &&  <span className='nav-item'><NavLink className='nav-link' to= '/admin'>Admin</NavLink></span> }
      </Col>
    </Row>
  );
};

export default NavBar;
