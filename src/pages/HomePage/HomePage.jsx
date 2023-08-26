import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './HomePage.scss';

function HomePage(){
    return(
        <div className='site'>
        <Header/>
        <section className='site__content'>
        <h1>Welcome to Story Pears</h1>
        <h2>A collaborative space to write stories in pairs</h2>
        <p>For building of the site, data is not encrypted, currently exists to test backend</p>
        </section>
        <Footer/>
        </div>
    );
};
export default HomePage;