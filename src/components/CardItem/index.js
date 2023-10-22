// Write your code here.
import './index.css'

const Cards = props => {
  const {cards} = props
  const {title, description, imgUrl, className} = cards
  return (
    <li className={className}>
      <h1>{title}</h1>
      <p>{description}</p>
      <img alt={title} className="image" src={imgUrl} />
    </li>
  )
}
export default Cards
