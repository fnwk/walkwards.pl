import React, { useState } from 'react';

const ListType = ({ first, second, changeList }) => {
  const [activeList, setActiveList] = useState(0);

  const changeActiveList = () => {
    activeList === 0 ? setActiveList(1) : setActiveList(0);
    changeList();
  };

  return (
    <div className='w-[300px] h-[40px] mt-[40vh] px-2 py-1 mx-auto my-12 rounded-full bg-white shadow-lg'>
      <button
        onClick={changeActiveList}
        className={`w-1/2 h-full  text-lg font-semibold rounded-full ${
          activeList === 0 && 'bg-gradient-to-tr from-wwGreenF to-wwGreenS'
        }`}>
        {first}
      </button>
      <button
        onClick={changeActiveList}
        className={`w-1/2 h-full  text-lg font-semibold rounded-full ${
          activeList === 1 && 'bg-gradient-to-tr from-wwGreenF to-wwGreenS'
        }`}>
        {second}
      </button>
    </div>
  );
};

export default ListType;
