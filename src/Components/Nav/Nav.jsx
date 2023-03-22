import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import styles from './Nav.module.css'
import { getPokes } from '../../Redux/actions/action-creators'


function Nav() {
  const dispatch = useDispatch()
  const handleHomeClick = () => {
    dispatch(getPokes())
  }

  return (
    <nav>
      <div className={styles.navContainer}>
        <NavLink exact to='/pokerun' activeClassName={styles.navActive} onClick={handleHomeClick}>Home</NavLink>
        <NavLink exact to='/create-custom' activeClassName={styles.navActive}>Create</NavLink>
      </div>
    </nav>
  )
}
export default Nav