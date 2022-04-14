import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rank: [],
  globalRank: [],
};

const userRankSlice = createSlice({
  name: 'userData',
  initialState: initialState,
  reducers: {
    rank(state, action) {
      state.rank = action.payload;
    },
    globalRank(state, action) {
      state.globalRank = action.payload;
    },
    addNewItems(state, action) {
      state.rank = [...state.rank, ...action.payload];
    },
    addNewItemsGlobal(state, action) {
      state.globalRank = [...state.globalRank, ...action.payload];
    },
  },
});

export const userRankActions = userRankSlice.actions;
export default userRankSlice.reducer;
