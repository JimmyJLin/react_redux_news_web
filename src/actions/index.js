import axios from 'axios';

export const FETCH_US_NEWS = 'FETCH_US_NEWS'
export const FETCH_WORLD_NEWS = 'FETCH_WORLD_NEWS'
export const FETCH_BUSINESS_NEWS = 'FETCH_BUSINESS_NEWS'
export const FETCH_TECHNOLOGY_NEWS = 'FETCH_TECHNOLOGY_NEWS'
export const FETCH_SPORTS_NEWS = 'FETCH_SPORTS_NEWS'


const ROOT_RUL = 'http://api.nytimes.com/svc/topstories/v1'
const API_KEY = '?api-key=656fc19a0114f7cbc07fa612f2bbe510:12:61578174'

export function fetchUsNews() {
  const request = axios.get(`${ROOT_RUL}/national.json${API_KEY}`)

  return {
    type: FETCH_US_NEWS,
    payload: request
  };
}

export function fetchWorldNews() {
  const request = axios.get(`${ROOT_RUL}/world.json${API_KEY}`)

  return {
    type: FETCH_WORLD_NEWS,
    payload: request
  };
}

export function fetchBusinessNews() {
  const request = axios.get(`${ROOT_RUL}/business.json${API_KEY}`)

  console.log('Request:', request)

  return {
    type: FETCH_BUSINESS_NEWS,
    payload: request
  };
}

export function fetchTechnologyNews() {
  const request = axios.get(`${ROOT_RUL}/technology.json${API_KEY}`)

  return {
    type: FETCH_TECHNOLOGY_NEWS,
    payload: request
  };
}

export function fetchSportsNews() {
  const request = axios.get(`${ROOT_RUL}/sports.json${API_KEY}`)

  return {
    type: FETCH_SPORTS_NEWS,
    payload: request
  };
}
