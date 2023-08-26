import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Pears from '../../assets/icons/Pears.png';
import './AboutPage.scss';

function HomePage() {
  return (
    <div className='site'>
      <Header />
      <section className='site__content'>
        <h1>Why join us?</h1>
        <h2>Sign up today!</h2>
        <img src={Pears} alt="Pear Picture" />
      </section>
      <Footer />
    </div>
  );
}

export default HomePage;