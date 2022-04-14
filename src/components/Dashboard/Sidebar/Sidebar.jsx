import React, { useState } from 'react';

import UserSide from './UserSide';
import SidebarNav from './SidebarNav';
import SignOut from './SignOut';

const Sidebar = () => {
  const [navWidth, setNavWidth] = useState(5);

  return (
    <nav
      className={`md:flex h-screen w-[${navWidth}vw] bg-white overflow-hidden drop-shadow-2xl fixed transition-all z-30 duration-500 hidden`}
      onMouseOver={() => {
        setNavWidth(15);
      }}
      onMouseOut={() => {
        setNavWidth(5);
      }}>
      <div className='flex flex-col text-2xl w-[15vw] h-full absolute'>
        <UserSide />
        <SidebarNav navWidth={navWidth} />
        <SignOut navWidth={navWidth} />
      </div>
    </nav>
  );
};

export default Sidebar;
