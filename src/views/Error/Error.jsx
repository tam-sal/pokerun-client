import { useHistory } from "react-router-dom"
import { useEffect } from "react";
import { Footer } from '../../Components/'
import styles from './Error.module.css'
function Error() {
  const history = useHistory()
  useEffect(() => {
    setTimeout(() => {
      history.push('/pokerun')

    }, 5000);

  })

  return (
    <>
      <div className={styles.errPage}>
        <div className={styles.errContainer}>
          <h1 className={styles.errHead}>
            Page not found
          </h1>
          <h2 className={styles.errMessage}>You will be redirected back to home page in a few seconds</h2>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default Error