import React from 'react'
import { Link } from 'react-router-dom'


const EmployeeBriefEntry = (props) => {
  const active = props.active ? 'yes' : 'no'
  const admin = props.admin ? 'yes' : 'no'
  return (
      <tr>
        <td>{props.name}</td>
        <td>{active}</td>
        <td>{admin}</td>
        { props.active ? <td><Link to={props.modify_url}>Modify PTO</Link></td> : <td>Not Active employee</td> }
        { props.active ? <td><Link to={props.terminate_url}>Terminate</Link></td> : <td>Not Active employee</td> }
      </tr>
  )
}
export default EmployeeBriefEntry



