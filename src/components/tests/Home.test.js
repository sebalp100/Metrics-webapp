import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Home from '../Home';
import store from '../../redux/configureStore';

describe('Home', () => { });
it('Testing Home component rendering', () => {
  const component = render(
    <Provider store={store}>
      <Home />
    </Provider>,

  );
  expect(component).toMatchSnapshot();
});
