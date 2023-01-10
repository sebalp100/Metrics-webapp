import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Details from '../Details';
import store from '../../redux/configureStore';

describe('Details', () => { });
it('Testing Details component rendering', () => {
  const component = render(
    <Provider store={store}>
      <Details />
    </Provider>,

  );
  expect(component).toMatchSnapshot();
});
