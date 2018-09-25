import axios from 'axios'

export function fetchHouses(place) {
  const request = axios.get('http://www.mocky.io/v2/5ba843523200007700e2ea21')
  return {
    type: 'FETCH_HOUSES',
    payload: request
  }
}

export function fetchDetailHouse (id) {
  const request = axios.get('http://www.mocky.io/v2/5ba9c53e3100006900c2770e')
  return {
    type: 'FETCH_DETAIL_HOUSE',
    payload: request
  }
}
