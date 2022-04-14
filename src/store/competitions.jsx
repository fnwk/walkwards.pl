import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  competitions: [],
};

const competitionsSlice = createSlice({
  name: 'competitions',
  initialState: initialState,
  reducers: {
    competitions(state, action) {
      state.competitions = action.payload;
    },
  },
});

export const competitionsAction = competitionsSlice.actions;
export default competitionsSlice.reducer;
