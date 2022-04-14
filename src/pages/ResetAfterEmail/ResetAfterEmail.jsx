import React from 'react';
import ResetForm from '../../components/ResetAfterEmail/ResetForm';

const ResetAfterEmail = () => {
  return (
    <div className='mx-auto md:w-[40vw] text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
      <h1 className='text-6xl my-2 font-extrabold text-wwGreenF font-wwGreenF'>Zresetuj hasło</h1>
      <ResetForm />
    </div>
  );
};

export default ResetAfterEmail;
