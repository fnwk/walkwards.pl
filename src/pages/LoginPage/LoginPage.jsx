import LoginContainerL from '../../components/LoginPage/LoginContainerL';
import LoginContainerR from '../../components/LoginPage/LoginContainerR';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import InProgress from '../../components/PageMessages/InProgress';

const LoginPage = () => {
  return (
    <div className='w-screen h-screen'>
      {/* <InProgress /> */}
      <Link to='/' className='absolute top-5 left-5 text-white'>
        <FontAwesomeIcon icon={faAngleLeft} size='3x' />
      </Link>
      <LoginContainerL />
      <LoginContainerR />
    </div>
  );
};

export default LoginPage;
