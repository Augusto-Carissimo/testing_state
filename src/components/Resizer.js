import React from "react"

function Resizer() {

  const [size, setSize] = React.useState(window.innerWidth)

  React.useEffect(() => {
    function watchResize() {
      setSize(window.innerWidth)
    }
    window.addEventListener('resize', watchResize)
    return window.removeEventListener('resize', watchResize)
  },[])

  return (
    <h1> Window width: {size} </h1>
  )
}

export default Resizer