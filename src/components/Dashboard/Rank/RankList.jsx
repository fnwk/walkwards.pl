import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { userRankActions } from '../../../store/userRank';

import User from './User';
import Winner from './Winner';

const RankList = ({ listType }) => {
  const [page, setPage] = useState(1);
  const [pageGlobal, setPageGlobal] = useState(1);

  const getNextPage = useFetch(
    'https://backend.walkwards.pl/Action/GetRanking',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: useSelector((state) => state.userData.token),
        id: useSelector((state) => state.userData.id),
        page: page,
      }),
    }
  );
  const getNextPageGlobal = useFetch(
    'https://backend.walkwards.pl/Action/GetRankingGlobal',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: useSelector((state) => state.userData.token),
        id: useSelector((state) => state.userData.id),
        page: pageGlobal,
      }),
    }
  );

  const [ref, inView] = useInView({
    threshold: 1,
  });

  const dispatch = useDispatch();

  const rankList = useSelector((state) => state.userRank.rank);
  const globalRankList = useSelector((state) => state.userRank.globalRank);

  const [currentList, setCurrentList] = useState(rankList);

  useEffect(() => {
    if (listType === 0) {
      setCurrentList(rankList);
    } else {
      setCurrentList(globalRankList);
    }
  }, [listType, rankList, globalRankList]);

  const checkAvatar = (user) => {
    if (user.avatar) {
      return `https://avatars.walkwards.pl/${user.id}.txt`;
    } else {
      return 'https://avatars.walkwards.pl/default.txt';
    }
  };

  useEffect(async () => {
    if (inView) {
      if (listType === 0) {
        const response = await getNextPage.sendRequest();
        const responseData = await response.json();

        if (response.status === 200) {
          setPage((prev) => prev + 1);
          dispatch(userRankActions.addNewItems(responseData));
        }
      } else {
        const response = await getNextPageGlobal.sendRequest();
        const responseData = await response.json();

        if (response.status === 200) {
          setPageGlobal((prev) => prev + 1);
          dispatch(userRankActions.addNewItemsGlobal(responseData));
        }
      }
    }
  }, [inView]);

  return (
    <div className='w-full bg-light'>
      <div className='md:h-[22rem] h-64 md:w-[50vw] w-[100vw] mx-auto relative'>
        {currentList.map((user, index) => {
          if (index <= 2) {
            console.log(user);
            return (
              <Link to={`../user/${user.id}`} key={user.id}>
                <Winner
                  username={user.username}
                  index={index}
                  avatar={checkAvatar(user)}
                />
              </Link>
            );
          }
        })}
      </div>
      <ul className='relative md:w-3/4 z-10 w-[90%] text-center mx-auto -mt-[5%]'>
        {currentList.map((user, index) => {
          if (index > 2) {
            return (
              <Link
                to={`../user/${user.id}`}
                key={user.id}
                ref={index % 14 && index ? ref : null}>
                <User
                  username={user.username}
                  avatar={checkAvatar(user)}
                  points={user.points}
                  place={index}
                />
              </Link>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default RankList;
