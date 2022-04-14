const SocialMediaIcon = (props) => {
  return (
    <a href={props.href} className='rounded-full overflow-hidden w-[15%]'>
      <img src={props.icon} alt='' />
    </a>
  );
};

export default SocialMediaIcon;
