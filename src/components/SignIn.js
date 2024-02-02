import '../index.css'
import React from 'react'

function SignIn() {

  const [dataForm, setDataForm] = React.useState(
    {
      email: '',
      password: '',
      confirmedPassword: '',
      newsletter: false
    }
  )


  function handleInput(event) {
    const {name, value, type, checked} = event.target
    setDataForm(prevState => {
      return {
        ...prevState,
        [name]: type ===  'checkbox' ? checked: value
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(dataForm)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          placeholder='Email'
          name='email'
          value={dataForm.email}
          onChange={handleInput}
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
          value={dataForm.password}
          onChange={handleInput}
        />
        <input
          type='password'
          placeholder='Confirm password'
          name='confirmedPassword'
          value={dataForm.confirmedPassword}
          onChange={handleInput}
        />

        <div>
          <input
            type='checkbox'
            id='newsletter'
            name='newsletter'
            checked={dataForm.newsletter}
            onChange={handleInput}
          />
        </div>
        <label htmlFor='newsletter'> I want to join the newsletter </label>
        <button>Sign up</button>
      </form>
    </div>
  )
}

export default SignIn