import React from "react"
import '../index.css'

function Things() {

  const [thingsArray, setThingsArray] = React.useState(['Thing 1', 'Thing 2'])

  const thingsElement = thingsArray.map(thing => <p key={thing}>{thing}</p>)

  function addThing() {
    setThingsArray(prevState => [...prevState, `Thing ${prevState.length + 1}`])
  }


  return(
    <div>
      <button onClick={addThing}> Add thing </button>
      {thingsElement}
    </div>
  )
}

export default Things