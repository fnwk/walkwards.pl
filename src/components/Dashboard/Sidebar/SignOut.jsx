import React from 'react';
import SignOutIcon from '../../../assets/Dashboard/Navbar/SignOutIcon';

const SignOut = (props) => {
  return (
    <div className={`w-[${props.navWidth}] mt-auto mb-14 relative`}>
      <div className={`w-[5vw] text-center ${props.navWidth === 5 ? 'left-0 translate-x-0' : 'left-1/2 -translate-x-1/2'} absolute transition-all`}>
        <SignOutIcon />
      </div>
    </div>
  );
};

export default SignOut;
