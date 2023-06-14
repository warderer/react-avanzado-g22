import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

const registerUserService = (data) => axios.post(`${BASE_URL}/register`, data)
const loginUserService = (data) => axios.post(`${BASE_URL}/login`, data)
const getSingleUserService = (id) => axios.get(`${BASE_URL}/users/${id}`)

export {
  registerUserService,
  loginUserService,
  getSingleUserService
}
