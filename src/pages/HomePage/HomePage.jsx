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
            <p>Where stories start with an inspiring seed, branch out with community creativity, and grow into captivating trees. <span>Ready to contribute?</span></p>
            <Link to='/login' className="intro__login-btn">Login to Begin!</Link>

            <div className="image-container">
              <img src={Pears} alt="Pair of Pears representing collective creativity" />
            </div>
          </div>
          
          <div className="features">
            <p>A <strong>SEED</strong> is a story starter, a hint of inspiration. From a single sentence to a poetic rhythm, it’s the beginning of something wonderful.</p>
            <p>With your story <strong>SEED</strong> planted, invite others to nurture it. As they contribute, it becomes a <strong>BRANCH</strong>, expanding in exciting, unexpected ways.</p>
            <p>Once your story has been shaped and contributed to by the community, it stands tall as a complete <strong>TREE</strong>. Every tree in our forest is a testament to collective creativity.</p>
            <p>Experiment, play around, dive deep, or be whimsical. Let your unique voice shine and have fun collaborating!</p>
          </div>
          <div className="mission">
            <h2>Our Prime Directive:</h2>
            <p>A story here isn't solitary. It thrives on collaboration. Partner up, or as we like to say... find your pear! Together, let's weave tales that are larger than life.</p>
          </div>
          <div className="philosophy">
            <p>At StoryPears, we champion the potential of every idea. Through collaboration, these seeds of imagination grow into vast forests, where each tree embodies shared creativity. Ready to branch out with us?</p>
          </div>
        
        </section>

      </div>
    </>
  );
}

export default HomePage;
