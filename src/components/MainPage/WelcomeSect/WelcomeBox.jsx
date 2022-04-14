const WelcomeBox = (props) => {
  return (
    <div className='w-full h-3/4 bg-gradient-to-r from-wwGreenF to-wwGreenS rounded-br-[50px] flex md:items-center relative'>
      {props.children}
    </div>
  );
};

export default WelcomeBox;
