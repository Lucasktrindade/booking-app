import axios from 'axios'

export function fetchHouses(place) {
  const request = axios.get('http://www.mocky.io/v2/5ba843523200007700e2ea21')
  return {
    type: 'FETCH_HOUSES',
    payload: request
  }
}
