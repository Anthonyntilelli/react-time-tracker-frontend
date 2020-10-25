import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const LoginForm = () => {
  const [name, setname] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    alert('Placeholder action');
    event.preventDefault();
  }
  return (
    <Row>
      <Col></Col>
      <Col>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId='loginname'>
            <Form.Label>Name</Form.Label>
            <Form.Control type='text' placeholder='John Doe' value={name} onChange={event => setname(event.target.value)} autoFocus required/>
          </Form.Group>
          <Form.Group controlId='LoginPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' value={password} minLength='8' maxLength='72' onChange={event => setPassword(event.target.value)} required/>
            </Form.Group>
          <Button variant='primary' type='submit'> Submit </Button>
        </Form>
      </Col>
      <Col></Col>
    </Row>
  )
}
export default LoginForm

