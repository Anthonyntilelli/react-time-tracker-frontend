import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange_email  = (event) => setEmail(event.target.value)
  const handleChange_password = (event) => setPassword(event.target.value)
  const handleSubmit = (event) => {
    alert('Placeholder action');
    event.preventDefault();
  }
  return (
    <Row>
      <Col></Col>
      <Col>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId='loginEmail'>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' placeholder='user@example.com' value={email} onChange={handleChange_email} autoFocus required/>
          </Form.Group>
          <Form.Group controlId='LoginPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' value={password} minlength='8' maxLength='72' onChange={handleChange_password} required/>
            </Form.Group>
          <Button variant='primary' type='submit'> Submit </Button>
        </Form>
      </Col>
      <Col></Col>
    </Row>
  )
}
export default LoginForm

