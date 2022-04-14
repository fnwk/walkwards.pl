import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const Avatar = (props) => {
  const id = useSelector((state) => state.userData.id);
  const avatar = useSelector((state) => state.userData.avatar);
  const avatarChange = useSelector((state) => state.avatarChange.avatarChange);

  const [avatarSrc, setAvatarSrc] = useState('');
  const [imgHover, setImgHover] = useState(false);

  useEffect(() => {
    console.log(avatarChange, `https://avatars.walkwards.pl/${id + '.txt'}`);

    if (avatar) {
      setAvatarSrc(
        `https://avatars.walkwards.pl/${
          id + '.txt'
        }?jebacChromeIDisa={${avatarChange}}`
      );
    } else {
      setAvatarSrc('https://avatars.walkwards.pl/default.txt');
    }
  }, [avatarChange, avatar, id]);

  return (
    <div className='md:w-[17vw] md:h-[17vw] w-[60vw] h-[60vw] mx-auto mt-8 p-4'>
      <div
        onMouseEnter={() => setImgHover(true)}
        onMouseLeave={() => setImgHover(false)}
        onClick={props.avatarClick}
        className='rounded-full w-full h-full shadow-2xl overflow-hidden relative cursor-pointer'>
        <img
          className={`transition-all absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${
            imgHover ? 'opacity-60' : 'opacity-100'
          } duration-500`}
          src={avatarSrc}
          alt=''
        />
        <h1
          className={`font-bold text-lg absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${
            imgHover ? 'opacity-100' : 'opacity-0'
          } transition-all duration-500`}>
          Zmień awatar
        </h1>
      </div>
    </div>
  );
};

export default Avatar;
