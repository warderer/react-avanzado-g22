import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from '@/hooks/useAuth'
import { Home, Dashboard, Login, Secret, Signup } from '@/pages'

const RoutesIndex = () => {
  const { isAuth } = useAuthContext()

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route
        path='/dashboard'
        element={
          isAuth
            ? <Dashboard />
            : <Navigate to='/login' />
        }
      />
      <Route path='/login' element={<Login />} />
      <Route
        path='/secret'
        element={
          isAuth
            ? <Secret />
            : <Navigate to='/login' />
        }
      />
      <Route path='/signup' element={<Signup />} />
    </Routes>
  )
}
export default RoutesIndex
