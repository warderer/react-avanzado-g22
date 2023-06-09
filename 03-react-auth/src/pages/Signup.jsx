import { useNavigate } from 'react-router-dom'
import useForm from '@/hooks/useForm'
import { registerUserService } from '@/services/userService'
import logo from '@/assets/react.svg'
import '@/styles/form.css'

const Signup = () => {
  // useNavigate() es un hook de react-router-dom que nos permite navegar entre rutas
  const navigate = useNavigate()

  const sendData = async (data) => {
    try {
      const response = await registerUserService(data)
      if (response.status === 201) {
        navigate('/login')
        // console.log('Usuario creado correctamente', response.data)
      }
    } catch (error) {
      console.log('Ocurrio un error:', error.message)
    }
  }

  const { input, handleSubmit, handleInputChange } = useForm(sendData, {
    first_name: '',
    last_name: '',
    gender: '',
    email: '',
    password: ''
  })

  return (
    <main className='form-signin w-100 m-auto'>
      <form onSubmit={handleSubmit}>
        <img className='mb-4' src={logo} alt='' width='72' height='57' />
        <h1 className='h3 mb-3 fw-normal'>Please sign up</h1>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='first_name'
            name='first_name'
            value={input.first_name}
            onChange={handleInputChange}
            placeholder='John'
          />
          <label htmlFor='first_name'>First Name</label>
        </div>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='last_name'
            name='last_name'
            value={input.last_name}
            onChange={handleInputChange}
            placeholder='Doe'
          />
          <label htmlFor='last_name'>Last Name</label>
        </div>

        <div className='form-floating'>
          <select
            className='form-select'
            id='gender'
            name='gender'
            value={input.gender}
            onChange={handleInputChange}
          >
            <option value=''>Choose...</option>
            <option value='M'>Male</option>
            <option value='F'>Female</option>
          </select>
          <label htmlFor='gender'>Gender</label>
        </div>

        <div className='form-floating'>
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'
            value={input.email}
            onChange={handleInputChange}
            placeholder='name@example.com'
          />
          <label htmlFor='email'>Email address</label>
        </div>

        <div className='form-floating'>
          <input
            type='password'
            className='form-control'
            id='password'
            name='password'
            value={input.password}
            onChange={handleInputChange}
            placeholder='Password'
          />
          <label htmlFor='password'>Password</label>
        </div>

        <button className='w-100 btn btn-lg btn-primary' type='submit'>Sign up</button>
        <p className='mt-5 mb-3 text-muted'>© 2017–2023</p>
      </form>
    </main>
  )
}
export default Signup
