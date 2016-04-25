import { expect } from '../test_helper';
import sportsReducer from '../../src/reducers/reducer_sports';
import { FETCH_SPORTS_NEWS} from '../../src/actions/index'

describe('Sports Reducer', () => {
  it('handles action with unknown type', () => {
    expect(sportsReducer(undefined, {})).to.eql([])
  });

  it('handles action of type FETCH_SPORTS_NEWS', () => {
    const action = { type: FETCH_SPORTS_NEWS, payload: 'new news' }
    expect(sportsReducer([], action)).to.eql(['new news'])
  })
})
