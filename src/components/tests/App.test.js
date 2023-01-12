import '@testing-library/jest-dom/extend-expect';
import store from '../../redux/configureStore';

describe('Home redux state tests', () => {
  it('Should initially set planets to an empty array', () => {
    const state = store.getState().planets;
    expect(state.planets).toEqual([]);
  });
});
