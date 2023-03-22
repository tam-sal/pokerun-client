import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getByName, getPokes } from '../../Redux/actions/action-creators.js'
import searchIcon from '../../assets/search/search2.png'
import styles from './SearchBar.module.css'



function SearchBar() {
  const dispatch = useDispatch()
  const [searched, setSearched] = useState('')




  const nameInputHandler = (event) => {
    let { value } = event.target
    value = value.toUpperCase()
    setSearched(value)
  }

  const handleSearchClick = (e) => {
    dispatch(getByName(searched))
    setSearched('')
    setTimeout(() => {
      dispatch(getPokes())

    }, 5000)
  }




  return (
    <div className={styles.mainSearch}>
      <input type="text" name='searchname' autoComplete='off' placeholder='search a name' value={searched} onChange={(e) => nameInputHandler(e)} className={styles.searchInput} />
      <button disabled={searched.length < 4 || searched.length > 12 || !searched} onClick={(e) => handleSearchClick(e)} className={styles.searchBtn}>
        <img src={searchIcon} alt="search icon" className={styles.searchIcon} />
      </button>
    </div>
  )
}
export default SearchBar