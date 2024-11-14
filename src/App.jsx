



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Posts from './pages2/Posts'
import Login from './pages2/Login'
import AddPost from './pages2/AddPost'
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