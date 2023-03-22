import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { getPokeByID } from "../../Redux/actions/action-creators";
import { Card, Header, Footer, Nav, Loading } from "../../Components";
import styles from './Details.module.css'

function Details() {
  const { id } = useParams()
  const pokeDetails = useSelector(state => state.details)
  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(getPokeByID(id))
  },
    [id, dispatch])



  return (
    <>
      <Header />
      <Nav />
      {

        Object.values(pokeDetails).length === 0 ? <Loading />
          : <div className={styles.detailsContainer}>
            <div className={styles.detailsCard}>
              <Card
                id={pokeDetails.id}
                img={pokeDetails.img}
                name={pokeDetails.name}
                hp={pokeDetails.hp}
                attack={pokeDetails.attack}
                defense={pokeDetails.defense}
                speed={pokeDetails.speed}
                height={pokeDetails.height}
                weight={pokeDetails.weight}
                Types={pokeDetails.Types}
                home={false}

              />
            </div>
          </div>
      }
      <Footer />
    </>
  )
}
export default Details