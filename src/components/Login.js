import React, {useState} from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { fetchLogin } from '../redux/LoginSlice';


const LoginForm = (props) => {
  const [name, setname] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const urlAndRequest = { url: 'http://localhost:3001/api/login', name: name, password: password };
    setname('');
    setPassword('');
    props.fetchLogin(urlAndRequest);
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
};

const mapDispatchToProps = dispatch => ({ fetchLogin: (endpoint) => dispatch(fetchLogin(endpoint)) });
const mapStateToProps = state => ({ loggedIn: state.user.loggedIn });

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
