import { faWalking } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import CommonChallenges from './CommonChallenges';
import UserFriendsList from './UserFriendsList';
import { BrowserView, isMobile } from 'react-device-detect';

const MoreInfo = ({ userActivity, goal, activeChallenges }) => {
  const weekday = ['pn', 'wt', 'śr', 'czw', 'pt', 'sob', 'niedz'];
  const [todaySteps, setTodaySteps] = useState(0);
  const [weeklySteps, setWeeklySteps] = useState([]);

  useEffect(() => {
    if (userActivity.length > 0) {
      setTodaySteps(userActivity[userActivity.length - 1].y);
      setWeeklySteps(
        userActivity.map((day) => {
          const dayOfWeek = new Date(day.x);
          return { name: weekday[dayOfWeek.getDay()], kroki: day.y };
        })
      );
    }
  }, [userActivity]);

  return (
    <div className=' flex flex-col justify-around w-[90vw] md:h-[110vh] h-[200vh] bg-light shadow-2xl mx-auto rounded-2xl py-6 md:px-12 px-4'>
      <div className=' grid md:grid-cols-2 md:gap-2 gap-4 '>
        <div className='md:m-6 my-[2vh] h-1/2'>
          <h1 className='font-bold text-3xl mb-4'>LICZBA KROKÓW:</h1>
          <div className='w-full h-[35vh] flex items-center bg-gradient-to-tr from-wwGreenF to-wwGreenS text-white text-center shadow-lg rounded-lg'>
            <div className='w-1/2 float-left'>
              <FontAwesomeIcon
                icon={faWalking}
                className='text-9xl w-2/3 mx-auto'
              />
            </div>
            <div className='w-1/3 float-right'>
              <h1 className='md:text-6xl text-5xl font-bold'>{todaySteps}</h1>
              <p>/{goal}</p>
            </div>
          </div>
        </div>
        <div className='md:m-6 row-span-2 my-[2vh]'>
          <h1 className='font-bold text-3xl mb-4'>ZNAJOMI:</h1>
          <div className='w-full bg-white shadow-lg rounded-lg h-[70vh] overflow-y-scroll'>
            <UserFriendsList />
          </div>
        </div>
        <div className='md:m-6 my-[2vh] h-1/2'>
          <h1 className='font-bold text-3xl mb-4'>STATYSTYKI:</h1>
          <div className='h-[35vh] bg-white shadow-lg rounded-lg md:p-8 px-4 pt-4'>
            <ResponsiveContainer>
              <BarChart data={weeklySteps}>
                <CartesianGrid strokeDasharray='4 10' />
                <XAxis dataKey='name' />
                <BrowserView>
                  <YAxis />
                </BrowserView>
                <Tooltip />
                <Bar
                  dataKey='kroki'
                  barSize={isMobile ? 20 : 40}
                  fill='#7CEFBA'
                  radius={[5, 5, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
