import { expect } from '../test_helper';
import worldReducer from '../../src/reducers/reducer_world';
import { FETCH_WORLD_NEWS } from '../../src/actions/index'

describe('World Reducer', () => {
  
  it('handles action with unknown type', () => {
    expect(worldReducer(undefined, {})).to.eql([])
  });

  it('handles action of type FETCH_WORLD_NEWS', () => {
    const action = { type: FETCH_WORLD_NEWS, payload: 'new news' }
    expect(worldReducer([], action)).to.eql(['new news'])
  })

})
