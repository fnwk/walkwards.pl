import React from 'react';
import { Link } from 'react-router-dom';

const SidebarLink = (props) => {
  return (
    <li>
      <Link className='flex items-center w-full my-10' to={props.link}>
        <div className='w-[5vw] px-2 text-center text-wwGreenF'>{props.icon}</div>
        <h1 className='text-base mx-auto'>{props.title}</h1>
      </Link>
    </li>
  );
};

export default SidebarLink;
