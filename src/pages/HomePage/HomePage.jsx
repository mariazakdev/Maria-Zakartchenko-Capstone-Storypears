import Pears from '../../assets/icons/Pears.png';
import './HomePage.scss';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
    <div className='site'>
     
      <section className='site__content'>
        <div className="intro">
          <h1>Welcome to StoryPears!</h1>
          <p >Where your words find their other half <span>or third, or fourth...</span></p>
          <Link to='/login' className="intro__login-btn">Login to Join the Fun!</Link>

          <div className="image-container">
            
          <img src={Pears} alt="Pair of Pears celebrating creativity" />
        </div>
        </div>
        
        <div className="features">
          <p>Begin with a story <strong>SEED </strong> seed, let it spark your imagination, and watch a narrative sprout into a <strong>PEAR BRANCH.</strong></p>
          <p>A prompt , an emotional sentence to inspire a poetic rhythm, or something on your own in our <strong>GARDEN</strong>.</p>
          <p>Rally your fellow <strong>PEARS.</strong> After all, a story isn't just one-sided. It's multidimensional, just like a <strong> pear tree!</strong></p>
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
     </>
  );
}

export default HomePage;
