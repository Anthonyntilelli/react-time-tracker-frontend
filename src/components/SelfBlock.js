import React from 'react';
import { connect } from 'react-redux';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Redirect } from 'react-router-dom';
//{ props.loggedIn && < Redirect to='/' /> }
const SelfBlock = (props) => (
  <>
    <Row><Col><p>Name: {props.name}</p></Col></Row>
    <Row><Col>o<p>PTO Current: {props.pto_current}</p></Col></Row>
    <Row><Col><p>PTO Rate: {props.pto_rate}</p></Col></Row>
    <Row><Col><p>PTO Max: {props.pto_max}</p></Col></Row>
  </>
)
const mapDispatchToProps = dispatch => ({ });
const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
  name: state.self.name,
  pto_current: state.self.pto_current,
  pto_rate: state.self.pto_rate,
  pto_max: state.self.pto_max,
});

export default connect(mapStateToProps, mapDispatchToProps)(SelfBlock);
