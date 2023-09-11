import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import LoginButton from '../../components/LoginButton/LoginButton';

function AuthFailPage (){
    return(
        <div className='site'>
        <Header/>
        <section className='site__content'>
        <div>
      <h1>Authentication Failed 😔</h1>
      <p>Please try logging in again later 🤞</p>
    </div>
        </section>
           <LoginButton/>
        
        <Footer/>
     
        </div>
    );
};
export default AuthFailPage ;