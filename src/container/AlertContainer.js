import React from 'react'
import { connect } from 'react-redux'
import Row from 'react-bootstrap/Row';
import TopAlert from '../components/TopAlert';
import { clearUserError, clearLoginMessage } from '../redux/userSlice';

const AlertContainer = (props) => {
  return (
    <>
    { props.userError && <Row as='aside'><TopAlert variant={'danger'} message={props.userErrorMessage} clear={() => props.clearUserError()} /></Row> }
    { props.loginMessage && <Row as='aside'><TopAlert variant={'success'} message={props.loginMessage} clear={() => props.clearLoginMessage()} /></Row> }
    </>
  )
}

const mapStateToProps = state => (
  {
    userError: state.user.error,
    userErrorMessage: state.user.errorMessage,
    loginMessage: state.user.loginMessage
  }
);
const mapDispatchToProps = dispatch => (
  {
    clearUserError: () => dispatch(clearUserError()),
    clearLoginMessage:  () => dispatch(clearLoginMessage())
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(AlertContainer);
