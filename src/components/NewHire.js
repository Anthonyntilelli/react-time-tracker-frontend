import React, {useState} from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { fetchAdminHire } from '../redux/AdminSlice';


const NewHire = (props) => {
  const [name, setname] = useState('');
  const [password, setPassword] = useState('');
  const [hire_is_admin, setAdmin] = useState(false);
  const [pto_rate, setPtoRate] = useState(-1);
  const [pto_max, setPtoMax] = useState(-1);

  const handleSubmit = (event) => {
    event.preventDefault();
    const urlAndRequest = {
      url: 'http://localhost:3001/api/employee',
      hire_name: name,
      hire_password: password,
      hire_is_admin: hire_is_admin,
      pto_rate: pto_rate,
      pto_max: pto_max,
      token: props.token
    };
    props.fetchAdminHire(urlAndRequest);
    setname('');
    setPassword('');
    setAdmin(false);
    setPtoRate(-1);
    setPtoMax(-1);
  }

  return (
    <>
      <Row>
        <Col as='h2'>Hire New employee</Col>
      </Row>
      <Row>
        <Col></Col>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId='Name'>
              <Form.Label>New Hire's Name</Form.Label>
              <Form.Control type='text' placeholder='NewHire Name' value={name} onChange={event => setname(event.target.value)} autoFocus required/>
            </Form.Group>

            <Form.Group controlId='password'>
              <Form.Label>New Hire's Password</Form.Label>
              <Form.Control type='password' value={password} minLength='8' maxLength='72' onChange={event => setPassword(event.target.value)} required/>
            </Form.Group>

            <Form.Group controlId='pto_rate'>
              <Form.Label>Set PTO Rate</Form.Label>
              <Form.Control type='number' value={pto_rate} min={0} onChange={event => setPtoRate(event.target.value)} required/>
            </Form.Group>

            <Form.Group controlId='pto_max'>
              <Form.Label>Set PTO Max</Form.Label>
              <Form.Control type='number' value={pto_max} min={0} onChange={event => setPtoMax(event.target.value)}  required/>
            </Form.Group>

            <Form.Group controlId="admin">
             <Form.Label>User is Admin</Form.Label>
              <Form.Control as="select" value={hire_is_admin} onChange={event => setAdmin(event.target.value)} required>
                <option value = {true}>Yes</option>
                <option value = {false}>No</option>
              </Form.Control>
            </Form.Group>

            <Button variant='primary' type='submit'> Submit </Button>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </>
  )
};

const mapDispatchToProps = dispatch => ({ fetchAdminHire: (endpoint) => dispatch(fetchAdminHire(endpoint)) });
const mapStateToProps = state => ({ loggedIn: state.user.loggedIn, token: state.user.jwt });

export default connect(mapStateToProps, mapDispatchToProps)(NewHire);
