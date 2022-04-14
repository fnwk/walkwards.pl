import LoginForm from './LoginForm';

import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LoginContainerR = () => {
  return (
    <div className='md:w-2/3 w-full flex items-center float-right h-full text-center'>
      <div className='absolute flex items-center text-left top-4 right-6 text-red w-80'>
        <FontAwesomeIcon
          icon={faCircleExclamation}
          className='mx-5'
          size='2xl'
        />
        <p>
          Żeby założyć konto jest ci potrzebna aplikacja mobilna WalkWards!!!
        </p>
      </div>
      <div className='m-auto'>
        <h1 className='text-6xl my-2 font-extrabold text-wwGreenF font-wwGreenF'>
          Witaj ponownie
        </h1>
        <p className='text-2xl font-light md:block hidden'>
          Zaloguj się na twoje konto walkwards aby kontynuować
        </p>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginContainerR;
