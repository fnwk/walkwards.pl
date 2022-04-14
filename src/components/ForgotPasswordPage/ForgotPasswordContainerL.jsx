import ForgotPasswordForm from './ForgotPasswordForm';

const ForgotPasswordContainerL = () => {
  return (
    <div className='md:w-2/3 w-full flex items-center float-left h-full text-center'>
      <div className='m-auto'>
        <h1 className='text-6xl my-2 font-extrabold text-wwGreenF font-wwGreenF'>Zapomniałeś Hasła</h1>
        <p className='m-auto text-2xl font-light md:block w-2/3 hidden'>Wpisz swój email i zatwierdź a wyślemy ci link do zresetowania hasła</p>
        <ForgotPasswordForm />
      </div>
    </div>
  );
};

export default ForgotPasswordContainerL;
