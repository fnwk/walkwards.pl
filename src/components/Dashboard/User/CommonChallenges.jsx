import UserChallenge from './UserChallenge';

const CommonChallenges = (props) => {
  return (
    <div className='w-full h-[40vh] bg-white shadow-lg row-span-2 rounded-2xl p-6'>
      <h1 className='text-3xl font-bold mb-4'>Wasze wyzwania:</h1>
      <div className='flex overflow-y-scroll h-5/6'>
        {props.activeChallenges.map((challenge) => {
          return <UserChallenge endDate={challenge} />;
        })}
      </div>
    </div>
  );
};

export default CommonChallenges;
