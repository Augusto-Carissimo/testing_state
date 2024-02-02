import React from "react"
import '../index.css'
import Star from './Star.js'


function Profile() {
  const [contact, setContact] = React.useState({
    firstName: 'John',
    lastName: 'Doe',
    phone: '9999999999',
    email: 'test@email.com',
    isFavorite: true
  })

  function toggleFavorite() {
    setContact(prevState => ({
        ...prevState,
        isFavorite: !prevState.isFavorite
    }))
  }

  return (
    <main>
      <article>
        < Star isFilled={contact.isFavorite} handleClick={toggleFavorite}/>
        <h1> {contact.firstName} {contact.lastName}</h1>
        <phone> {contact.phone} </phone>
        <br></br>
        <email> {contact.email} </email>
      </article>
    </main>
  )
}

export default Profile