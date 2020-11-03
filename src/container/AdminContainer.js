import  React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import { Redirect } from 'react-router-dom';
import Table from 'react-bootstrap/Table'
import EmployeeBriefEntry from '../components/employeeBriefEntry'
import { fetchAdminList } from '../redux/AdminSlice'


class AdminContainer extends PureComponent {
  render() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Active</th>
            <th>Admin</th>
            <th>Administer</th>
          </tr>
        </thead>
        <tbody>
          { this.props.employee_list.map((emp) => <EmployeeBriefEntry name={emp.name} active={emp.active} admin={emp.admin} />  ) }
        </tbody>
      </Table>
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
  { fetchAdminList: (endpoint) => dispatch(fetchAdminList(endpoint)) }
);
const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
  admin: state.user.admin,
  token: state.user.jwt,
  employee_list: state.admin.employee_list
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer);
