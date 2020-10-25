import React, {useState} from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange_email  = (event) => setEmail(event.target.value)
  const handleChange_password = (event) => setPassword(event.target.value)
  const handleSubmit = (event) => {
    alert('Placeholder action');
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email: <input type='email' name='email' value={email} onChange={handleChange_email} required/>
      </label>
      <br/>
      <label>
        Password:<input type='password' name='password' value={password} onChange={handleChange_password} required/>
      </label>

      <input type="submit" value="Submit" />
    </form>
  )
}
export default LoginForm

