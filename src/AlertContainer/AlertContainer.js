import React from 'react';
import { connect } from 'react-redux';
import AlertLine from './AlertLine';
import { clearUserError, clearLoginMessage } from '../redux/LoginSlice';
import { clearAlertError, clearAlertSuccess } from '../redux/AlertSlice';
import { clearAdminError, clearAdminSuccess } from '../redux/AdminSlice';

const AlertContainer = (props) => {
  return (
    <>
      { props.userErrorMessage && <AlertLine variant={'danger'} message={props.userErrorMessage} clear={() => props.clearUserError()} />}
      { props.loginMessage && <AlertLine variant={'success'} message={props.loginMessage} clear={() => props.clearLoginMessage()} /> }
      { props.AlertError && <AlertLine variant={'danger'} message={props.AlertError} clear={() => props.clearAlertError()} />}
      { props.AlertSuccess && <AlertLine variant={'success'} message={props.AlertSuccess} clear={() => props.clearAlertSuccess()} /> }
      { props.adminErrorMessage && <AlertLine variant={'danger'} message={props.adminError} clear={() => props.clearAdminError()} />}
      { props.adminSuccessMessage && <AlertLine variant={'success'} message={props.adminSuccess} clear={() => props.clearAdminSuccess()} /> }
    </>
  )
}

const mapStateToProps = state => (
  {
    userErrorMessage: state.user.errorMessage,
    loginMessage: state.user.loginMessage,
    AlertError: state.alert.errorMessage,
    AlertSuccess: state.alert.successMessage,
    adminError: state.admin.errorMessage,
    adminSuccess: state.admin.successMessage,
  }
);
const mapDispatchToProps = dispatch => (
  {
    clearUserError: () => dispatch(clearUserError()),
    clearLoginMessage: () => dispatch(clearLoginMessage()),
    clearAlertError: () => dispatch(clearAlertError()),
    clearAlertSuccess: () => dispatch(clearAlertSuccess()),
    clearAdminError: () => dispatch(clearAdminError()),
    clearAdminSuccess: () => dispatch(clearAdminSuccess())
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(AlertContainer);
