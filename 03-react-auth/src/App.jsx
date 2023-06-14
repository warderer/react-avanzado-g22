import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from '@/routes/Index'
import Header from '@/components/Header'
import { AuthProvider } from '@/context/AuthContext'
import './App.css'

function App () {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <RoutesIndex />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
