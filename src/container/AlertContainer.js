import React from 'react'
import { connect } from 'react-redux'
import Row from 'react-bootstrap/Row';
import TopAlert from '../components/TopAlert';
import { clearUserError } from '../redux/userSlice';

const AlertContainer = (props) => {
  return (
    <>
    { props.userError && <Row as='aside'><TopAlert variant={'danger'} message={props.userErrorMessage} clear={() => props.clearUserError()} /></Row> }
    </>
  )
}

const mapStateToProps = state => {
  return {
    userError: state.user.error,
    userErrorMessage: state.user.errorMessage
  };
}
function mapDispatchToProps(dispatch){
  return { clearUserError: () => dispatch(clearUserError()) }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlertContainer);
