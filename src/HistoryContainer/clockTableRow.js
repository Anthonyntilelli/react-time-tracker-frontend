import React from 'react'

const ClockTableRow = (props) => {
  const paidOut = props.paid_out ? 'yes' : 'no'
  return (
      <tr>
        <td>{props.category}</td>
        <td>{props.triggered}</td>
        <td>{paidOut}</td>
      </tr>
  )
}
export default ClockTableRow
