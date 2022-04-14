const NavList = () => {
  return (
    <ul
      className={`flex md:flex-row flex-col text-center justify-between basis-1/3 ml-auto text-xl w-full `}>
      <li className='my-2'>
        <a href='#'>Strona Główna</a>
      </li>
      <li className='my-2'>
        <a href='#app'>Aplikacja</a>
      </li>
      <li className='my-2'>
        <a href='#team'>Nasz zespół</a>
      </li>
      <li className='my-2'>
        <a href='#contact'>Kontakt</a>
      </li>
    </ul>
  );
};

export default NavList;
