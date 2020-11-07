import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { fetchSelf } from '../redux/SelfSlice'

const SelfBlock = (props) => {
  //For useEffect
  const loggedIn = props.loggedIn;
  const token = props.token;
  const id = props.self_id;
  const fetchSelf = props.fetchSelf;

  useEffect(()=>
    {
      if (loggedIn) {
        const urlAndRequest = { url: `http://localhost:3001/api/employee/${id}`, token: token, };
        fetchSelf(urlAndRequest);
      }
    }, [loggedIn, token, fetchSelf, id]
  );

  return (
    <>
      <Row><Col><p>Name: {props.name}</p></Col></Row>
      <Row><Col><p>PTO Current: {props.pto_current}</p></Col></Row>
      <Row><Col><p>PTO Rate: {props.pto_rate}</p></Col></Row>
      <Row><Col><p>PTO Max: {props.pto_max}</p></Col></Row>
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
