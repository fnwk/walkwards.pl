import { Link } from 'react-router-dom';

const OtherLinks = () => {
  return (
    <div className='text-center mb-[5vh] mt-[10vh]'>
      <ul className='text-wwGreenF'>
        <li>
          <Link to='/polityka-prywatnosci'>Regulamin</Link>
        </li>
        <li>
          <Link to='/terms-and-conditions'>Polityka prywatności</Link>
        </li>
      </ul>
    </div>
  );
};
export default OtherLinks;
