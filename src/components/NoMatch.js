import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const NoMatch = () => {
  return (
    <Row>
      <Col as={'h2'}>404 - Unknown Location</Col>
    </Row>
  );
};

export default NoMatch;
