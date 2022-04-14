import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Challenge from './Challenge';
import IncomingChallenge from './IncomingChallenge';

const ChallengesList = (props) => {
  const userChallenges = useSelector(
    (state) => state.userChallenges.userChallenges
  );

  const [yourList, setYourList] = useState([]);
  const [incomingList, setIncomingList] = useState([]);

  /*
    Challenges status:
    0 - received but not accepted
    1 - sent but not accepted
    2 - sent and accepted (active, you sent request)
    3 - received and accepted (active, opponent sent request)a

    Active List:
    0 - statuses: 1,2,3
    1 - statuses: 0
  */

  const removeChallenge = (id) => {
    setIncomingList(incomingList.filter((challenge) => challenge.id !== id));
  };

  useEffect(() => {
    userChallenges.map((challenge) => {
      console.log(challenge.status);
      if (challenge.status !== 0) {
        setYourList((prev) => [
          ...prev,
          <Challenge
            user1={challenge.user1.username}
            user2={challenge.user2.username}
            user1Steps={challenge.actualStepsUser1}
            user2Steps={challenge.actualStepsUser2}
            endDate={challenge.endDate}
            cid={challenge.id}
            value={challenge.betValue}
            status={challenge.status}
            time={challenge.dayCount}
            key={challenge.id}
          />,
        ]);
      } else if (challenge.status === 0) {
        setIncomingList((prev) => [
          ...prev,
          <IncomingChallenge
            user1={challenge.user1.username}
            user2={challenge.user2.username}
            value={challenge.betValue}
            id={challenge.id}
            key={challenge.id}
            removeChallenge={removeChallenge}
          />,
        ]);
      }
    });

    return () => {
      setIncomingList([]);
      setYourList([]);
    };
  }, [userChallenges]);

  return <ul>{props.activeList ? incomingList : yourList}</ul>;
};

export default ChallengesList;
