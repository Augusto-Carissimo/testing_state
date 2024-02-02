import React from "react"
import '../index.css'

function Count(props) {

  return (
    <div className="counter-count">
      <h1> {props.number} </h1>
    </div>
  )
}

export default Count