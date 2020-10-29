import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { logout } from '../redux/userSlice';

const NavBar = (props) => {
  return (
    < Row as='nav'>
      <Col className='navbar navbar-expand-sm bg-light justify-content-center'>
        <span className='nav-item'><NavLink className='nav-link' to='/'>Home</NavLink></span>
        { !props.loggedIn &&  <span className='nav-item'><NavLink className='nav-link' to='/login'>Login</NavLink></span> }
        { props.loggedIn &&  <span className='nav-item'><NavLink className='nav-link' to='/clock'>Clock</NavLink></span> }
        { props.loggedIn &&  <span className='nav-item'><NavLink className='nav-link' to='/history'>History</NavLink></span> }
        { props.loggedIn && props.admin &&  <span className='nav-item'><NavLink className='nav-link' to= '/admin'>Admin</NavLink></span> }
        { props.loggedIn && <Button variant="secondary" onClick={()=> props.logout()}>Logout</Button> }
      </Col>
    </Row>
  );
};

const mapStateToProps = state => ({loggedIn: state.user.loggedIn, admin: state.user.admin });
const mapDispatchToProps = dispatch => ({ logout: () => dispatch(logout()) });

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
