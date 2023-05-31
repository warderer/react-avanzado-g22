import logo from '../assets/react.svg'

const FormHook = () => {
  return (
    <div className='login'>
      <div className='login-container'>
        <img src={logo} alt='logo' />
        <form
          onSubmit={() => {}/* HANDLE SUBMIT */}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <label htmlFor='nombre'>Nombre</label>
          <input type='text' name='nombre' placeholder='Tu nombre' id='nombre' value='' onChange={() => {}/* HANDLE INPUT */} />

          <label htmlFor='apellido'>Apellido</label>
          <input type='text' name='apellido' placeholder='Tu Apellido' id='apellido' value='' onChange={() => {}/* HANDLE INPUT */} />

          <label htmlFor='otro'>Otro</label>
          <input type='text' name='otro' placeholder='Tu Otro' id='otro' value='' onChange={() => {}/* HANDLE INPUT */} />

          <label htmlFor='edad'>Edad</label>
          <input type='number' name='edad' placeholder='Tu edad' id='edad' value='' onChange={() => {}/* HANDLE INPUT */} />

          <label htmlFor='genero'>Genero</label>
          <select name='genero' id='genero' value='' onChange={() => {}/* HANDLE INPUT */}>
            <option value=''>Elige un genero</option>
            <option value='M'>Masculino</option>
            <option value='F'>Femenino</option>
            <option value='O'>Otro</option>
          </select>

          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            placeholder='correo@mail.com'
            id='email'
            value=''
            onChange={() => {}/* HANDLE INPUT */}
          />

          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            value=''
            onChange={() => {}/* HANDLE INPUT */}
          />
          <button type='submit'>
            Iniciar Sesion
          </button>
        </form>
      </div>
    </div>
  )
}

export default FormHook
