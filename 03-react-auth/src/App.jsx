import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from '@/routes/Index'
import Header from '@/components/Header'
import './App.css'

function App () {
  return (
    <>
      <BrowserRouter>
        <Header />
        <RoutesIndex />
      </BrowserRouter>
    </>
  )
}

export default App
