import React from 'react';

import SidebarLink from './SidebarLink';

import HomeIcon from '../../../assets/Dashboard/Navbar/HomeIcon';
import RankIcon from '../../../assets/Dashboard/Navbar/RankIcon';
import FriendsIcon from '../../../assets/Dashboard/Navbar/FriendsIcon';
import ChallengesIcon from '../../../assets/Dashboard/Navbar/ChallengesIcon';

const SidebarNav = () => {
  return (
    <ul>
      <SidebarLink icon={<HomeIcon />} title='Strona Główna' link='stats' />
      <SidebarLink icon={<RankIcon />} title='Ranking' link='rank' />
      <SidebarLink icon={<FriendsIcon />} title='Przyjaciele' link='friends' />
      <SidebarLink
        icon={<ChallengesIcon />}
        title='Społeczność'
        link='community'
      />
    </ul>
  );
};

export default SidebarNav;
