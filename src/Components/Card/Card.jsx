import cardStyle from './Card.module.css'
import { Link } from 'react-router-dom'


function Card({ id, name, hp, img, attack, defense, speed, height, weight, createdInDb, Types, home, onClose }) {
  const typesComp = Types?.map(t => {
    return (<span key={t.name}><br />{t.name}</span>)
  })

  if (!home) {
    return (
      <div className={cardStyle.cardContainer}>
        <div>
          <img className={cardStyle.pokeImg} src={img} alt={id} />
        </div>
        <p className={cardStyle.dataName}>{name}</p>

        <p className={cardStyle.data}>HP: {hp}</p>
        <p className={cardStyle.data}>Attack: {attack}</p>
        <p className={cardStyle.data}>Defense: {defense}</p>
        <p className={cardStyle.data}>Speed: {speed}</p>
        <p className={cardStyle.data}>Height: {height}</p>
        <p className={cardStyle.data}>Weight: {weight}</p>
        <p className={cardStyle.data}>TYPES {typesComp} </p>
      </div>
    )
  } else return (
    <div className={cardStyle.cardContainer}>
      <button onClick={() => onClose(id)} className={cardStyle.closeBtn}>x</button>
      <Link to={`details/${id}`}>
        <span className={cardStyle.name}>{name}</span>
      </Link>
      <img className={cardStyle.pokeImg} src={img} alt={id} />
      <p className={cardStyle.data}>TYPES {typesComp} </p>
    </div>
  )
}
export default Card