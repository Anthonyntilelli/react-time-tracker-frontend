import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { fetchSelf } from '../redux/SelfSlice';
import { connect } from 'react-redux';

const SelfBlock = (props) => {
  const [clockEvent, SetClockEvent] = useState('');
  const loggedIn = props.loggedIn;
  const token = props.token;
  const id = props.self_id;
  const fetchSelf = props.fetchSelf;

  const fetchClockEvent = async (token, id) => {
    const configObj = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
    };
    const responce = await fetch(`http://localhost:3001/api/employee/${id}/next_clock`, configObj);

    if (!responce.ok) { // Error
      console.error(`Fetch Clock Error: ${responce.statusText}`);
      // TODO: Display failure alert
    } else {
      const json = await responce.json();
      console.log(json);
      SetClockEvent(json.event);
    }
  }

  const handleClockEvent = async (category_name, token, id) => {
    const configObj = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
      body: JSON.stringify({category: category_name})
    };
    const responce = await fetch(`http://localhost:3001/api/employee/${id}/clock`, configObj);

    if (!responce.ok) { // Error
      console.error(`handleClockEvent Error: ${responce.statusText}`);
    } else {
      const json = await responce.json();
      console.log(json);
      // TODO: Display Event submit alert
    }
    SetClockEvent('');
    fetchClockEvent(token,id);
  }

  useEffect(()=> {
    if (loggedIn) {
      const urlAndRequest = { url: `http://localhost:3001/api/employee/${id}`, token: token, };
      fetchSelf(urlAndRequest);
    }
  }, [loggedIn, token, fetchSelf, id]
  );

  useEffect(() => { fetchClockEvent(token, id) }, [token, id]);

  return (
    <>
      <Row><Col><p>Name: {props.name}</p></Col></Row>
      <Row><Col><p>PTO Current: {props.pto_current}</p></Col></Row>
      <Row><Col><p>PTO Rate: {props.pto_rate}</p></Col></Row>
      <Row><Col><p>PTO Max: {props.pto_max}</p></Col></Row>

      <Row>
        <Col>
          { clockEvent && <h3> Clock Event:</h3> }
        </Col>
      </Row>
      <Row>
        <Col>
          { clockEvent && <Button variant="primary" size="lg" onClick={() => handleClockEvent(clockEvent, token, id) }> {clockEvent} </Button>  }
        </Col>
      </Row>
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  fetchSelf: (endpoint) => dispatch(fetchSelf(endpoint))
});
const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
  name: state.self.name,
  pto_current: state.self.pto_current,
  pto_rate: state.self.pto_rate,
  pto_max: state.self.pto_max,
  self_id: state.user.id,
  token: state.user.jwt
});

export default connect(mapStateToProps, mapDispatchToProps)(SelfBlock);
