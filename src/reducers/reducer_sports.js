import { FETCH_SPORTS_NEWS } from '../actions/index';
// const INITIAL_STATE = { all: [], world: []}

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_SPORTS_NEWS:
    return [ ...state, action.payload.data ]
  }
  return state;
}
