import { expect } from '../test_helper';
import businessReducer from '../../src/reducers/reducer_business';
import { FETCH_BUSINESS_NEWS} from '../../src/actions/index'

describe('Business Reducer', () => {
  it('handles action with unknown type', () => {
    expect(businessReducer(undefined, {})).to.eql([])
  });

  it('handles action of type FETCH_BUSINESS_NEWS', () => {
    const action = { type: FETCH_BUSINESS_NEWS, payload: 'new news' }
    expect(businessReducer([], action)).to.eql(['new news'])
  })
})
