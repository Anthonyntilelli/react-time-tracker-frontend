import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { fetchEmp, fetchAdminUpdate } from '../redux/AdminSlice';

class ModifyBlock extends Component {
  constructor(props) {
    super(props);
    this.state = { reason: '', pto_rate: null, pto_max:  null, pto_current: null };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const urlAndRequest = { url: `http://localhost:3001/api/employee/${this.props.match.params.id}`,
                            reason: this.state.reason,
                            pto_rate: this.state.pto_rate,
                            pto_max: this.state.pto_max,
                            pto_current: this.state.pto_current,
                            token: this.props.token
                          };
    this.props.fetchAdminUpdate(urlAndRequest);
  }

  render() {
    return (
      <>
        <Row>
          <Col as='h2'>Modify {this.props.name}</Col>
        </Row>

        <Row>
          <Col as='p'>Current PTO Rate: {this.props.pto_rate}</Col>
        </Row>

        <Row>
          <Col as='p'>Current PTO Max: {this.props.pto_max}</Col>
        </Row>

        <Row>
          <Col as='p'>Current PTO Current: {this.props.pto_current}</Col>
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
    }
  }
}

const mapDispatchToProps = dispatch => (
  {
    fetchEmp: (endpoint) => dispatch(fetchEmp(endpoint)),
    fetchAdminUpdate:  (endpoint) => dispatch(fetchAdminUpdate(endpoint))
  }
);
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
