import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import { UserContextProvider } from './context/userContext'

function App() {

  return (
    <>
    <UserContextProvider>

     <h2>Login Page</h2>
      <Login />
      <Profile/>
    </UserContextProvider>

    </>
  )
}

export default App
