import { faBell, faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/Global/logoGradient.webp';

const Header = ({ openNotifications }) => {
  return (
    <>
      <header className='flex items-center md:w-[95vw] w-screen h-[7vh] bg-white shadow-lg fixed right-0 top-0 z-20 md:px-12 px-6'>
        <img src={Logo} alt='' className='h-full' />
        <div className='md:text-2xl text-lg ml-auto text-wwGreenF'>
          <button onClick={openNotifications} className='cursor-pointer'>
            <FontAwesomeIcon className='mx-4' icon={faBell} />
          </button>
          <Link to='settings'>
            <FontAwesomeIcon className='mx-4' icon={faCog} />
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
