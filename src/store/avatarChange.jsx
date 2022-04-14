import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  avatarChange: 0,
};

const avatarChangeSlice = createSlice({
  name: 'avatarChange',
  initialState: initialState,
  reducers: {
    avatarChange(state) {
      state.avatarChange += 1;
    },
  },
});

export const avatarChangeAction = avatarChangeSlice.actions;
export default avatarChangeSlice.reducer;
