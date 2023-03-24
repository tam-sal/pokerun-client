import { Card, Pagination, Loader } from '../'
import { useSelector } from 'react-redux'
import styles from './Cards.module.css'
import { deletePokeById, getTypes, filterTypes, sortAZ, filterDataSource, sortZA, filterAttack, getPokes, clearAll } from '../../Redux/actions/action-creators'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'




function Cards() {
  const { pokes } = useSelector(state => state)
  const { types } = useSelector(state => state)
  let { clickedForName } = useSelector(state => state)
  const dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState(1)
  let cardsPerPage = 12
  const lastCardIdx = currentPage * cardsPerPage
  const firstCardIdx = lastCardIdx - cardsPerPage
  const currentCards = pokes.slice(firstCardIdx, lastCardIdx)






  useEffect(() => {
    dispatch(getPokes())
    dispatch(getTypes())
  }, [dispatch])



  //* change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
    window.scroll({
      top: 0,
      left: 0
    })
  }


  const typesChangeHandler = (e) => {
    const { value: type } = e.target
    dispatch(filterTypes(type))
    setCurrentPage(1)
  }

  const resetFilters = () => {
    dispatch(getPokes())
  }

  const alphaSortChangeHandler = (e) => {
    const { value } = e.target
    value === 'az' ? dispatch(sortAZ(value)) : value === 'za' ? dispatch(sortZA(value)) : dispatch(getPokes())
    setCurrentPage(1)
  }

  const handleDataSource = (e) => {
    const { value: source } = e.target
    dispatch(filterDataSource(source))
    setCurrentPage(1)
  }

  const handleAttack = (e) => {
    const { value } = e.target
    if (value === 'asc' || value === 'des') dispatch(filterAttack(value))
    if (value === 'reset') dispatch(getPokes())
    setCurrentPage(1)
  }

  const handleReloadClick = () => {
    dispatch(getPokes())
  }
  const handleClear = () => {
    dispatch(clearAll())
  }


  return (
    <div className={styles.mainContainerCards}>
      <div className={styles.filters}>

        <div className={styles.nameOrder}>
          <select name="alpha" onChange={(e) => (alphaSortChangeHandler(e))}>
            <option value="">Alphabetic Order</option>
            <option value="az">A-Z</option>
            <option value="za">Z-A</option>
          </select>
        </div>

        <div className={styles.dataSource}>
          <select name="data" onChange={(e) => handleDataSource(e)}>
            <option value="allsource">Data Sources</option>
            <option value="api">API</option>
            <option value="db">DB</option>
          </select>
        </div>

        <div className={styles.hpSort}>
          <select name="hp" onChange={(e) => handleAttack(e)}>
            <option value="reset">Order By Attack</option>
            <option value="des">-- + --</option>
            <option value="asc">-- - --</option>
          </select>
        </div>

        <div className={styles.typesFilter}>
          <select name="types" onChange={(e) => typesChangeHandler(e)}>
            <option value="All">All Types</option>
            {types.map(t => {
              return (
                <option key={t.id} value={t.name}>{t.name}</option>
              )
            })}
          </select>
        </div>

        <button onClick={resetFilters} className={styles.resetBtn}>Reset Filters</button>
        <button onClick={handleReloadClick} className={styles.reloadBtn}>RELOAD</button>
        <button onClick={handleClear} className={styles.clearBtn}>Clear All</button>
      </div>
      <br /><br />


      {pokes.length && <div className={styles.pagMainContainer}>
        <Pagination
          cardsPerPage={cardsPerPage}
          totalCards={pokes.length}
          paginate={paginate}
        />
      </div>}
      <div className={styles.cardsContainer}>

        {!pokes.length && clickedForName ?
          <div style={{ color: 'rgb(16, 5, 99)' }}>
            <h1>Name not found</h1>
            <h3>You will be redirected back home in 10 seconds</h3>
          </div>


          : !pokes.length ? <Loader />
            : currentCards.map((poke) =>
              <Card
                key={poke.id}
                id={poke.id}
                name={poke.name}
                img={poke.img}
                Types={poke.Types}
                onClose={() => dispatch(deletePokeById(poke.id))}
                home={true}
              />
            )}
      </div>
    </div>
  )
}
export default Cards
