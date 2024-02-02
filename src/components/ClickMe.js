import '../index.css'
import image from '../images/Nikolay_Dubovskoy_Raduga.jpg'

function ClickMe() {
  function handleClick() { console.log('clicked')}
  function handleHover() { console.log('hovering') }
  return(
    <div>
      <img src={image} onMouseOver={handleHover} className='ClickMe-image' />
      <button onClick={handleClick}> ClickMe </button>
    </div>
  )
}

export default ClickMe