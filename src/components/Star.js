function Star(props) {
  let starIcon = props.isFilled ? "full_star.png" : "empty_star.png"

  return (
    <img src={require(`../images/${starIcon}`)} onClick={props.handleClick} alt='star' className="star" />
  )
}

export default Star