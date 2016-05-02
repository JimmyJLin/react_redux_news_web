import { FETCH_BUSINESS_NEWS } from '../actions/index';
// const INITIAL_STATE = { business: null}

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_BUSINESS_NEWS:
    return [ ...state, action.payload.data ]
  }
  return state;
}
