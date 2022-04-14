import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../../components/Dashboard/Sidebar/Sidebar';
import Rank from './Rank/Rank';
import Stats from './Stats/Stats';
import Settings from './Settings/Settings';
import Friends from './Friends/Friends';
import MobileNavbar from '../../components/Dashboard/MobileNavbar/MobileNavbar';

import useGetFriendList from '../../hooks/useGetFriendList';
import useGetRank from '../../hooks/useGetRank';
import useGetUserActivity from '../../hooks/useGetUserActivity';
import useGetActiveChallenge from '../../hooks/useGetActiveChallenges';
import useGetNotification from '../../hooks/useGetAllNotifications';
import useGetGuildsRank from '../../hooks/useGetGuildsRank';
import useGetCompetitions from '../../hooks/useGetCompetitions';

import UserInfo from './User/UserInfo';
import Header from '../../components/Dashboard/Header/Header';
import Notification from './Notification/Notifications';
import CommunityPage from './Community/CommunityPage';

import FetchLoader from '../../components/LoadingScreens/FetchLoader';

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);

  const getFriendsList = useGetFriendList();
  const getRank = useGetRank();
  const getUserActivity = useGetUserActivity();
  const getActiveChallenge = useGetActiveChallenge();
  const getNotifications = useGetNotification();
  const getGuildsRank = useGetGuildsRank();
  const getCompetitions = useGetCompetitions();

  const [showNotifications, setShowNotifications] = useState(false);

  const changeNotificationsState = () => {
    setShowNotifications(!showNotifications);
  };

  useEffect(() => {
    getFriendsList.userFriendsHandler();
    getRank.rankHandler();
    getUserActivity.userActivity();
    getActiveChallenge.activeUserChallenges();
    getNotifications.notifications();
    getGuildsRank.guildsRank();
    getCompetitions.competitions();
  }, []);

  useEffect(() => {
    if (!getUserActivity.isLoading && !getFriendsList.isLoading) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [getFriendsList.isLoading]);

  return (
    <>
      {isLoading ? (
        <FetchLoader />
      ) : (
        <div>
          <Header openNotifications={changeNotificationsState} />
          <Sidebar />
          <MobileNavbar />
          <main className='md:w-[95vw] md:pb-0 pb-[7vh] w-screen h-screen float-right overflow-y-scroll pt-[7vh] overflow-x-hidden bg-light relative'>
            <Routes>
              <Route path='rank' element={<Rank />} />
              <Route index path='stats' element={<Stats />} />
              <Route path='settings' element={<Settings />} />
              <Route path='friends' element={<Friends />} />
              <Route path='user/:id' element={<UserInfo />} />
              <Route path='community/*' element={<CommunityPage />} />
              <Route path='*' element={<Stats />} />
            </Routes>
          </main>
          {showNotifications && (
            <Notification close={changeNotificationsState} />
          )}
        </div>
      )}
    </>
  );
};

export default Dashboard;
