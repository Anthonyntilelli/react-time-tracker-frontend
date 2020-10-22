  import React, {useState} from 'react'
  import Alert from 'react-bootstrap/Alert'
  import Col from 'react-bootstrap/Col';
  import Row from 'react-bootstrap/Row';

  const TopAlert = (props) => {
    const [show, setShow] = useState(true);
    if (!show || props.variant === undefined || props.variant === '') return null
    return (
      <Row>
        <Col>
          <Alert variant={props.variant} onClose={() => setShow(false)} dismissible>
            <Alert.Heading>{props.message}</Alert.Heading>
          </Alert>
        </Col>
      </Row>
    )
  }
  export default TopAlert



