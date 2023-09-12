import MyProfile from '../../components/MyProfile/MyProfile';

function ProfilePage({user}) {


  return (
   <div className='site'>
      <section className='site__content'>
        <MyProfile userData={user}/>
      </section>
    </div>
  );
}

export default ProfilePage;
