import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { Link } from 'react-router-dom';

const AccountActivated = () => {
  return (
    <div className='md:w-[60vw] w-screen left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute text-center'>
      <h1 className='text-5xl text-wwGreenF font-bold'>
        Konto zostało aktywowane
      </h1>
      <p className='md:text-xl md:text-md text-sm md:w-1/2 w-2/3 mx-auto my-4 mb-12'>
        Aktywacja poszła pomyślnie kliknij w przycisk poniżej aby przejść do
        aplkacji
      </p>
      <MobileView>
        <a
          href='walkards://'
          className='text-white text-2xl bg-gradient-to-t from-wwGreenF to-wwGreenS py-2 px-4 my-12 rounded-md'>
          Przejdź do aplikacji
        </a>
      </MobileView>
      <BrowserView>
        <Link
          to='/'
          className='text-white text-2xl bg-gradient-to-t from-wwGreenF to-wwGreenS py-2 px-4 my-12 rounded-md'>
          Przejdź do aplikacji webowej
        </Link>
      </BrowserView>
    </div>
  );
};

export default AccountActivated;
