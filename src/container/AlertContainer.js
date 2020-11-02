import React from 'react'
import { connect } from 'react-redux'
import Row from 'react-bootstrap/Row';
import TopAlert from '../components/TopAlert';
import { clearUserError, clearLoginMessage } from '../redux/LoginSlice';
import { clearSelfError } from '../redux/SelfSlice';

const AlertContainer = (props) => {
  return (
    <>
    { props.userError && <Row as='aside'><TopAlert variant={'danger'} message={props.userErrorMessage} clear={() => props.clearUserError()} /></Row> }
    { props.loginMessage && <Row as='aside'><TopAlert variant={'success'} message={props.loginMessage} clear={() => props.clearLoginMessage()} /></Row> }
    { props.SelfErrorMessage && <Row as='aside'><TopAlert variant={'danger'} message={props.SelfErrorMessage} clear={() => props.clearUserError()} /></Row> }
    </>
  )
}

const mapStateToProps = state => (
  {
    userError: state.user.error,
    userErrorMessage: state.user.errorMessage,
    SelfErrorMessage: state.self.errorMessage,
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
