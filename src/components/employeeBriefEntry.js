import React from 'react'
import Button from 'react-bootstrap/Button'


const EmployeeBriefEntry = (props) => {
  return (
      <tr>
        <td>{props.name}</td>
        <td>{props.active}</td>
        <td>{props.admin}</td>
        <td><Button variant="primary">Expand</Button></td>
      </tr>
  )
}
export default EmployeeBriefEntry



