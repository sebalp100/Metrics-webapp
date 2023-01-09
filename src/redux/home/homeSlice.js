/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'https://api.le-systeme-solaire.net/rest/bodies/?filter[]=isPlanet,eq,true';

const initialState = {
  loading: false,
  planets: [],
  error: '',
  refresh: false,
};

export const fetchPlanets = createAsyncThunk('planents/fetchPlanets', async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data.bodies;
});

const planetsSlice = createSlice({
  name: 'planents',
  initialState,
  reducers: {
    showPlanet: (state, action) => {
      const newPlanet = state.planets.map((mission) => {
        if (mission.id !== action.payload) return mission;
        return { ...mission, details: true };
      });
      return {
        ...state, planets: newPlanet,
      };
    },
    removePlanet: (state, action) => {
      const newPlanet = state.planets.map((mission) => {
        if (mission.mission_id !== action.payload) return mission;
        return { ...mission, details: false };
      });
      return {
        ...state, planets: newPlanet,
      };
    },
  },
  extraReducers: {
    [fetchPlanets.pending]: (state) => {
      state.loading = true;
    },
    [fetchPlanets.fulfilled]: (state, action) => {
      state.planets = action.payload;
      state.loading = false;
    },
    [fetchPlanets.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const { showPlanet, removePlanet } = planetsSlice.actions;

export default planetsSlice.reducer;
