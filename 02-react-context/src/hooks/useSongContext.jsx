import { useContext } from 'react'
import { SongContext } from '@/context/SongContext'

// Paso 3. Crear un hook para usar el contexto
export const useSongContext = () => {
  const context = useContext(SongContext)

  if (context === undefined) {
    throw new Error('useSongContext debe ser usado dentro de SongProvider')
  }

  return context
}
