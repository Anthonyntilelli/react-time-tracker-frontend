import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const EmployeeBriefEntry = (props) => {

  const handleClockEvent = async (props) => {
    const configObj = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${props.token}` },
      body: JSON.stringify({ full_date: Date().toString() })
    };
    try {
      const responce = await fetch(`http://localhost:3001/api/employee/${props.id}/pay`, configObj);
      if (!responce.ok) { // Error
        console.error(`Pay Error: ${responce.statusText}`);
        props.setError(`Pay Error: ${responce.statusText}`)
      } else { // Success
        const json = await responce.json();
        console.log(json);
        props.setSuccess(json.message);
      }
    } catch (error) {
      console.error(`handleClockEvent Error: ${error}`);
      props.setError(`handleClockEvent Error: ${error}`)
    }
  }

  const active = props.active ? 'yes' : 'no'
  const admin = props.admin ? 'yes' : 'no'
  return (
      <tr>
        <td>{props.name}</td>
        <td>{active}</td>
        <td>{admin}</td>
        { props.active ? <td><Link to={props.modify_url}>Modify PTO</Link></td> : <td>Not Active employee</td> }
        { props.active ? <td><Link to={props.terminate_url}>Terminate</Link></td> : <td>Not Active employee</td> }
        <td><Button variant="primary" size="lg" onClick={() => handleClockEvent(props) } disabled={!props.active}> Pay </Button></td>
      </tr>
  )
}

export default EmployeeBriefEntry;
