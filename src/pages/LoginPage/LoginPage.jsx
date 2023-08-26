import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './LoginPage.scss';
import LogIn from '../../components/LogIn/LogIn';
import LoginButton from '../../components/LoginButton/LoginButton';
import LogoutButton from '../../components/LogoutButton/LogoutButton';

function HomePage(){
    return(
        <div className='site'>
        <Header/>
        <section className='site__content'>
        <h1>Welcome to Story Pears</h1>
        <LogIn />
        </section>
    
        <Footer/>
     
        </div>
    );
};
export default HomePage;