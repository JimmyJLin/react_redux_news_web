import { renderComponent, expect } from '../test_helper';
import Header from '../../src/components/header';

describe('Header', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Header)
  })

  it('shows an LI for each Links', () => {
    expect(component.find('li').length).to.equal(6);
  })
})
