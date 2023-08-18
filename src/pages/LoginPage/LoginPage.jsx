import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './LoginPage.scss';
import LogIn from '../../components/LogIn/LogIn';

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