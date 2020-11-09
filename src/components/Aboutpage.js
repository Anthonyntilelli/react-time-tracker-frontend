import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';

const AboutPage = () => {
  return (
    <>
      <Row as='article' className='my-2'>
        <Col as='h2'>About placeholder Corp</Col>
      </Row>

      <Row className='my-2'>
        <Col>
        <ListGroup>
          <ListGroup.Item>Quisque vel ultricies nunc. Donec eu justo accumsan, luctus sem eget, vehicula justo.</ListGroup.Item>
          <ListGroup.Item>In lobortis nunc ac tortor iaculis ultrices</ListGroup.Item>
          <ListGroup.Item>Suspendisse condimentum orci ut pellentesque hendrerit. Nunc eget pharetra ligula</ListGroup.Item>
          <ListGroup.Item>Egestas pellentesque sem eros sit amet ligula. Vestibulum augue turpis, vulputate interdum erat vitae, maximus pulvinar nisi</ListGroup.Item>
          <ListGroup.Item>Donec malesuada nulla vel tempor ornare</ListGroup.Item>
        </ListGroup>
        </Col>
      </Row>

      <Row>
        <Col>
          <Image src='https://via.placeholder.com/650x200' fluid />
        </Col>
      </Row>
    </>
  );
};

export default AboutPage;
