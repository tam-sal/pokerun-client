import { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { getTypes } from "../../Redux/actions/action-creators"
import styles from './Form.module.css'
import axios from 'axios'
import send from '../../assets/icons/send.png'
import { Header, Nav, Footer } from '../../Components'




function Form() {

  const dispatch = useDispatch()
  const types = useSelector(state => state.types)
  let [selected, setSelected] = useState([])

  const initialFormState = {
    name: '',
    hp: '',
    attack: '',
    defense: '',
    speed: '',
    height: '',
    weight: '',
    img: '',
    type: [],
    createdInDb: true
  }


  const [formState, setFormState] = useState(initialFormState)
  const [errors, setErrors] = useState({
    name: '',
    hp: '',
    attack: '',
    defense: '',
    speed: '',
    height: '',
    weight: '',
    img: '',
    isValid: false
  })

  useEffect(() => {
    dispatch(getTypes())

  },
    [dispatch])



  const handleSelected = (event) => {
    const typeItem = event.target.value
    setFormState({ ...formState, type: [...new Set([...selected, typeItem])] })
    setSelected([...new Set([...selected, typeItem])])
  }



  const handleRemoveSelected = (event) => {
    const typeToRemove = event.target.innerText
    setSelected(selected.filter(item => item !== typeToRemove))
    setFormState({ ...formState, type: selected.filter(item => item !== typeToRemove) })
  }

  //! validation start

  const validateName = (formState) => {
    const nameRegEx = /^(?!.*([a-zA-Z])\1{2})[a-zA-Z]{4,12}$/i
    if (nameRegEx.test(formState.name)) setErrors({ ...errors, name: '', isValid: true })
    if (!nameRegEx.test(formState.name)) setErrors({ ...errors, name: '>> length [4:12]-non 3 consecutive identical characters', isValid: false })
    if (!formState.name) setErrors({ ...errors, name: '>> name field is required ', isValid: false })
  }
  const validateHp = (formState) => {
    const hpRegEx = /^(3[0-9]|[4-9][0-9]|1[0-9]{2}|200)$/
    if (hpRegEx.test(formState.hp)) setErrors({ ...errors, hp: '', isValid: true })
    else if (!hpRegEx.test(formState.hp)) setErrors({ ...errors, hp: '>> numeric range [30:200]', isValid: false })
    if (!formState.hp) setErrors({ ...errors, hp: '>> hp field is required ', isValid: false })
  }

  const validateAttack = (formState) => {
    const attackRegEX = /^(4[0-9]|[5-9][0-9]|100)$/
    if (attackRegEX.test(formState.attack)) setErrors({ ...errors, attack: '', isValid: true })
    else if (!attackRegEX.test(formState.attack)) setErrors({ ...errors, attack: '>> numeric range [40:100]', isValid: false })
    if (!formState.attack) setErrors({ ...errors, attack: '>> attack field is required ', isValid: false })
  }

  const validateDefense = (formState) => {
    const defenseRegEx = /^(4[0-9]|[5-9][0-9]|100)$/
    if (defenseRegEx.test(formState.defense)) setErrors({ ...errors, defense: '', isValid: true })
    else if (!defenseRegEx.test(formState.defense)) setErrors({ ...errors, defense: '>> numeric range [40:100]', isValid: false })
    if (!formState.defense) setErrors({ ...errors, defense: '>> defense field is required', isValid: false })
  }

  const validateSpeed = (formState) => {
    const speedRegEx = /^(4[0-9]|[5-9][0-9]|100)$/
    if (speedRegEx.test(formState.speed)) setErrors({ ...errors, speed: '', isValid: true })
    else if (!speedRegEx.test(formState.speed)) setErrors({ ...errors, speed: '>> numeric range [40:100]', isValid: false })
    if (!formState.speed) setErrors({ ...errors, speed: '>> speed field is required ', isValid: false })

  }

  const validateHeight = (formState) => {
    const heightRegEx = /^(1[0-9]|[2-9])$|^(0?[2-9]|1[0-9]|20)$/
    if (heightRegEx.test(formState.height)) setErrors({ ...errors, height: '', isValid: true })
    else if (!heightRegEx.test(formState.height)) setErrors({ ...errors, height: '>> numeric range [2:20]', isValid: false })
    if (!formState.height) setErrors({ ...errors, height: '>> height field is required ', isValid: false })
  }

  const validateWeight = (formState) => {
    const weightRegEx = /^([2-9][0-9]|[1-9][0-9]{2}|1000)$/
    if (weightRegEx.test(formState.weight)) setErrors({ ...errors, weight: '', isValid: true })
    else if (!weightRegEx.test(formState.weight)) setErrors({ ...errors, weight: '>> numeric range [20:1000]', isValid: false })
    if (!formState.weight) setErrors({ ...errors, weight: '>> weight field is required', isValid: false })
  }

  const validateImg = (formState) => {
    const srcBulbagarden = /^https:\/\/.*bulbagarden\.net.*\.png$/.test(formState.img)
    const srcPokemondb = /^https:\/\/.*pokemondb\.net.*\.jpg$/.test(formState.img)
    const srcFreepng = /^https:\/\/www\.freeiconspng\.com.*\.png$/.test(formState.img)

    if (srcBulbagarden || srcPokemondb || srcFreepng) setErrors({ ...errors, img: '', isValid: true })
    else if (![srcBulbagarden, srcPokemondb, srcFreepng].every(Boolean)) setErrors({ ...errors, img: '>> image should be provided from a trusted source', isValid: false })
    if (!formState.img) setErrors({ ...errors, img: '>> image field is required ', isValid: false })
  }

  //! validation end



  const handleFormChange = (event) => {
    let { name, value } = event.target
    value = value.trim()
    if (name === 'name') value = value.toUpperCase()



    name === 'name' && validateName({
      ...formState,
      [name]: value
    })
    name === 'hp' && validateHp({
      ...formState,
      [name]: value
    })
    name === 'attack' && validateAttack({
      ...formState,
      [name]: value
    })
    name === 'defense' && validateDefense({
      ...formState,
      [name]: value
    })
    name === 'speed' && validateSpeed({
      ...formState,
      [name]: value
    })
    name === 'height' && validateHeight({
      ...formState,
      [name]: value
    })
    name === 'weight' && validateWeight({
      ...formState,
      [name]: value
    })
    name === 'img' && validateImg({
      ...formState,
      [name]: value
    })

    setFormState({
      ...formState,
      [name]: value
    })
  }

  const validForm = (formState.type.length > 0) && errors.isValid && Object.values(formState).every(Boolean)


  const submitHandler = async (event) => {
    event.preventDefault()
    try {
      const { data: response } = await axios.post('https://pokerun-api.onrender.com/pokemons', formState)
      setFormState(initialFormState)
      setSelected([])
      return alert(response.msg)

    }
    catch (error) {
      if (error.response) return alert(error.response.data.error)
      if (error.request) return alert(error.request)
      return alert(error.message)
    }
  }

  return (<>
    <Header />
    <Nav />
    <section className={styles.mainContainer}>

      <div className={styles.maintitle}>Create Your Own Pokemon</div>
      <div className={styles.formContainer}>

        <form action="" method='post' onSubmit={submitHandler}>
          {/* Name */}

          <div className={`${styles.pokeName} ${styles.labelContainer}`}>
            <label htmlFor="name">NAME</label>
            <br />
            <input autoComplete="off" placeholder="name..." type="text" name='name' value={formState.name} onChange={handleFormChange} />
            <br />
            {errors.name && <span className={styles.inputError}>{errors.name}</span>}

          </div>
          {/* //* HP */}
          <div className={`${styles.pokeHp} ${styles.labelContainer}`}>
            <label htmlFor="hp">HP</label>
            <br />
            <input autoComplete="off" type="text" placeholder="hp..." name='hp' value={formState.hp} onChange={handleFormChange} />
            <br />
            {errors.hp && <span className={styles.inputError}>{errors.hp}</span>}

          </div>
          {/* //* ATTACK */}
          <div className={`${styles.pokeAttack} ${styles.labelContainer}`}>
            <label htmlFor="attack">ATTACK</label>
            <br />
            <input autoComplete="off" type="text" placeholder="attack..." name='attack' value={formState.attack} onChange={handleFormChange} />
            <br />
            {errors.attack && <span className={styles.inputError}>{errors.attack}</span>}
          </div>
          {/* //* DEFENSE */}
          <div className={`${styles.pokeDefense} ${styles.labelContainer}`}>
            <label htmlFor="defense">DEFENSE</label>
            <br />
            <input autoComplete="off" type="text" placeholder="defense..." name='defense' value={formState.defense} onChange={handleFormChange} />
            <br />
            {errors.defense && <span className={styles.inputError}>{errors.defense}</span>}
          </div>
          {/* //* SPEED */}
          <div className={`${styles.pokeSpeed} ${styles.labelContainer}`}>
            <label htmlFor="speed">SPEED</label>
            <br />
            <input autoComplete="off" type="text" placeholder="speed..." name='speed' value={formState.speed} onChange={handleFormChange} />
            <br />
            {errors.speed && <span className={styles.inputError}>{errors.speed}</span>}
          </div>
          {/* //* HEIGHT */}
          <div className={`${styles.pokeHeight} ${styles.labelContainer}`}>
            <label htmlFor="height">HEIGHT</label>
            <br />
            <input autoComplete="off" type="text" placeholder="height..." name='height' value={formState.height} onChange={handleFormChange} />
            <br />
            {errors.height && <span className={styles.inputError}>{errors.height}</span>}
          </div>
          {/* //* WEIGHT */}
          <div className={`${styles.pokeWeight} ${styles.labelContainer}`}>
            <label htmlFor="weight">WEIGHT</label>
            <br />
            <input autoComplete="off" type="text" placeholder="weight..." name='weight' value={formState.weight} onChange={handleFormChange} />
            <br />
            {errors.weight && <span className={styles.inputError}>{errors.weight}</span>}
          </div>
          {/* //* IMG */}
          <div className={`${styles.pokeImg} ${styles.labelContainer}`}>
            <label htmlFor="img">IMAGE</label>
            <br />
            <span className={styles.tooltipImg} >&nbsp; &nbsp; Trusted Sources <br /> https://bulbagarden.net/ <br /> https://pokemondb.net/ <br /> https://www.freeiconspng.com/ <br /> right click and copy image address </span>
            <input type="url" name='img' autoComplete="off" placeholder="Copy image address from a trusted source" value={formState.img} onChange={handleFormChange} />
            <br />
            {errors.img && <span className={styles.inputError}>{errors.img}</span>}
          </div>
          {/* //* Types */}
          <div className={`${styles.pokeTypes} ${styles.labelContainer}`}>
            <label htmlFor="type"  >TYPES</label>
            <br />
            <select name='type' value={formState.type} onChange={handleSelected} disabled={formState.type.length >= 3 ? true : false} >
              <option value={null}>--choose types--</option>
              {types.map(t => {
                return (
                  <option key={t.id} value={t.name}>{t.name}</option>
                )
              })}
            </select>
            <br />
            {errors.type}
            <br />
            <span className={styles.removeTitle}>Remove Selected</span>
            <div className={styles.selectedTypes} >
              {selected?.map(t => {

                return (
                  <div key={t} className={styles.singleSelect} onClick={handleRemoveSelected}>{t}</div>
                )
              })}
            </div>
          </div>

          <button className={styles.SumbitBtn} type='submit' disabled={!validForm}>
            SEND <img src={send} alt="send" />
          </button>
        </form>
      </div>
    </section>
    <Footer />
  </>
  )
}
export default Form