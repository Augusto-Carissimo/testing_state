import React from 'react'

function ApiCall() {
  const [starWarData, setStarWarData] = React.useState({})
  const [count, setCount] = React.useState(1)

  console.log('Render')

  function add() {
    setCount(prevState => prevState + 1)
  }

  React.useEffect(() => {
    console.log('fetch')

    fetch(`https://swapi.dev/api/people/${count}`)
      .then(res => res.json())
      .then(data => setStarWarData(data))
  }, [count])

  return (
    <div>
      <button onClick={add}> Get next character </button>
      <pre> {JSON.stringify(starWarData, null, 2)} </pre>
    </div>
  )
}

export default ApiCall