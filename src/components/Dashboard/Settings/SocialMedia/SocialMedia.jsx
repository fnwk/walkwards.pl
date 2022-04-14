import instagramIcon from '../../../../assets/Dashboard/Settings/instagram.png';
import facebookIcon from '../../../../assets/Dashboard/Settings/facebook.png';
import zwolnieniIcon from '../../../../assets/Dashboard/Settings/zwolnieni.jpeg';
import SocialMediaIcon from './SocialMediaIcon';

const SocialMedia = () => {
  return (
    <div className='flex flex-col mt-8 text-center'>
      <h1 className='text-2xl my-8 font-bold'>Nasze social media</h1>

      <div className='flex w-1/3 mx-auto justify-around'>
        <SocialMediaIcon
          href='https://www.instagram.com/walkwards/'
          icon={instagramIcon}
        />
        <SocialMediaIcon
          href='https://www.facebook.com/Walkwards-103933558724382'
          icon={facebookIcon}
        />
        <SocialMediaIcon
          href='https://zwolnienizteorii.pl/'
          icon={zwolnieniIcon}
        />
      </div>
    </div>
  );
};

export default SocialMedia;
