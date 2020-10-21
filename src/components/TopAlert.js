  import React, {useState} from 'react'
  import Alert from 'react-bootstrap/Alert'

  const TopAlert = (props) => {
    const [show, setShow] = useState(true);
  if (!show || props.variant === undefined || props.variant === '') return null
  return (
    <Alert variant={props.variant} onClose={() => setShow(false)} dismissible>
      <Alert.Heading>{props.message}</Alert.Heading>
    </Alert>
    )
  }
  export default TopAlert



