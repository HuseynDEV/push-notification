



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Posts from './pages/Posts'
import Login from './pages/Login'
import AddPost from './pages/AddPost'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase'


const App = () => {
  const [user] = useAuthState(auth)
  return (
    <Router>
      <Routes>
        {
          user ? (<>
            <Route path='/' element={<Posts />} />
            <Route path='/addPost' element={<AddPost />} /></>
          ) :
            (
              <Route path='/' element={<Login />} />
            )
        }
      </Routes>
    </Router>
  )
}

export default App