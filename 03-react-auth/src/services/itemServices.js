import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

// https://stackoverflow.com/questions/71989146/axios-instance-not-getting-the-token-from-local-storage-on-first-call-react-js
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = token ? `Bearer ${token}` : ''
  }
  return config
},
(error) => {
  return Promise.reject(error)
})

const getSingleItem = (id) => axios.get(`${BASE_URL}/items/${id}`)
const getAllItems = () => axios.get(`${BASE_URL}/items`)

export {
  getSingleItem,
  getAllItems
}
