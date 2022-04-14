import ForgotPasswordContainerL from '../../components/ForgotPasswordPage/ForgotPasswordContainerR';
import ForgotPasswordContainerR from '../../components/ForgotPasswordPage/ForgotPasswordContainerL';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const ResetPage = () => {
  return (
    <div className='w-screen h-screen'>
      <Link to='/login' className='absolute top-5 left-5 text-wwGreenF'>
        <FontAwesomeIcon icon={faAngleLeft} size='3x' />
      </Link>
      <ForgotPasswordContainerL />
      <ForgotPasswordContainerR />
    </div>
  );
};

export default ResetPage;
