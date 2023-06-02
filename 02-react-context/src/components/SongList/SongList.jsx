import './songlist.css'
import { useSongContext } from '@/hooks/useSongContext'

const SongList = () => {
  const { list, loading, setSelectedSong, search } = useSongContext()

  return (
    <section>
      {loading
        ? <h2>Cargando...</h2>
        : list.filter(song => {
          if (search === '') {
            return song // Si la busqueda es vacia, retorno todas las canciones
          } else if (song.title.toLowerCase().includes(search.toLowerCase())) {
            return song // Retorno la canción que cumple con el criterio de busqueda
          }
          return null // Ninguna canción coincide
        }).map((song) => (
          <article
            key={song.id}
            className='row-song'
            onClick={() => {
              setSelectedSong(song)
            }}
          >
            <h4>{song.title}</h4>
            <p>{song.artist}</p>
          </article>
        ))}
    </section>
  )
}
export default SongList
