import React from "react"
import Resizer from './Resizer.js'

function WindowTracker() {

  const [show, setShow] = React.useState(true)

  function handleToggle() {
    setShow(
      prevState => (!prevState)
    )
  }

  return (
    <div>
      <button onClick={handleToggle}>
        Toogle WindowTracker
      </button>
      { show && < Resizer /> }
    </div>
  )
}

export default WindowTracker