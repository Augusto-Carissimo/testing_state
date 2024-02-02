import React from "react"
import '../index.css'
import Count from './Count.js'

function Counter() {
  const [count, setCount] = React.useState(0)

  function substract() {
    setCount(prevState => prevState-1)
  }

  function add() {
    setCount(prevState => prevState+1)
  }

  return (
    <div className="counter">
      <button onClick={substract} className="counter-minus"> - </button>
      < Count number={count} />
      <button onClick={add} className="counter-plus"> + </button>
    </div>
  )
}

export default Counter