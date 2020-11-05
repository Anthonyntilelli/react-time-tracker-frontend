import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { fetchSelf } from '../redux/SelfSlice'

class SelfBlock extends PureComponent {

  render() {
    return (
      <>
        <Row><Col><p>Name: {this.props.name}</p></Col></Row>
        <Row><Col><p>PTO Current: {this.props.pto_current}</p></Col></Row>
        <Row><Col><p>PTO Rate: {this.props.pto_rate}</p></Col></Row>
        <Row><Col><p>PTO Max: {this.props.pto_max}</p></Col></Row>
      </>
    )
  }
  componentDidMount() {
    if (this.props.loggedIn) {
      const urlAndRequest = { url: `http://localhost:3001/api/employee/${this.props.self_id}`, token: this.props.token, };
      this.props.fetchSelf(urlAndRequest);
    }
  }
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
