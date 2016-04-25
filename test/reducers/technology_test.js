import { expect } from '../test_helper';
import technologyReducer from '../../src/reducers/reducer_technology';
import { FETCH_TECHNOLOGY_NEWS} from '../../src/actions/index'

describe('Sports Reducer', () => {
  it('handles action with unknown type', () => {
    expect(technologyReducer(undefined, {})).to.eql([])
  });

  it('handles action of type FETCH_TECHNOLOGY_NEWS', () => {
    const action = { type: FETCH_TECHNOLOGY_NEWS, payload: 'new news' }
    expect(technologyReducer([], action)).to.eql(['new news'])
  })
})
