import { FETCH_WORLD_NEWS } from '../actions/index';
// const INITIAL_STATE = { all: [], world: []}

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WORLD_NEWS:
    return [ ...state, action.payload ]
  }
  return state;
}
