  import React from 'react'
  import Alert from 'react-bootstrap/Alert'
  import Col from 'react-bootstrap/Col';
  import Row from 'react-bootstrap/Row';

  const AlertLine = (props) => {
    return (
      <Row as='aside'>
        <Col>
          <Alert variant={props.variant} onClose={() => props.clear()} dismissible>
            <Alert.Heading>{props.message}</Alert.Heading>
          </Alert>
        </Col>
      </Row>
    )
  }
  export default AlertLine



