import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Details from '../Details';
import { removePlanet } from '../../redux/home/homeSlice';

describe('Details component', () => {
  let store;
  beforeEach(() => {
    store = configureStore()({
      planets: {
        planets: [
          {
            id: 'terre',
            name: 'La Terre',
            moons: [{ moon: 'La Lune' }],
            gravity: '9.8',
            details: true,
          },
        ],
        loading: false,
        error: '',
        refresh: false,
      },
    });
  });

  it('renders the details of the selected planet', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Details />
        </BrowserRouter>
      </Provider>,
    );
    const planetName = screen.getByText(/Terre/i);
    expect(planetName).toBeInTheDocument();
    const moonName = screen.getByText('La Lune');
    expect(moonName).toBeInTheDocument();
  });

  it('dispatches the removePlanet action on back button click', () => {
    const spy = jest.spyOn(store, 'dispatch');
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Details />
        </BrowserRouter>
      </Provider>,
    );
    const backButton = screen.getByText('<');
    fireEvent.click(backButton);
    expect(spy).toHaveBeenCalledWith(removePlanet(undefined));
  });
});
