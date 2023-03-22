import styles from './Header.module.css'
import logo from '../../assets/header/logo1.png'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getPokes } from '../../Redux/actions/action-creators'

function Header() {

  const dispatch = useDispatch()
  const onLogoClick = () => dispatch(getPokes())

  return (
    <header>
      <div className={styles.mainHeader}>
        <div className={styles.leftHeader}>
          <Link to='/pokerun'>
            <img src={logo} alt="logo" className={styles.logo} onClick={onLogoClick} />
          </Link>

        </div>


      </div>
    </header>
  )
}
export default Header