import { useState, useEffect } from 'react'
import { getAllItems } from '@/services/itemServices'

const Home = () => {
  const [itemsData, setItemsData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchItemData = async () => {
      try {
        const response = await getAllItems()
        if (response.status === 200) {
          setItemsData(response.data)
          setLoading(false)
        }
      } catch (error) {
        console.log('Ocurrio un error:', error.message)
      }
    }
    fetchItemData()
  }, [])

  return (
    <>
      <h1>Home</h1>
      <div className='d-flex flex-row flex-wrap justify-content-center'>
        {/* Si itemsData no esta vacio, recorro el arreglo con Map y creo un Card de Bootstrap para cada elemento */}
        {
        loading
          ? <h1>Cargando...</h1>
          : itemsData.map((product) => (
            <div className='card' style={{ width: '18rem' }} key={product.id}>
              <img className='card-img-top' style={{ maxHeight: '300px' }} src={product.image} alt={product.product_name} />
              <div className='card-body'>
                <h5 className='card-title'>{product.product_name}</h5>
                <p className='card-text'>{product.description}</p>
                {/* Aqui no se implementa el botón, pero basta con sustituir "a" por Link de react-router-dom y la ruta del enlace indicar el componente que mostrará la información de un solo producto, seguido del id del producto */}
                <a href='#' className='btn btn-primary'>Comprar</a>
              </div>
            </div>
          ))
}
      </div>
    </>
  )
}
export default Home
