// import { useState } from 'react'
// import './App.css'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Login from './page/Login'
// import Chat from './page/Chat'
// import { useAuthState } from 'react-firebase-hooks/auth'
// import { auth } from './firebase'

// function App() {
//   const [user] = useAuthState(auth)
//   console.log(user);


//   return (

//     <Router>
//       <Routes>
//         {
//           user ? (
//             <Route path='/' element={<Chat />} />
//           ) : (
//             <Route path='/' element={<Login />} />
//           )
//         }
//       </Routes>
//     </Router>

//   )
// }

// export default App



import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages2/Login'
import AddPost from './pages2/AddPost'
import Posts from './pages2/Posts'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase'

const App = () => {

  const [user] = useAuthState(auth)
  return (
    <div>

      <Router>
        <Routes>
          {
            user ? (
              <>
                <Route path='/' element={<Posts />} />
                <Route path='/addPost' element={<AddPost />} />
                </>
            ) : (
              <Route path='/' element={<Login />} />

            )
          }

        </Routes>
      </Router>

    </div>
  )
}

export default App