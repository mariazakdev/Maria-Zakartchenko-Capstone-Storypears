import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Pears from '../../assets/icons/Pears.png';
import './HomePage.scss';

function HomePage() {
  return (
    <>
    <Header />
    <div className='site'>
     
      <section className='site__content'>
        <div className="intro">
          <h1>Welcome to StoryPears!</h1>
          <p>Where your words find their other half <span>or third, or fourth...</span></p>
          <div className="image-container">
          <img src={Pears} alt="Pair of Pears celebrating creativity" />
        </div>
        </div>
        
        <div className="features">
          <p>Begin with a <strong>story prompt</strong> seed, let it spark your imagination, and watch a narrative sprout.</p>
          <p>Or perhaps, let an <strong>emotional sentence</strong> inspire a poetic rhythm in your soul.</p>
          <p>Rally your fellow pears. After all, a story isn't just one-sided. It's multidimensional, just like a pear tree!</p>
          <p>Be silly. Be experimental. Be profound. But most importantly, be you and have fun!</p>
        </div>
        <div className="mission">
          <h2>Our Only Rule:</h2>
          <p>It takes two (or more) to complete a tale. Find your pair, or should we say... pear? And let your combined creativity flow.</p>
        </div>
        <div className="philosophy">
          <p>At StoryPears, we believe in nurturing every seed of an idea. Together, we cultivate forests of imagination where each tree is a testament to collaborative creativity. So, are you ready to branch out?</p>
        </div>
      
      </section>
      
    </div>
    <Footer />
     </>
  );
}

export default HomePage;
