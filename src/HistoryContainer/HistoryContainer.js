import  React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import ClockTableRow from '../HistoryContainer/clockTableRow';

const HistoryContainer = (props) => {
  const [historyList, setHistoryList] = useState([])
  const loggedIn = props.loggedIn;
  const token = props.token;
  const id = props.self_id;
  debugger;

  const fetchHistoryEvents = async (token, id) => {
    const configObj = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
    };
    const responce = await fetch(`http://localhost:3001/api/employee/${id}/clock`, configObj);

    if (!responce.ok) { // Error
      console.error(`Fetch History Error: ${responce.statusText}`);
      // TODO: Display failure alert
    } else {
      const json = await responce.json();
      console.log(json);
      setHistoryList(json.events);
    }
  }

  useEffect(
    ()=> { if (loggedIn) { fetchHistoryEvents(token, id) } },
    [loggedIn, token, id]
  );

  return (
    <Row>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Category</th>
            <th>Date Time</th>
            <th>Paid Out</th>
          </tr>
        </thead>
        <tbody>
          {
            historyList.map(
              hst => <ClockTableRow key={hst.id} category={hst.category} triggered={hst.triggered} paidOut={hst.paid_out} />
            )
          }
        </tbody>
      </Table>
    </Row>
  )
}

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
  admin: state.user.admin,
  token: state.user.jwt,
  self_id: state.user.id
});

export default connect(mapStateToProps, null)(HistoryContainer);
