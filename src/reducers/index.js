import { combineReducers } from "redux";

function fetchHouses (state = [], action) {
  switch (action.type) {
    case 'FETCH_HOUSES':
      return action.payload.data.houses
  }
  return state
}

function fetchDetailHouse (state = {}, action) {
  switch (action.type) {
    case 'FETCH_DETAIL_HOUSE':
      return action.payload.data.house
  }
  return state
}

const appReducer = combineReducers({
  houses: fetchHouses,
  house: fetchDetailHouse
})

export default appReducer
