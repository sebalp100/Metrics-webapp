import React from 'react';
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

  const dispatch = useDispatch();

  return (
    <div>
      {planets.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div>
          {planets && (
            <>
              <div className="header">
                <div />
                <h3>Number of Moons</h3>
                <input />
              </div>
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
                              <h2>{planet.name}</h2>
                              <h3>{planet.moons !== null ? planet.moons.length : 0}</h3>
                            </div>
                          ) : null}
                          {planet.id === 'terre' ? (
                            <div>
                              <img className="backImage" alt="planet" src={earth} />
                              <h2>{planet.name}</h2>
                              <h3>{planet.moons !== null ? planet.moons.length : 0}</h3>
                            </div>
                          ) : null}
                          {planet.id === 'venus' ? (
                            <div>
                              <img className="backImage" alt="planet" src={venus} />
                              <h2>{planet.name}</h2>
                              <h3>{planet.moons !== null ? planet.moons.length : 0}</h3>
                            </div>
                          ) : null}
                          {planet.id === 'mars' ? (
                            <div>
                              <img className="backImage" alt="planet" src={mars} />
                              <h2>{planet.name}</h2>
                              <h3>{planet.moons !== null ? planet.moons.length : 0}</h3>
                            </div>
                          ) : null}
                          {planet.id === 'jupiter' ? (
                            <div>
                              <img className="backImage" alt="planet" src={jupiter} />
                              <h2>{planet.name}</h2>
                              <h3>{planet.moons !== null ? planet.moons.length : 0}</h3>
                            </div>
                          ) : null}
                          {planet.id === 'neptune' ? (
                            <div>
                              <img className="backImage" alt="planet" src={neptune} />
                              <h2>{planet.name}</h2>
                              <h3>{planet.moons !== null ? planet.moons.length : 0}</h3>
                            </div>
                          ) : null}
                          {planet.id === 'saturne' ? (
                            <div>
                              <img className="backImage" alt="planet" src={saturn} />
                              <h2>{planet.name}</h2>
                              <h3>{planet.moons !== null ? planet.moons.length : 0}</h3>
                            </div>
                          ) : null}
                          {planet.id === 'mercure' ? (
                            <div>
                              <img className="backImage" alt="planet" src={mercury} />
                              <h2>{planet.name}</h2>
                              <h3>{planet.moons !== null ? planet.moons.length : 0}</h3>
                            </div>
                          ) : null}
                        </button>
                      </NavLink>
                    ))
                  }
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
