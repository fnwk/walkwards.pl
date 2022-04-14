import { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { Link } from 'react-router-dom';

const ForgotPasswordForm = () => {
  const [inputValue, setInputValue] = useState('');
  const resetFormReq = useFetch('https://backend.walkwards.pl/User/ForgotPassword', {
    method: 'POST',
    body: JSON.stringify({ loginOrEmail: inputValue }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    const request = await resetFormReq.sendRequest();
    console.log(request);
  };

  const inputValueHandler = (e) => {
    setInputValue(e.target.value);
  };
  //TODO: Użytkownik nie wie czy wysłano emaila
  return (
    <form className='flex flex-col text-right m-auto w-[75%] mt-8 text-gray-light'>
      <input
        className='text-lg opacity-100 py-2 border-b-2 my-6 outline-none'
        type='text'
        placeholder='login/email'
        onChange={inputValueHandler}
        value={inputValue}
      />
      <Link to='/login' className='mb-8'>
        Wróć do logowania
      </Link>
      <button
        className='text-white text-2xl bg-gradient-to-t mt-10 from-wwGreenF to-wwGreenS py-2 rounded-md'
        onClick={submitHandler}>
        Zatwierdź
      </button>
    </form>
  );
};

export default ForgotPasswordForm;
