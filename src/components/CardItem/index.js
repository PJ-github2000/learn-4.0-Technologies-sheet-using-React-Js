// Write your code here.
import './index.css'

const CardItem = props => {
  const {technoCard} = props
  const {title, description, imgUrl, className} = technoCard
  return (
    <div className={`list ${className}`}>
      <div className="list-card">
        <h1 className="title">{title}</h1>
        <p>{description}</p>
        <img className="image-logo" src={imgUrl} alt={title} />
      </div>
    </div>
  )
}
export default CardItem
