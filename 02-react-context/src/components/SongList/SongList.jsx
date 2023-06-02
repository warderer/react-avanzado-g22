import { useEffect, useState } from 'react'
import './songlist.css'
// Usamos @ para no tener que poner ../../
// import canciones from '../../assets/listaCanciones.json'
import canciones from '@/assets/listaCanciones.json'

const SongList = () => {
  const [list, setList] = useState([]) // lista de canciones
  const [loading, setLoading] = useState(true) // ¿está cargando?

  // Simulo una llamada a la API
  useEffect(() => {
    setTimeout(() => {
      setList(canciones)
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <section>
      {loading
        ? <h2>Cargando...</h2>
        : list.map((song) => (
          <article key={song.id} className='row-song'>
            <h4>{song.title}</h4>
            <p>{song.artist}</p>
          </article>
        ))}
    </section>
  )
}
export default SongList
