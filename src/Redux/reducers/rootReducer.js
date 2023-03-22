import { GET_POKES, DELETE_POKE, CLEAR, GET_POKE_BY_ID, GET_TYPES, GET_POKE_BY_NAME, SORT_AZ, SORT_ZA, FILTER_TYPES, FILTER_DATA_SOURCE, FILTER_ATTACK } from "../actions/action-types"

const initialState = {
  pokes: [],
  backupPokes: [],
  details: '',
  types: [],
  pokeByName: [],
  clickedForName: false
}
const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case GET_POKES:
      return {
        ...state,
        pokes: payload,
        backupPokes: payload
      }

    case GET_POKE_BY_ID:
      return {
        ...state,
        details: payload
      }

    case GET_TYPES:
      return {
        ...state,
        types: payload
      }

    case GET_POKE_BY_NAME:
      return {
        ...state,
        pokes: payload,
        clickedForName: true
      }

    case FILTER_TYPES:
      let filteredType = []
      for (let i = 0; i < state.backupPokes.length; i++) {
        if (payload === 'All') filteredType = state.backupPokes
        else {
          let poke = state.backupPokes[i]
          for (let j = 0; j < poke.Types.length; j++) {
            let type = poke.Types[j].name
            if (type === payload) {
              filteredType.push(poke)
            }
          }
        }
      }

      return {
        ...state,
        pokes: filteredType
      }

    case FILTER_DATA_SOURCE:
      let filteredDataSource = payload === 'db' ? state.backupPokes.filter(poke => poke.createdInDb) : payload === 'api' ? state.backupPokes.filter(poke => !poke.createdInDb) : state.backupPokes
      return {
        ...state,
        pokes: filteredDataSource
      }


    case SORT_AZ:
      let sortedAZ = state.backupPokes.sort((a, b) => a.name.toUpperCase().localeCompare(b.name.toUpperCase()))
      return {
        ...state,
        pokes: sortedAZ
      }

    case SORT_ZA:
      let sortedZA = state.backupPokes.sort((a, b) => b.name.toUpperCase().localeCompare(a.name.toUpperCase()))
      return {
        ...state,
        pokes: sortedZA
      }

    case FILTER_ATTACK:
      let filterAttack = []
      if (payload === 'des') filterAttack = state.backupPokes.sort((a, b) => a.attack < b.attack ? 1 : a.attack > b.attack ? -1 : 0)
      if (payload === 'asc') filterAttack = state.backupPokes.sort((a, b) => a.attack > b.attack ? 1 : a.attack < b.attack ? -1 : 0)
      if (payload === 'reset') filterAttack = state.pokes
      return {
        ...state,
        pokes: filterAttack
      }


    case DELETE_POKE:
      return {
        ...state,
        pokes: state.pokes.filter(poke => poke.id !== payload)
      }

    case CLEAR:
      return {
        ...state,
        pokes: payload
      }

    default:
      return {
        ...state
      }
  }
}

export default rootReducer