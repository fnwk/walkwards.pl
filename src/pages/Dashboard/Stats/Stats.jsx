import React from 'react';
import Grid from '../../../components/Dashboard/Stats/Grid';

const Stats = () => {
  return (
    <div className='w-full h-full flex flex-col justify-around px-10'>
      <div>
        <h1 className='text-3xl font-bold my-5'>TWOJE STATYSTYKI:</h1>
        <Grid />
      </div>
    </div>
  );
};

export default Stats;
