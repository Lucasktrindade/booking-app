import { combineReducers } from "redux";

function fetchHouses (state = [], action) {
  switch (action.type) {
    case 'FETCH_HOUSES':
      return action.payload.data.houses
  }
  return state
}
function HousesReducer() {
  return  [
      {"thumbnail": "https://via.placeholder.com/120x120", "name": "Título da Casa", "address": "Localização da Casa", "rate": "Melhor Lugar para Visitar"},
      {"thumbnail": "https://via.placeholder.com/120x120", "name": "Título da Casa", "address": "Localização da Casa", "rate": "Melhor Lugar para Visitar"},
      {"thumbnail": "https://via.placeholder.com/120x120", "name": "Título da Casa", "address": "Localização da Casa", "rate": "Melhor Lugar para Visitar"},
      {"thumbnail": "https://via.placeholder.com/120x120", "name": "Título da Casa", "address": "Localização da Casa", "rate": "Melhor Lugar para Visitar"},
      {"thumbnail": "https://via.placeholder.com/120x120", "name": "Título da Casa", "address": "Localização da Casa", "rate": "Melhor Lugar para Visitar"},
      {"thumbnail": "https://via.placeholder.com/120x120", "name": "Título da Casa", "address": "Localização da Casa", "rate": "Melhor Lugar para Visitar"}
    ]
}

const appReducer = combineReducers({
  houses: fetchHouses
})

export default appReducer
