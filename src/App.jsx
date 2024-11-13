import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './page/Login'
import Chat from './page/Chat'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase'

function App() {
  const [user] = useAuthState(auth)
  console.log(user);


  return (

    <Router>
      <Routes>
        {
          user ? (
            <Route path='/' element={<Chat />} />
          ) : (
            <Route path='/' element={<Login />} />
          )
        }
      </Routes>
    </Router>

  )
}

export default App
