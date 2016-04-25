import { expect } from '../test_helper';
import usReducer from '../../src/reducers/reducer_us';
import { FETCH_US_NEWS} from '../../src/actions/index'

describe('Sports Reducer', () => {
  it('handles action with unknown type', () => {
    expect(usReducer(undefined, {})).to.eql([])
  });

  it('handles action of type FETCH_US_NEWS', () => {
    const action = { type: FETCH_US_NEWS, payload: 'new news' }
    expect(usReducer([], action)).to.eql(['new news'])
  })
})
