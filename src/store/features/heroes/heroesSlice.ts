import {createSlice} from '@reduxjs/toolkit';

import {IHero} from '@app/sharedInterfaces/Hero';

export type HeroState = {
  heroes: IHero[];
  loading: boolean;
};

const initialState: HeroState = {
  heroes: [],
  loading: false,
};

export const heroesSlice = createSlice({
  name: 'heroes',
  initialState,

  reducers: {
    getHeroes() {}, // that will allow access action type by getHeroes.type
    setHeroes: (state, action) => {
      return {...state, heroes: action.payload};
    },
    setLoading: (state, action) => {
      return {...state, loading: action.payload};
    },
  },
});

export const {getHeroes, setHeroes, setLoading} = heroesSlice.actions;

export default heroesSlice.reducer;
