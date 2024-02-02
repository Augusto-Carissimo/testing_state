import React from 'react'

function Form() {

  const [formData, setFormData] = React.useState({

  })
  console.log(formData)

  function handleInput(event) {
    setFormData(prevState => {
      return {
        ...prevState,
        [event.target.name]: event.target.value
      }
    })
  }


  return (
    <form>
      <input
        type='text'
        placeholder='First name'
        onChange={handleInput}
        name='FirstName'
      />
      <input
        type='text'
        placeholder='Last name'
        onChange={handleInput}
        name='LastName'
      />
    </form>
  )
}

export default Form