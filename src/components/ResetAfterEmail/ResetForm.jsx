import React, { useState, useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ResetForm = () => {
  const [password, setPassword] = useState('');
  const [submitPassword, setSubmitPassword] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formValidity, setFormValidity] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const userId = useParams().invoiceId;
  const navigate = useNavigate();

  const resetPasswordReq = useFetch('https://backend.walkwards.pl/User/ResetPassword', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: parseInt(userId),
      pass1: password,
      pass2: submitPassword,
    }),
  });

  const checkValidity = () => {
    const re = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    console.log(password.trim(), submitPassword.trim());
    if (password.trim() === '' || submitPassword.trim() === '') {
      console.log('puste');
      setFormValidity(false);
      setResponseMessage('Hasło nie może być puste');
    } else if (password !== submitPassword) {
      console.log('różne');
      setFormValidity(false);
      setResponseMessage('Hasła muszą być takie same');
    } else if (!re.test(password)) {
      console.log('format');
      setFormValidity(false);
      setResponseMessage(
        'Hasło jest w złym formacie. Poprawne hasło powinno zawierać co najmniej 8 znaków, jedną dużą i małą literę.'
      );
    } else {
      setResponseMessage('Pomyślnie zmieniono hasło');
      setFormValidity(true);
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitPasswordHandler = (e) => {
    setSubmitPassword(e.target.value);
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    checkValidity();
    setFormSubmitted(true);
  };

  useEffect(() => {
    if (formValidity) {
      resetPasswordReq.sendRequest();
      setTimeout(() => {
        navigate('/');
        console.log('test');
      }, 2000);
    }
  }, [formValidity]);

  const responseMessageClasses = `${
    !formValidity ? 'text-red border-red bg-[#ffbebe34]' : 'text-green border-green bg-[#c0fce2]'
  } text-xl mb-8 text-center p-4 rounded-md border-2  `;

  return (
    <form className={`flex flex-col text-right m-auto md:w-[75%] mt-8 text-gray-light`}>
      <input
        className={`text-lg py-2 border-b-2  my-6 outline-0`}
        type='password'
        placeholder='Podaj hasło'
        onChange={passwordHandler}
      />
      <input
        className='text-lg  opacity-100 py-2 border-b-2 my-6 outline-0'
        type='password'
        onChange={submitPasswordHandler}
        placeholder='Potwierdz hasło'
      />
      <button
        className='text-white text-2xl bg-gradient-to-t from-wwGreenF to-wwGreenS py-2 my-10 rounded-md'
        onClick={SubmitHandler}>
        Zatwierdź
      </button>
      {formSubmitted && <p className={responseMessageClasses}>{responseMessage}</p>}
    </form>
  );
};

export default ResetForm;
