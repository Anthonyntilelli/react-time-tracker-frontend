import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { setError, setSuccess } from '../redux/AlertSlice';

const SelfBlock = (props) => {
  const [clockEvent, SetClockEvent] = useState('');
  const [name, setName] = useState('Loading, please standby....');
  const [ptoCurrent, setPtoCurrent] = useState(-1);
  const [ptoRate, setPtoRate] = useState(-1);
  const [ptoMax, setPtoMax] = useState(-1);
  const loggedIn = props.loggedIn;
  const token = props.token;
  const id = props.self_id;

  const fetchClockEvent = async (token, id) => {
    const configObj = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
    };
    try {
      const responce = await fetch(`http://localhost:3001/api/employee/${id}/next_clock`, configObj);
      if (!responce.ok) { // Error
        console.error(`Fetch Clock Error: ${responce.statusText}`);
        props.errorMessage(`Fetch Clock Error: ${responce.statusText}`);
      } else {
        const json = await responce.json();
        console.log(json);
        SetClockEvent(json.event);
      }
    } catch (error) {
      console.error(`handleClockEvent Error: ${error}`);
      props.errorMessage(`handleClockEvent Error: ${error}`);
    }
  }

  const handleClockEvent = async (category_name, token, id) => {
    const configObj = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
      body: JSON.stringify({category: category_name})
    };
    try {
      const responce = await fetch(`http://localhost:3001/api/employee/${id}/clock`, configObj);
      if (!responce.ok) { // Error
        console.error(`handleClockEvent Error: ${responce.statusText}`);
        props.errorMessage(`handleClockEvent Error: ${responce.statusText}`)
      } else {
        const json = await responce.json();
        console.log(json);
        props.successMessage(json.message)
      }
      SetClockEvent('');
      fetchClockEvent(token, id);
    } catch (error) {
      console.error(`handleClockEvent Error: ${error}`);
      props.errorMessage(`handleClockEvent Error: ${error}`)
    }
  }

  const fetchPersonalInfo = async (token, url) => {
    const configObj = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
    };
    try {
      const responce = await fetch(url, configObj);
      if (!responce.ok) { // Error
        console.error(`Fetch Personal Error: ${responce.statusText}`);
        props.errorMessage(`Fetch Personal Error: ${responce.statusText}`)
      } else {
        const json = await responce.json();
        console.log(json);
        setName(json.name);
        setPtoCurrent(json.pto_current);
        setPtoRate(json.pto_rate);
        setPtoMax(json.pto_max);
      }
    } catch (error) {
      console.error(`handleClockEvent Error: ${error}`);
      props.errorMessage(`handleClockEvent Error: ${error}`)
    }
  }

  useEffect(
    ()=> { if (loggedIn) { fetchPersonalInfo(token, `http://localhost:3001/api/employee/${id}`) } },
    [loggedIn, token, id]
  );
  useEffect(
    () => { if (loggedIn) { fetchClockEvent(token, id) } },
    [loggedIn ,token, id]
  );

  return (
    <>
      <Row><Col><p>Name: {name}</p></Col></Row>
      <Row><Col><p>PTO Current: {ptoCurrent}</p></Col></Row>
      <Row><Col><p>PTO Rate: {ptoRate}</p></Col></Row>
      <Row><Col><p>PTO Max: {ptoMax}</p></Col></Row>

      { clockEvent &&
        <>
          <Row>
            <Col>
              <h3> Clock Event:</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="primary" size="lg" onClick={() => handleClockEvent(clockEvent, token, id) }> {clockEvent}</Button>
            </Col>
          </Row>
        </>
      }
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  errorMessage: (message) => dispatch(setError(message)),
  successMessage: (message) => dispatch(setSuccess(message))
});
const mapStateToProps = state => (
  {
    loggedIn: state.user.loggedIn,
    self_id: state.user.id,
    token: state.user.jwt
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(SelfBlock);
