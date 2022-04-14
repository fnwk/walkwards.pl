import {
  faCoins,
  faFire,
  faShoePrints,
  faStepForward,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import useFetch from '../../../hooks/useFetch';
import {
  Bar,
  BarChart,
  CartesianGrid,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  PolarAngleAxis,
  AreaChart,
  Area,
} from 'recharts';

const Grid = () => {
  const monthlyActivityReq = useFetch(
    'https://backend.walkwards.pl/User/GetActivity',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: useSelector((state) => state.userData.token),
        id: useSelector((state) => state.userData.id),
        dayCount: 30,
      }),
    }
  );

  const userData = useSelector((state) => state.userData);
  const todaySteps = [
    {
      name: 'Kroki',
      kroki: userData.weeklyActivity[userData.weeklyActivity.length - 1].y,
    },
  ];
  const [monthlyActivityData, setMonthlyActivityData] = useState([]);
  const circleSize = '100%';
  const weekday = ['pn', 'wt', 'śr', 'czw', 'pt', 'sob', 'niedz'];
  const userFriends = useSelector((state) => state.userFriendsList.friendsList);
  const [randomFriend, setRandomFriend] = useState({
    username: '',
    steps: 0,
    avatar: false,
  });

  const [avatarSrc, setAvatarSrc] = useState('');

  const weeklySteps = userData.weeklyActivity.map((day) => {
    const dayOfWeek = new Date(day.x);
    return { name: weekday[dayOfWeek.getDay()], kroki: day.y };
  });

  useEffect(() => {
    setRandomFriend(
      userFriends[
        Math.floor(
          Math.random() * (0 - userFriends.length) + userFriends.length
        )
      ]
    );
  }, [userFriends]);

  useEffect(async () => {
    if (randomFriend.avatar) {
      setAvatarSrc(`https://avatars.walkwards.pl/${randomFriend.id + '.txt'}`);
    } else {
      setAvatarSrc('https://avatars.walkwards.pl/default.txt');
    }

    const monthlyActivityResponse = await monthlyActivityReq.sendRequest();
    const responseData = await monthlyActivityResponse.json();
    setMonthlyActivityData(responseData);
    console.log(randomFriend.id);
  }, [randomFriend.avatar]);

  return (
    <div className='grid md:grid-cols-4 grid-cols-1 gap-6 md:pt-0 pt-[150vh]'>
      <div className='flex items-center px-10 bg-white p-6 rounded-2xl shadow-lg md:row-span-2'>
        <div className='mx-auto flex items-center text-wwGreenF'>
          <FontAwesomeIcon icon={faCoins} className='text-7xl mr-6' />
          <p className='text-3xl font-bold'>
            {useSelector((state) => state.userData.walkcoins)}
          </p>
        </div>
      </div>
      <div className='bg-white p-6 rounded-2xl shadow-lg md:row-span-2 md:col-span-2'>
        <ResponsiveContainer>
          <AreaChart data={monthlyActivityData}>
            <defs>
              <linearGradient id='gradient' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='#77E5CD' stopOpacity={0.9} />
                <stop offset='95%' stopColor='#77E5CD' stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <Tooltip />
            <Area
              type='monotone'
              dataKey='y'
              stroke='#77E5CD'
              fillOpacity={1}
              fill='url(#gradient)'
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className='bg-white flex items-center px-8 p-6 rounded-2xl shadow-lg text-2xl text-wwGreenF'>
        <FontAwesomeIcon icon={faShoePrints} />
        <p className='ml-10'>
          {userData.weeklyActivity[userData.weeklyActivity.length - 1].y} Kroków
        </p>
      </div>
      <div className='bg-white flex items-center px-8 p-6 rounded-2xl shadow-lg text-2xl text-red'>
        <FontAwesomeIcon icon={faFire} />
        <p className='ml-10'>
          {Math.floor(
            userData.weeklyActivity[userData.weeklyActivity.length - 1].y *
              0.0404
          )}{' '}
          Kcal
        </p>
      </div>
      <div className='flex flex-col text-center bg-white rounded-2xl shadow-lg overflow-hidden md:row-span-4 relative'>
        <h1 className='text-2xl font-bold my-4 text-wwGreenF h-[10%] mx-auto w-full'>
          Losowy znajomy:
        </h1>
        <div className='flex items-center w-full h-[75%]'>
          <div className='flex flex-col h-full justify-around py-4'>
            <div className='w-1/3 mx-auto'>
              <div className='rounded-full overflow-hidden shadow-lg'>
                <img src={avatarSrc} alt='' />
              </div>
            </div>
            <h1 className='text-2xl font-bold'>{randomFriend.username}</h1>
          </div>
        </div>
        <div className='flex items-center w-full h-[15%] bg-wwGreenF text-2xl text-white justify-around px-[32%]'>
          <FontAwesomeIcon icon={faShoePrints} />
          <h1 className=' font-bold'>{randomFriend.steps}</h1>
        </div>
      </div>
      <div className='flex items-center md:flex-row flex-col bg-white rounded-2xl shadow-lg md:row-span-4 md:col-span-3 md:h-[38vh] h-[90vh] md:mb-0 mb-36 '>
        <div className='float-left md:w-[40%] w-full h-3/4'>
          <ResponsiveContainer>
            <RadialBarChart
              width={circleSize}
              height={circleSize}
              innerRadius='70%'
              outerRadius='100%'
              barSize={30}
              data={todaySteps}
              dataKey='kroki'
              startAngle={90}
              endAngle={-270}>
              <PolarAngleAxis
                type='number'
                domain={[0, userData.goal]}
                angleAxisId={0}
                tick={false}
              />
              <RadialBar
                background
                clockWise
                dataKey='kroki'
                cornerRadius={circleSize / 2}
                fill='#77E5CD'
              />
              <text
                x='50%'
                y='50%'
                textAnchor='middle'
                dominantBaseline='middle'
                className='progress-label text-4xl font-bold fill-wwGreenF'>
                {userData.weeklyActivity[userData.weeklyActivity.length - 1].y}
              </text>
              <text
                x='50%'
                y='57%'
                textAnchor='middle'
                dominantBaseline='middle'
                className='progress-label text-lg font-light'>
                {userData.goal}
              </text>
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
        <div className='float-right md:w-[60%] w-full h-5/6 p-6 rounded-2xl '>
          <ResponsiveContainer>
            <BarChart data={weeklySteps}>
              <CartesianGrid strokeDasharray='4 10' />
              <XAxis dataKey='name' />
              <Tooltip />
              <Bar
                barSize={35}
                dataKey='kroki'
                fill='#77E5CD'
                radius={[5, 5, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Grid;
