import { useSongContext } from '@/hooks/useSongContext'
import './header.css'

const Header = () => {
  const { list, selectedSong, setSelectedSong, setSearch } = useSongContext()

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const nextSong = () => {
    const songIndex = list.findIndex(s => s.id === selectedSong.id)
    list.length > songIndex + 1
      ? setSelectedSong(list[songIndex + 1])
      : setSelectedSong(list[0])
  }

  const prevSong = () => {
    const songIndex = list.findIndex(s => s.id === selectedSong.id)
    songIndex > 0
      ? setSelectedSong(list[songIndex - 1])
      : setSelectedSong(list[list.length - 1])
  }

  return (
    <>
      <div className='header__container'>
        {
        selectedSong.title
          ? (
            <>
              <input
                className='header__input-search'
                type='search'
                placeholder='Search a Song...'
                onChange={handleSearch}
              />

              <div className='header__now-playing-container'>
                <span className='header__now-playing'>
                  Now playing:
                </span>
                <span className='header__song-detail'>
                  {selectedSong.title} - {selectedSong.artist}
                </span>
              </div>

              <div>
                <button
                  className='header__button'
                  onClick={prevSong}
                > Prev
                </button>

                <button
                  className='header__button'
                  onClick={nextSong}
                > Next
                </button>
              </div>
            </>
            )
          : <h2>Selecciona una canción</h2>
        }
      </div>
    </>
  )
}
export default Header
