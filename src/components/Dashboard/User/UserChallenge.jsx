const UserChallenge = () => {
  return (
    <div className='flex flex-col flex-wrap w-1/3 h-full bg-[#ebedeb] rounded-lg shadow-lg'>
      <div className='flex items-center justify-around mx-auto'>
        <h1 className=' text-6xl font-bold'>120</h1>
        <p className='w-1/2 text-sm mx-auto'>WARTOŚĆ WYZWANIA</p>
      </div>
      <div className='flex items-center justify-around mx-auto'>
        <h1 className=' text-6xl font-bold'>12</h1>
        <p className='w-1/2 text-sm mx-auto'>POZOSTAŁO DO KOŃCA</p>
      </div>
    </div>
  );
};

export default UserChallenge;
