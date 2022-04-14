import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const SignOutIcon = () => {
  return <FontAwesomeIcon icon={faSignOutAlt} className='text-red' />;
};

export default SignOutIcon;
