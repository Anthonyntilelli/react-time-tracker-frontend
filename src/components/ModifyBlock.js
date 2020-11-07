import React, { useState, useEffect }from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { fetchEmp, fetchAdminUpdate } from '../redux/AdminSlice';

const ModifyBlock = (props) => {
  const [reason, setReason] = useState('');
  const [pto_rate, setPTORate] = useState('');
  const [pto_max, setPTOMax] = useState('');
  const [pto_current, setPtoCurrent] = useState('');

  //For useEffect
  const loggedIn = props.loggedIn;
  const token = props.token;
  const fetchEmp = props.fetchEmp;
  const id = props.match.params.id;

  useEffect(()=>
    {
      if (loggedIn) {
        const urlAndRequest = { url: `http://localhost:3001/api/employee/${id}`, token: token, };
        fetchEmp(urlAndRequest);
      }
    }, [loggedIn, token, fetchEmp, id]
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    const urlAndRequest = {
      url: `http://localhost:3001/api/employee/${props.match.params.id}`, reason: reason,
      pto_rate: pto_rate, pto_max: pto_max, pto_current: pto_current, token: props.token
    };
    props.fetchAdminUpdate(urlAndRequest);
  }

  return (
    <>
      <Row>
        <Col as='h2'>Modify {props.name}</Col>
      </Row>

      <Row>
        <Col as='p'>Current PTO Rate: {props.pto_rate}</Col>
      </Row>

      <Row>
        <Col as='p'>Current PTO Max: {props.pto_max}</Col>
      </Row>

      <Row>
        <Col as='p'>Current PTO Current: {props.pto_current}</Col>
      </Row>

      <br />

      <Row>
        <Col></Col>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formReason">
              <Form.Label>Reason</Form.Label>
              <Form.Control type="text" value={reason} onChange={event => setReason(event.target.value)} minLength='8' maxLength='120' required />
              <Form.Text className="text-muted">Reason is required for Administrative action.</Form.Text>
            </Form.Group>

            <Form.Group controlId="formPtoRate">
              <Form.Label>PTO Rate</Form.Label>
              <Form.Control type="number" value={pto_rate} onChange={event => setPTORate(event.target.value)} min={0} required />
            </Form.Group>

            <Form.Group controlId="formPtoMax">
              <Form.Label>PTO Max</Form.Label>
              <Form.Control type="number" value={pto_max} onChange={ event => setPTOMax(event.target.value) } min={0} required />
            </Form.Group>

            <Form.Group controlId="formPtoCurrent">
              <Form.Label>PTO Current</Form.Label>
              <Form.Control type="number" value={pto_current} onChange={ event => setPtoCurrent(event.target.value) } min={0} />
            </Form.Group>

            <Button variant="primary" type="submit">Submit</Button>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </>
  )
}

const mapDispatchToProps = dispatch => (
  {
    fetchEmp: (endpoint) => dispatch(fetchEmp(endpoint)),
    fetchAdminUpdate:  (endpoint) => dispatch(fetchAdminUpdate(endpoint))
  }
);
const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
  token: state.user.jwt,
  name: state.admin.employee_modification.name,
  pto_rate: state.admin.employee_modification.pto_rate,
  pto_current: state.admin.employee_modification.pto_current,
  pto_max: state.admin.employee_modification.pto_max,
  active: state.admin.employee_modification.admin,

});

export default connect(mapStateToProps, mapDispatchToProps)(ModifyBlock);
