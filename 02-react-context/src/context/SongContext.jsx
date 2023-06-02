import { createContext, useEffect, useState } from 'react'
// Usamos @ para no tener que poner ../../
// import canciones from '../../assets/listaCanciones.json'
import canciones from '@/assets/listaCanciones.json'

// CONTEXT tiene que ver con el manejo de estados globales en React.
// Es decir, poder compartir LA MISMA información entre diferentes NIVELES de componentes.

// Para usar Context necesitamos seguir una serie de pasos:

// 1. Crear el contexto
const SongContext = createContext()

// 2. Creación del proveedor del contexto
// Es decir, maneja de donde se obtine la información y como se comparte.
// En este caso, el proveedor es un componente que envuelve a los componentes que van a usar el contexto.
function SongProvider ({ children }) {
  const [list, setList] = useState([]) // lista de canciones
  const [loading, setLoading] = useState(true) // ¿está cargando?
  const [selectedSong, setSelectedSong] = useState({}) // canción seleccionada
  const [search, setSearch] = useState('') // Guardo la palabra que busco

  // Simulo una llamada a la API
  useEffect(() => {
    setTimeout(() => {
      setList(canciones)
      setLoading(false)
    }, 2000)
  }, [])

  const data = {
    list,
    loading,
    selectedSong,
    setSelectedSong,
    search,
    setSearch
  }

  return (
    <SongContext.Provider value={data}>
      {children}
    </SongContext.Provider>
  )
}

export {
  SongProvider,
  SongContext
}
