import React, {useState, useContext} from 'react'
import { UserContext } from '../context/userContext'

function Login() {
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)

    const {setUser} = useContext(UserContext)


    const handleSubmit = (e) => {
     setUser(username, password)
    }
  return (
    <div>
      <input type="text"
      value={username}
      onChange={(e)=> setUsername(e.target.value)}
      placeholder='username' / >
      <br />
      
      <input type="text"
      value={password}
      onChange={(e) => setPassword(e.target.value) }
      placeholder='password' />
      <br />
      <button onClick={handleSubmit} > Submit </button> 

    </div>
  )
}

export default Login
