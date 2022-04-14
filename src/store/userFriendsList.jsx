import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  friendsList: [],
};

const userFriendsListSlice = createSlice({
  name: 'friendsList',
  initialState: initialState,
  reducers: {
    friendsList(state, action) {
      state.friendsList = action.payload;
    },
  },
});

export const userFriendsListActions = userFriendsListSlice.actions;
export default userFriendsListSlice.reducer;
