import { useState, useEffect } from 'react'
import { getSingleUserService } from '@/services/userService'
import { useAuthContext } from '@/hooks/useAuth'

const Dashboard = () => {
  const { userPayload } = useAuthContext()
  const [userData, setUserData] = useState({})

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getSingleUserService(userPayload.id)
        if (response.status === 200) {
          setUserData(response.data)
        }
      } catch (error) {
        console.log('Ocurrio un error:', error.message)
      }
    }
    fetchUserData()
  }, [userPayload.id])

  return (
    <>
      <h1>Dashboard</h1>
      {
        userData?.first_name && <p>First Name: {userData.first_name}</p>
      }
      {
        userData?.last_name && <p>Last Name: {userData.last_name}</p>
      }
      {
        userData?.gender && <p>Gender: {userData.gender}</p>
      }
      {
        userData?.email && <p>Email: {userData.email}</p>
      }
    </>
  )
}
export default Dashboard
