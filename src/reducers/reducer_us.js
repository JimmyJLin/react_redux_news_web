import { FETCH_US_NEWS } from '../actions/index';
// const INITIAL_STATE = { all: [], world: []}

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_US_NEWS:
    return [ ...state, action.payload.data ]
  }
  return state;
}
