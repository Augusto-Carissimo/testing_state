import React from 'react'
import '../index.css'

function Joke(props) {

  const [isShown, setIsShown] = React.useState(false)

  function toggle() {
    setIsShown(prevState => !prevState)
  }
  return (
    <div>
      {props.setup && <h3> {props.setup} </h3>}
      { isShown && <p> {props.punchline} </p> }

      <button onClick={toggle}> {isShown ? 'Hide' : 'Show'} punchline</button>
    </div>
  )
}

export default Joke