import React from 'react'
import { connect } from 'react-redux'
import Row from 'react-bootstrap/Row';
import TopAlert from '../components/TopAlert';
import { clearUserError, clearLoginMessage } from '../redux/LoginSlice';
import { clearSelfError } from '../redux/SelfSlice';

const AlertContainer = (props) => {
  return (
    <>
    { props.userErrorMessage && <Row as='aside'><TopAlert variant={'danger'} message={props.userErrorMessage} clear={() => props.clearUserError()} /></Row> }
    { props.loginMessage && <Row as='aside'><TopAlert variant={'success'} message={props.loginMessage} clear={() => props.clearLoginMessage()} /></Row> }
    { props.selfErrorMessage && <Row as='aside'><TopAlert variant={'danger'} message={props.selfErrorMessage} clear={() => props.clearSelfError()} /></Row> }
    </>
  )
}

const mapStateToProps = state => (
  {
    userErrorMessage: state.user.errorMessage,
    selfErrorMessage: state.self.errorMessage,
    loginMessage: state.user.loginMessage
  }
);
const mapDispatchToProps = dispatch => (
  {
    clearUserError: () => dispatch(clearUserError()),
    clearLoginMessage:  () => dispatch(clearLoginMessage()),
    clearSelfError: () => dispatch(clearSelfError()),
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(AlertContainer);
