import React from 'react';
import Image from 'react-bootstrap/Image'
import logo from '../logo.jpg';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const HeaderAndLogo = () => {
  return (
    <>
      <Row>
        <Col><Image src={logo} className='App-logo my-2 py-1' alt='logo' fluid/></Col>
      </Row>
      <Row className='mt-1'>
        <Col><h1 className='homepage-title'>Company Time Tracking system</h1></Col>
      </Row>
      <Row className='mt-1'>
        <Col><p className='homepage-subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis.</p></Col>
      </Row>
  </>
  );
};

export default HeaderAndLogo;
