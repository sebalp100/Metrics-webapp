import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Home from '../Home';
import { showPlanet } from '../../redux/home/homeSlice';

describe('Home component', () => {
  let store;
  beforeEach(() => {
    store = configureStore()({
      planets: {
        planets: [
          { id: 'venus', name: 'Venus', moons: [{ name: 'Venus I' }] },
          { id: 'terre', name: 'La Terre', moons: [{ name: 'La Lune' }] },
        ],
        loading: false,
        error: '',
        refresh: false,
      },
    });
  });

  it('renders planets list', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );
    const planetList = screen.getByTestId('planet-list');
    expect(planetList).toBeInTheDocument();
  });
  it('should filter the planet list', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );
    const input = screen.getByPlaceholderText('Search Planet');
    fireEvent.change(input, { target: { value: 'V' } });
    const planetList = screen.getByTestId('planet-list');
    expect(planetList).toHaveTextContent('Venus');
    expect(planetList).not.toHaveTextContent('Mercure');
    expect(planetList).not.toHaveTextContent('Terre');
  });
  it('should dispatch showPlanet action on planet click', () => {
    const spy = jest.spyOn(store, 'dispatch');
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );
    const planet = screen.getByText('Venus');
    fireEvent.click(planet);
    expect(spy).toHaveBeenCalledWith(showPlanet('venus'));
  });
});
