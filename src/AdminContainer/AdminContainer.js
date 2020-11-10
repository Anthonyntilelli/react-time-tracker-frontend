import  React, { PureComponent} from 'react';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import EmployeeBriefEntry from './employeeBriefEntry';
import { fetchAdminList } from '../redux/AdminSlice';
import { setError, setSuccess } from '../redux/AlertSlice';

class AdminContainer extends PureComponent {
  render() {
    return (
      <Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Active</th>
              <th>Admin</th>
              <th>Administer</th>
              <th>Terminate</th>
              <th>Pay</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.employee_list.map((emp) =>
                (
                  <EmployeeBriefEntry key={emp.id} name={emp.name} active={emp.active} admin={emp.admin}
                    modify_url={`/admin/${emp.id}`} terminate_url={`/admin/terminate/${emp.id}`}
                    token={this.props.token} id={emp.id} setError={this.props.setError}
                    setSuccess={this.props.setSuccess}
                  />
                )
              )
            }
          </tbody>
        </Table>
      </Row>
    )
  }
  componentDidMount() {
    if ((this.props.loggedIn && this.props.admin)) {
      const urlAndRequest = { url: "http://localhost:3001/api/employee/", token: this.props.token, };
      this.props.fetchAdminList(urlAndRequest);
    }
  }
}

const mapDispatchToProps = dispatch => (
  {
    fetchAdminList: (endpoint) => dispatch(fetchAdminList(endpoint)),
    setSuccess: (message) => dispatch(setSuccess(message)),
    setError: (message) => dispatch(setError(message))
  }
);
const mapStateToProps = state => ({
  id: state.user.id,
  loggedIn: state.user.loggedIn,
  admin: state.user.admin,
  token: state.user.jwt,
  employee_list: state.admin.employee_list
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer);
