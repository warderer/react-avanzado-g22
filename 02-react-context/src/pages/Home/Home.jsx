import SongList from '@/components/SongList'
import SongDetails from '@/components/SongDetails'
import './home.css'
import { SongProvider } from '@/context/SongContext'
import Header from '@/components/Header'

const Home = () => {
  return (
    <SongProvider>
      <Header />
      <div className='home-container'>
        <div className='izquierdo'>
          <h2>SongList</h2>
          <SongList />
        </div>
        <div className='derecho'>
          <SongDetails />
        </div>
      </div>
    </SongProvider>
  )
}
export default Home
