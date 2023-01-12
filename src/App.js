import './App.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { fetchPlanets } from './redux/home/homeSlice';
import Home from './components/Home';
import Details from './components/Details';

const App = () => {
  const refresh = useSelector((state) => state.planets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPlanets());
  }, [dispatch, refresh.refresh]);

  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Details" element={<Details />} />
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default App;
