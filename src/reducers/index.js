import { combineReducers } from 'redux';
import ReducerNews from './reducer_news';
import WorldReducer from './reducer_world';
import UsReducer from './reducer_us';
import TechnologyReducer from './reducer_technology';
import SportsReducer from './reducer_sports';
import BusinessReducer from './reducer_business';

const rootReducer = combineReducers({
  // news: ReducerNews,
  world: WorldReducer,
  us: UsReducer,
  technology: TechnologyReducer,
  sports: SportsReducer,
  business: BusinessReducer,
})

export default rootReducer;
