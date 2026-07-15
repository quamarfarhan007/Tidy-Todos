import { useState } from 'react'
import { BrowserRouter, Routes, Route ,Link ,useNavigate , redirect , Outlet, Navigate } from 'react-router-dom'
import { SignUp } from './compo/signUp'
import { Login } from './compo/login'
import { Home } from './compo/home'
import { ProtectedRoute } from './compo/ProtectedRoute'
import { PublicRoute } from './compo/PublicRoute'

function App() {
  const [count, setCount] = useState(0)

  return <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigate to="/login" replace />} />
      <Route element={<PublicRoute/>}>
        <Route path='/signup' element={<SignUp/>} ></Route>
        <Route path='/login' element={<Login/>} ></Route>
      </Route>
      <Route element={<ProtectedRoute/>}>
        <Route path='/home' element={<Home/>} ></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  </div>
}

export default App