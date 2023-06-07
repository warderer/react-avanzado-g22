import './App.css'
import { Home, Dashboard, Login, Secret, Signup } from '@/pages'
import Header from '@/components/Header'

function App () {
  return (
    <>
      <Header />
      <h1>React Auth</h1>
      <Home />
      <Dashboard />
      <Login />
      <Secret />
      <Signup />
    </>
  )
}

export default App
