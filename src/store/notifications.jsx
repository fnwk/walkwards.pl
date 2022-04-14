import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notifications: [],
};

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState: initialState,
  reducers: {
    notifications(state, action) {
      state.notifications = action.payload;
    },
  },
});

export const notificationsAction = notificationsSlice.actions;
export default notificationsSlice.reducer;
