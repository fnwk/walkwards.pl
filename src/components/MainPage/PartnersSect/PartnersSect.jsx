import { faApple } from '@fortawesome/free-brands-svg-icons';
import { useEffect } from 'react';
import Partner from './Partner';
import { useState } from 'react';

const Partners = (props) => {
  const [slider, setSlider] = useState([<Partner icon={faApple} />, <Partner icon={faApple} />]);

  useEffect(() => {
    setSlider([...slider, <Partner icon={faApple} />]);
  }, [props.offsetY]);

  return (
    <div className='flex flex-col justify-around text-center w-full mt-[15vh] h-full'>
      <h1 className='text-4xl font-bold'>Nasi partnerzy:</h1>
      <div className='flex md:text-9xl text-6xl py-8 overflow-hidden'>
        <div className='mx-auto'>
          <Partner icon={faApple} />
          <Partner icon={faApple} />
          <Partner icon={faApple} />
          <Partner icon={faApple} />
          <Partner icon={faApple} />
          <Partner icon={faApple} />
        </div>
      </div>
    </div>
  );
};

export default Partners;
