  import React from 'react'
  import Alert from 'react-bootstrap/Alert'
  import Col from 'react-bootstrap/Col';

  const TopAlert = (props) => {
    return (
        <Col>
          <Alert variant={props.variant} onClose={() => props.clear()} dismissible>
            <Alert.Heading>{props.message}</Alert.Heading>
          </Alert>
        </Col>
    )
  }
  export default TopAlert



