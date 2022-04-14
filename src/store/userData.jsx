import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  email: '',
  avatar: '',
  placeInRank: 0,
  token: '',
  goal: 0,
  id: 0,
  accountPrivacy: 0,
  weeklyActivity: [],
};

const userDataSlice = createSlice({
  name: 'userData',
  initialState: initialState,
  reducers: {
    username(state, action) {
      state.username = action.payload;
    },
    email(state, action) {
      state.email = action.payload;
    },
    avatar(state, action) {
      state.avatar = action.payload;
    },
    walkcoins(state, action) {
      state.walkcoins = action.payload;
    },
    placeInRank(state, action) {
      state.placeInRank = action.payload;
    },
    token(state, action) {
      state.token = action.payload;
    },
    goal(state, action) {
      state.goal = action.payload;
    },
    id(state, action) {
      state.id = action.payload;
    },
    accountPrivacy(state, action) {
      state.accountPrivacy = action.payload;
    },
    weeklyActivity(state, action) {
      state.weeklyActivity = action.payload;
    },
  },
});

export const userDataActions = userDataSlice.actions;
export default userDataSlice.reducer;
