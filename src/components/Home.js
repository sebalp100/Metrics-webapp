import React from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { showPlanet } from '../redux/home/homeSlice';
import logo from '../assets/solar-system.png';
import earth from '../assets/worldwide.png';
import venus from '../assets/venus.png';
import mars from '../assets/mars.png';
import mercury from '../assets/mercury.png';
import saturn from '../assets/saturn.png';
import neptune from '../assets/neptune.png';
import jupiter from '../assets/jupiter.png';
import uranus from '../assets/uranus.png';

const Home = () => {
  const planets = useSelector((state) => state.planets.planets);
  const moon = planets.map((planet) => planet.moons);
  const amount = moon.map((count) => count);
  const moons = amount.map((item) => (item === null ? [] : item));

  const dispatch = useDispatch();

  return (
    <div>
      {planets.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div>
          {planets && (
            <>
              <div className="background">
                <img className="backImage" alt="icon" src={logo} />
                <div className="title">
                  <h1>SOLAR SYSTEM</h1>
                  <h2>206 moons</h2>
                </div>
              </div>
              <h3 className="stats">STATS BY PLANET</h3>
              <div className="planetList">
                <ul className="list">
                  {
                    planets.map((planet) => (
                      <NavLink
                        key={planet.id}
                        to="/Details"
                        className="navLink"
                      >
                        <button type="button" className="planet" key={planet.id} onClick={() => dispatch(showPlanet(planet.id))}>

                          {planet.id === 'uranus' ? (
                            <div>
                              <img className="backImage" alt="planet" src={uranus} />
                              <p>
                                {planet.name}
                                {planet.moons.length}
                                Moons
                              </p>
                            </div>
                          ) : null}
                          {planet.id === 'terre' ? <img className="backImage" alt="planet" src={earth} /> : null}
                          {planet.id === 'venus' ? <img className="backImage" alt="planet" src={venus} /> : null}
                          {planet.id === 'mars' ? <img className="backImage" alt="planet" src={mars} /> : null}
                          {planet.id === 'jupiter' ? <img className="backImage" alt="planet" src={jupiter} /> : null}
                          {planet.id === 'neptune' ? <img className="backImage" alt="planet" src={neptune} /> : null}
                          {planet.id === 'saturne' ? <img className="backImage" alt="planet" src={saturn} /> : null}
                          {planet.id === 'mercure' ? <img className="backImage" alt="planet" src={mercury} /> : null}
                        </button>
                      </NavLink>
                    ))
                  }
                </ul>
                <ul className="list">
                  {moons.map((moon) => (
                    <li className="moonNumber" key={nanoid()}>
                      Moons:&nbsp;
                      {moon.length}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
