// Un custom Hook es una función que utiliza otros hooks de React para realizar una funcionalidad.
// -- Reglas para crear un custom hook:
// 1. Siempre debe usar la palabra 'use' al inicio de su nombre.
// 2. Siempre debe ser una función. (a partir de React 16.8 usamos hooks en funciones)
// 3. Siempre debe usar al menos un Hook de React (useState, useEffect, useContext, useRef etc.)
// 4. No debe ser llamado dentro de un loop, condicional o función anidada.
// 5. Deben ser reutilizables, NO para casos muy específicos.

import { useState } from 'react'

function useForm (callback, defaults) {
  // Estado único para guardar todos los valores del formulario en un objeto
  const [input, setInput] = useState(defaults)

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = (event) => {
    event.preventDefault() // evita que se recargue la página y rompa el SPA
    callback(input)
  }

  // Función que se ejecuta al teclear en un input
  const handleInputChange = (event) => {
    const { name, value } = event.target
    // console.log(name, value)
    setInput({ ...input, [name]: value })
  }

  return {
    input,
    handleSubmit,
    handleInputChange
  }
}

export default useForm
