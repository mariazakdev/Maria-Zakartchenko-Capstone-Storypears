import './Avatar.scss';
import AvatarPic from '../../assets/icons/1289336492.png';

function Avatar({ className }) {
  return (
    <div className='avatar'>
      <img
        className={className}
        src={AvatarPic}
        alt="Avatar picture"
      />
    </div>
  );
}

export default Avatar;