import img from '../../assets/Global/pageOnWork.svg';

const InProgress = () => {
  return (
    <div className='flex md:flex-row flex-col md:w-1/2 w-3/4 md:h-1/2 h-3/4 left-1/2 p-4 md:text-left text-center top-1/2  -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-lg absolute'>
      <div className='flex items-center md:w-1/2 w-full h-full float-left'>
        <img src={img} alt='' />
      </div>
      <div className='flex-col justify-around md:w-1/2 w-full h-full float-right px-4 py-[15%]  text-3xl'>
        <h1 className='font-bold mb-8'>Strona w trakcie rozwoju</h1>
        <p className='text-xl'>
          W trakcie trwania prac możesz obczaić naszą apke.
        </p>
      </div>
    </div>
  );
};

export default InProgress;
