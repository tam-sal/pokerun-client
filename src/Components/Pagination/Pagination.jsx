import { NavLink } from "react-router-dom"
import styles from './Pagination.module.css'
const Pagination = ({ cardsPerPage, totalCards, paginate }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i)
  }


  return (
    <>
      <ul className="pagination">
        {pageNumbers.map(num =>
          <li className="numPage" key={num}>
            <NavLink to='#' onClick={() => paginate(num)} className={styles.numLink}>
              {num}
            </NavLink>
          </li>)}
      </ul>
    </>
  )
}
export default Pagination