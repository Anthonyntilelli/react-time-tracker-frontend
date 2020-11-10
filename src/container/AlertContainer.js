import React from 'react'
import { connect } from 'react-redux'
import Row from 'react-bootstrap/Row';
import TopAlert from '../components/TopAlert';
import { clearUserError, clearLoginMessage } from '../redux/LoginSlice';
import { clearAlarmError, clearALarmSuccess } from '../redux/AlarmSlice';
import { clearAdminError, clearAdminSuccess } from '../redux/AdminSlice';

const AlertContainer = (props) => {
  return (
    <>
    { props.userErrorMessage && <Row as='aside'><TopAlert variant={'danger'} message={props.userErrorMessage} clear={() => props.clearUserError()} /></Row> }
    { props.loginMessage && <Row as='aside'><TopAlert variant={'success'} message={props.loginMessage} clear={() => props.clearLoginMessage()} /></Row> }
    { props.alarmErrorMessage && <Row as='aside'><TopAlert variant={'danger'} message={props.alarmErrorMessage} clear={() => props.clearAlarmError()} /></Row> }
    { props.adminErrorMessage && <Row as='aside'><TopAlert variant={'danger'} message={props.adminErrorMessage} clear={() => props.clearAdminError()} /></Row> }
    { props.adminSuccessMessage && <Row as='aside'><TopAlert variant={'success'} message={props.adminSuccessMessage} clear={() => props.clearAdminSuccess()} /></Row> }
    </>
  )
}

const mapStateToProps = state => (
  {
    userErrorMessage: state.user.errorMessage,
    alarmErrorMessage: state.alarm.errorMessage,
    loginMessage: state.user.loginMessage,
    adminErrorMessage: state.admin.errorMessage,
    adminSuccessMessage: state.admin.successMessage,
  }
);
const mapDispatchToProps = dispatch => (
  {
    clearUserError: () => dispatch(clearUserError()),
    clearLoginMessage: () => dispatch(clearLoginMessage()),
    clearAlarmError: () => dispatch(clearAlarmError()),
    clearALarmSuccess: () => dispatch(clearALarmSuccess()),
    clearAdminError: () => dispatch(clearAdminError()),
    clearAdminSuccess: () => dispatch(clearAdminSuccess())
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(AlertContainer);
