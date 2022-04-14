import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userChallenges: [],
};

const userChallengesSlice = createSlice({
  name: 'userChallenges',
  initialState: initialState,
  reducers: {
    userChallenges(state, action) {
      state.userChallenges = action.payload;
    },
  },
});

export const userChallengesAction = userChallengesSlice.actions;
export default userChallengesSlice.reducer;
