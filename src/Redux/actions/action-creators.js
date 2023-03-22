import { GET_POKES, DELETE_POKE, CLEAR, GET_POKE_BY_ID, GET_TYPES, GET_POKE_BY_NAME, SORT_AZ, SORT_ZA, FILTER_TYPES, FILTER_DATA_SOURCE, FILTER_ATTACK } from "./action-types";
import axios from 'axios'

const getPokes = () => {
  return async (dispatch) => {
    try {
      const { data: pokes } = await axios.get('https://pokerun-api.onrender.com/pokemons/')
      dispatch({
        type: GET_POKES,
        payload: pokes
      })
    }
    catch (error) {
      return error.message
    }
  }
}

const getTypes = () => {
  return async (dispatch) => {
    try {
      const { data: types } = await axios.get('https://pokerun-api.onrender.com/types')
      dispatch({
        type: GET_TYPES,
        payload: types
      })

    }
    catch (error) {
      return error.message
    }
  }
}

const getPokeByID = (id) => {
  return async (dispatch) => {
    try {
      const { data: pokeByID } = await axios.get(`https://pokerun-api.onrender.com/pokemons/${id}`)
      dispatch({
        type: GET_POKE_BY_ID,
        payload: pokeByID
      })
    }
    catch (error) {
      return error.message
    }
  }
}

const getByName = (name) => {
  return async (dispatch) => {
    if (name) {
      try {
        const { data: searched } = await axios.get(`https://pokerun-api.onrender.com/pokemons?name=${name}`)
        dispatch({
          type: GET_POKE_BY_NAME,
          payload: searched
        })
      }
      catch (error) {
        return error.message
      }
    }
    else return null
  }
}

const sortAZ = (payload) => {
  return ({
    type: SORT_AZ,
    payload
  })
}

const sortZA = (payload) => {
  return ({
    type: SORT_ZA,
    payload
  })
}

const filterTypes = (payload) => {
  return ({
    type: FILTER_TYPES,
    payload
  })
}

const filterDataSource = (payload) => {
  return ({
    type: FILTER_DATA_SOURCE,
    payload
  })
}

const filterAttack = (payload) => {
  return ({
    type: FILTER_ATTACK,
    payload
  })
}

const deletePokeById = (id) => {
  return {
    type: DELETE_POKE,
    payload: id
  }
}

const clearAll = () => {
  return {
    type: CLEAR,
    payload: []
  }
}


export { getPokes, getPokeByID, deletePokeById, clearAll, getTypes, getByName, sortAZ, filterTypes, filterDataSource, sortZA, filterAttack }