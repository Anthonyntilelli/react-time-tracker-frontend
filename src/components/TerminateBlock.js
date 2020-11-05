import React, {useState} from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { fetchAdminTerminate } from '../redux/AdminSlice';
import { Redirect } from 'react-router-dom';


const TerminateBlock = (props) => {
  const [reason, setReason] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const urlAndRequest = { url: `http://localhost:3001/api/employee/${props.match.params.id}`, reason: reason, token: props.token };
    setReason('');
    props.fetchAdminTerminate(urlAndRequest);
  }

  return (
    <>
      { !props.loggedIn && < Redirect to='/' /> }
      <Row>
        <Col></Col>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId='loginname'>
              <Form.Label>Termination Reason</Form.Label>
              <Form.Control type='text' value={reason} onChange={event => setReason(event.target.value)} autoFocus required/>
            </Form.Group>
            <Button variant='primary' type='submit'> Submit </Button>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </>
  )
};

const mapDispatchToProps = dispatch => ({ fetchAdminTerminate: (endpoint) => dispatch(fetchAdminTerminate(endpoint)) });
const mapStateToProps = state => (
  {
    loggedIn: state.user.loggedIn,
    token: state.user.jwt,
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(TerminateBlock);
