import { FETCH_US_NEWS, FETCH_WORLD_NEWS, FETCH_BUSINESS_NEWS, FETCH_TECHNOLOGY_NEWS, FETCH_SPORTS_NEWS } from '../actions/index';
const INITIAL_STATE = { us: [], world: [], business: [], technology: [], sports: [] }

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_US_NEWS:
      return { ...state, us: action.payload.result};
    case FETCH_WORLD_NEWS:
      return { ...state, world: action.payload.data};
    case FETCH_BUSINESS_NEWS:
      return { ...state, business: action.payload.data};
    case FETCH_TECHNOLOGY_NEWS:
      return { ...state, technology: action.payload.data};
    case FETCH_SPORTS_NEWS:
      return { ...state, sports: action.payload.data};
    default:
      return state;
  }
}
