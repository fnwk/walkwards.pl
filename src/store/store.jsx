import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import userDataSlice from './userData';
import userRankSlice from './userRank';
import userFriendsListSlice from './userFriendsList';
import userChallengesSlice from './userChallenges';
import avatarChangeSlice from './avatarChange';
import notificationSlice from './notifications';
import guildsSlice from './guilds';
import competitionsSlice from './competitions';

import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';

const reducers = combineReducers({
  userData: userDataSlice,
  userRank: userRankSlice,
  userFriendsList: userFriendsListSlice,
  userChallenges: userChallengesSlice,
  avatarChange: avatarChangeSlice,
  notifications: notificationSlice,
  guilds: guildsSlice,
  competitions: competitionsSlice,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export default store;
