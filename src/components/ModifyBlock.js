import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { fetchEmp } from '../redux/AdminSlice';

class ModifyBlock extends PureComponent {

  // reason = params.require(:reason)
  // pto_rate = params.require(:pto_rate)
  // pto_max = params.require(:pto_max)
  // pto_current = params.require(:pto_current)
  constructor(props) {
    super(props);
    this.state = { reason: '', pto_rate: -1, pto_max:  -1, pto_current: -1 };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // const urlAndRequest = { url: 'http://localhost:3001/api/login', name: name, password: password };
    // props.fetchLogin(urlAndRequest);
  }

  render() {
    return (
      <>
        <Row>
          <Col as='h2'>Modify {this.props.name}</Col>
        </Row>
        <br />
        <Row>
          <Col></Col>
          <Col>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formReason">
                <Form.Label>Reason</Form.Label>
                <Form.Control type="text" value={this.state.reason}
                              onChange={event => this.setState({reason: event.target.value})}
                              minLength='8' maxLength='120' required
                />
                <Form.Text className="text-muted">Reason is required for Administrative action.</Form.Text>
              </Form.Group>

              <Form.Group controlId="formPtoRate">
                <Form.Label>PTO Rate</Form.Label>
                <Form.Control type="number" value={this.state.pto_rate}
                              onChange={event => this.setState({pto_rate: event.target.value})}
                              min={0} required
                />
              </Form.Group>

              <Form.Group controlId="formPtoMax">
                <Form.Label>PTO Max</Form.Label>
                <Form.Control type="number" value={this.state.pto_max}
                              onChange={event => this.setState({pto_max: event.target.value})}
                              min={0} required
                />
              </Form.Group>

              <Form.Group controlId="formPtoCurrent">
                <Form.Label>PTO Current</Form.Label>
                <Form.Control type="number" value={this.state.pto_current} onChange={event => this.setState({pto_current: event.target.value})}
                              min={0}
                />
              </Form.Group>

              <Button variant="primary" type="submit">Submit</Button>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </>
    )
  }

  componentDidMount() {
    if (this.props.loggedIn) {
      const urlAndRequest = { url: `http://localhost:3001/api/employee/${this.props.match.params.id}`, token: this.props.token, };
      this.props.fetchEmp(urlAndRequest);
      this.setState({pto_rate: this.props.pto_rate});
      this.setState({pto_max: this.props.pto_max});
      this.setState({pto_current: this.props.pto_current});
    }
  }
}

const mapDispatchToProps = dispatch => ({ fetchEmp: (endpoint) => dispatch(fetchEmp(endpoint)) });
const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
  token: state.user.jwt,
  name: state.admin.employee_modification.name,
  pto_rate: state.admin.employee_modification.pto_rate,
  pto_current: state.admin.employee_modification.pto_current,
  pto_max: state.admin.employee_modification.pto_max,
  active: state.admin.employee_modification.admin,

});

export default connect(mapStateToProps, mapDispatchToProps)(ModifyBlock);
