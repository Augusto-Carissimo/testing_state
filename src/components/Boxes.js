import React from 'react'
import boxes from '../boxes.js'
import '../index.css'
import Box from './Box.js'


function Boxes() {
  const [boxesArray, setBoxes] = React.useState(boxes)

  function handleClick(id) {
    setBoxes(prevState => {
      return prevState.map((box) => {
        return box.id === id ? { ...box, on: !box.on } : box
      })
    })
  }

  const array = boxesArray.map(box => (
  < Box
    key={box.id}
    id={box.id}
    on={box.on}
    handleClick={() => handleClick(box.id)}
  />))

  return (
    <main>
      {array}
    </main>
  )
}

export default Boxes