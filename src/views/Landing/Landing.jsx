import { Link } from 'react-router-dom'
import styles from './Landing.module.css'

function Landing() {

  return (
    <div className={styles.landing}>
      <div className={styles.mainLanding}>
        <p className={styles.landingTitle}> P O K E R U N </p>
        <Link to='/pokerun'>
          <button className={styles.entryBtn}>ENJOY</button>
        </Link>
      </div>
    </div>
  )
}
export default Landing