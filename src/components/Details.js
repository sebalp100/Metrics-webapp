import React from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removePlanet } from '../redux/home/homeSlice';

const Details = () => {
  const planets = useSelector((state) => state.planets.planets);
  const reservedMissions = planets.filter((mission) => mission.details);
  const dispatch = useDispatch();

  return (
    <div>
      {reservedMissions.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="missionList">
          <NavLink
            to="/"
            className="navLink"
          >
            <button aria-label="back" type="button" onClick={() => dispatch(removePlanet(planets.id))}>&#60;</button>
          </NavLink>
          {planets && (
            <div>
              {
                reservedMissions.map((mission) => (
                  <div key={mission.id}>
                    {mission.moons === null ? (
                      <p>No moons</p>
                    ) : (
                      <ul>
                        {mission.moons.map((moon) => (
                          <div key={nanoid()}>
                            {moon.moon}
                            Gravity:&nbsp;
                            {mission.gravity}
                          </div>
                        ))}
                      </ul>
                    )}
                  </div>
                ))
              }
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Details;
