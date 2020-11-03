import React from 'react'
import { connect } from 'react-redux'
import Table from 'react-bootstrap/Table'
import EmployeeBriefEntry from '../components/employeeBriefEntry'

const AdminContainer = (props) => {
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
        <EmployeeBriefEntry/>
      </tbody>
    </Table>
  )

}

const mapStateToProps = state => ( { } );
const mapDispatchToProps = dispatch => ( { } );
export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer);
