import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import { userDataActions } from '../../store/userData';
import useFetch from '../../hooks/useFetch';
import FetchLoader from '../LoadingScreens/FetchLoader';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const [formValid, setFormValid] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [response, setResponse] = useState({});
  const [responseMessage, setResponseMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const loginFormReq = useFetch('https://backend.walkwards.pl/Action/login/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      loginOrEmail: loginValue,
      password: passwordValue,
    }),
  });

  const FetchHandler = async () => {
    const response = await loginFormReq.sendRequest();

    setResponse(response);
    setFormSubmitted(true);
    handleValidity(response);
  };

  const handleValidity = async (response) => {
    if (response.status === 409) {
      setResponseMessage('Podano zły login/email lub hasło');
      setFormValid(false);
    } else if (response.status === 500) {
      setResponseMessage('Nieznany błąd, skontaktuj się z supportem!');
      setFormValid(false);
    } else if (response.status === 200) {
      setResponseMessage('Pomyślnie zalogowano');
      setFormValid(true);
    }
  };

  useEffect(
    () => setIsLoading(loginFormReq.isLoading),
    [loginFormReq.isLoading]
  );

  useEffect(async () => {
    if (formValid) {
      const responseData = await response.json();
      storeHandler(responseData);
      navigate('/dashboard');
    }
  }, [formValid]);

  const storeHandler = (responseData) => {
    console.log(responseData);
    dispatch(userDataActions.username(responseData.username));
    dispatch(userDataActions.email(responseData.email));
    dispatch(userDataActions.avatar(responseData.avatar));
    dispatch(userDataActions.walkcoins(responseData.walkCoins));
    dispatch(userDataActions.placeInRank(responseData.placeInRanking));
    dispatch(userDataActions.token(responseData.token));
    dispatch(userDataActions.goal(responseData.goal));
    dispatch(userDataActions.id(responseData.id));
    dispatch(userDataActions.accountPrivacy(responseData.accoutPrivacy));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    FetchHandler();
  };

  const loginChangeHandler = (e) => {
    setLoginValue(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPasswordValue(e.target.value);
  };

  const responseMessageClasses = `${
    !formValid
      ? 'text-red border-red bg-[#ffbebe34]'
      : 'text-green border-green bg-[#c0fce2]'
  } text-xl mb-8 text-center p-4 rounded-md border-2  `;

  return (
    <>
      {isLoading && <FetchLoader />}

      <form
        className={`flex flex-col text-right m-auto w-[75%] mt-8 text-gray-light`}>
        <input
          className={`text-lg py-2 border-b-2  my-6 outline-0`}
          type='text'
          placeholder='Nazwa użytkownika / Email'
          onChange={loginChangeHandler}
          value={loginValue}
        />
        <input
          className='text-lg  opacity-100 py-2 border-b-2 my-6 outline-0'
          type='password'
          placeholder='Hasło'
          onChange={passwordChangeHandler}
          value={passwordValue}
        />
        {formSubmitted && (
          <p className={responseMessageClasses}>{responseMessage}</p>
        )}
        <Link to='/sendResetMail' className='mb-8'>
          Zapomniałem hasła
        </Link>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={submitHandler}
          className='text-white text-2xl bg-gradient-to-t from-wwGreenF to-wwGreenS py-2 rounded-md'>
          Zaloguj
        </motion.button>
      </form>
    </>
  );
};

export default LoginForm;
