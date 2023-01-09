import React from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removePlanet } from '../redux/home/homeSlice';
import terre from '../assets/worldwide.png';
import venus from '../assets/venus.png';
import mars from '../assets/mars.png';
import mercure from '../assets/mercury.png';
import saturne from '../assets/saturn.png';
import neptune from '../assets/neptune.png';
import jupiter from '../assets/jupiter.png';
import uranus from '../assets/uranus.png';

const ids = {
  terre, venus, uranus, mars, mercure, saturne, neptune, jupiter,
};

const Details = () => {
  const planets = useSelector((state) => state.planets.planets);
  const reservedMissions = planets.filter((mission) => mission.details);
  const dispatch = useDispatch();

  return (
    <div>
      {reservedMissions.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="header2">
            <NavLink
              to="/"
              className="navLink"
            >
              <button className="backButton" aria-label="back" type="button" onClick={() => dispatch(removePlanet(planets.id))}>&#60;</button>
            </NavLink>
            <h3>Planet/Moon Names</h3>
            <div />
          </div>
          <div className="missionList">
            {planets && (
              <div>
                {
                  reservedMissions.map((mission) => (
                    <div key={mission.id}>
                      <>
                        <div className="background">
                          {mission.id && <img className="backImage" alt="planet" src={ids[mission.id]} />}
                          <div className="title">
                            <h1>{mission.name}</h1>
                            <h2>
                              {mission.moons !== null ? mission.moons.length : 0}
                              &nbsp;Moons
                            </h2>
                          </div>
                        </div>
                        <h3 className="stats">PLANET/MOON GRAVITY (M.S-2.)</h3>
                        {mission.moons === null ? (
                          <div className="moonContainer">
                            <p>No moons</p>
                            Gravity:&nbsp;
                            {mission.gravity}
                          </div>
                        ) : (
                          <ul className="moonList">
                            {mission.moons.map((moon) => (
                              <div className="moonContainer" key={nanoid()}>
                                <p>{moon.moon}</p>
                                <p>
                                  Gravity:&nbsp;
                                  {mission.gravity}
                                </p>
                              </div>
                            ))}
                          </ul>
                        )}
                      </>
                    </div>
                  ))
                }
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Details;
