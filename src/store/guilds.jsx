import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  guildsRank: [],
};

const guildsSlice = createSlice({
  name: 'guilds',
  initialState: initialState,
  reducers: {
    guildsRank(state, action) {
      state.guildsRank = action.payload;
    },
  },
});

export const guildsAction = guildsSlice.actions;
export default guildsSlice.reducer;
