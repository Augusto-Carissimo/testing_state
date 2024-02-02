import React from "react"
import '../index.css'

function GoingOut() {
  const [isGoingOut, setIsGoingOut] = React.useState(true)

  function changeMind() {
    setIsGoingOut(prevState => !prevState)
  }

  return (
    <div>
      <h1> Do you feel like going out tonight </h1>
      <div onClick={changeMind}>
        <h1> {isGoingOut ? 'Yes' : 'No'} </h1>
      </div>
    </div>
  )

}

export default GoingOut