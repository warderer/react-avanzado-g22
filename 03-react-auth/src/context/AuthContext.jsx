import { createContext, useState, useEffect } from 'react'
import jwtDecode from 'jwt-decode'

// #1 Crear el contexto
const AuthContext = createContext()

// #2 Crear el proveedor del contexto
const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false) // ¿Estoy autenticado?
  const [userPayload, setUserPayload] = useState(null) // Datos del usuario autenticado

  const login = (token) => {
    // Guardamos el token en el local storage del navegador
    localStorage.setItem('token', token)
    // Decodificamos el token para obtener los datos del usuario
    const decoded = jwtDecode(token)
    setUserPayload(decoded)
    setIsAuth(true)
  }

  const logout = () => {
    // Eliminamos el token del local storage del navegador
    localStorage.removeItem('token')
    setUserPayload(null) // Borro el payload del estado
    setIsAuth(false) // Estoy deslogeado
  }

  useEffect(() => {
    // recuperamos el token, si no existe devolvera null
    const token = localStorage.getItem('token')
    if (token) {
      // Decodificamos el token para obtener los datos del usuario
      const decoded = jwtDecode(token)
      setUserPayload(decoded)
      setIsAuth(true)
    }
  }, [])

  return (
    <AuthContext.Provider value={{ isAuth, userPayload, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export {
  AuthContext,
  AuthProvider
}
