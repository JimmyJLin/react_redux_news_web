import { combineReducers } from 'redux';
import WorldReducer from './reducer_world';

const rootReducer = combineReducers({
  world: WorldReducer
})

export default rootReducer;
