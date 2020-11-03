import React from 'react'
import Button from 'react-bootstrap/Button'


const EmployeeBriefEntry = (props) => {
  const active = props.active ? 'yes' : 'no'
  const admin = props.admin ? 'yes' : 'no'
  return (
      <tr>
        <td>{props.name}</td>
        <td>{active}</td>
        <td>{admin}</td>
        <td><Button variant="primary">Expand</Button></td>
      </tr>
  )
}
export default EmployeeBriefEntry



