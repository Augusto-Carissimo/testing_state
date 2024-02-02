import React from 'react'

function Form() {

  const [formData, setFormData] = React.useState(
    {
      firstName: '',
      lastName: '',
      email: '',
      comments: '',
      isFriendly: true,
      employment: '',
      favColor: ''
    }
  )

  function handleInput(event) {
    const {name, value, type, checked} = event.target
    setFormData(prevState => {
      return {
        ...prevState,
        [name]: type ===  'checkbox' ? checked: value
      }
    })
  }

  function handleSubmit(event) {
    // event.preventDefault()
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='First name'
        onChange={handleInput}
        name='firstName'
        value={formData.firstName}
      />
      <input
        type='text'
        placeholder='Last name'
        onChange={handleInput}
        name='lastName'
        value={formData.lastName}
      />
      <input
        type='email'
        placeholder='Email'
        onChange={handleInput}
        name='email'
        value={formData.email}
      />
      <textarea
        value={formData.comments}
        placeholder='Comments'
        name='comments'
        onChange={handleInput}
      />
      <input
        type='checkbox'
        id='isFriendly'
        checked={formData.isFriendly}
        name='isFriendly'
        onChange={handleInput}
      />
      <label htmlFor='isFriendly'> Are you friendly? </label>
      <br />
      <br />
      <fieldset>
        <legend> Current employment status </legend>
        <input
          type='radio'
          id='unemployed'
          name='employment'
          value='unemployed'
          checked={formData.employment === 'unemployed'}
          onChange={handleInput}
        />
        <label htmlFor='unemployed'> Unemployed </label>
        <br />

        <input
          type='radio'
          id='part-time'
          name='employment'
          value='part-time'
          checked={formData.employment === 'part-time'}
          onChange={handleInput}
        />
        <label htmlFor='part-time'> Part-time </label>
        <br />

        <input
          type='radio'
          id='full-time'
          name='employment'
          value='full-time'
          checked={formData.employment === 'full-time'}
          onChange={handleInput}
        />
        <label htmlFor='full-time'> Full-time </label>
        <br />
      </fieldset>

      <label htmlFor='favColor'> What's your favorite color </label>
      <br />
      <select
        id='favColor'
        value={formData.favColor}
        onChange={handleInput}
        name='favColor'
      >
        <option value=''> --Choose-- </option>
        <option value='red'> Red </option>
        <option value='green'> Green </option>
        <option value='blue'> Blue </option>
        <option value='yellow'> Yellow </option>
      </select>

      <br />
      <button> Submit </button>

    </form>
  )
}

export default Form