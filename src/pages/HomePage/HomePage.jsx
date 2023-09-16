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
    <p >Stuck in a narrative rut? Begin with an inspiring seed, invite the community's creativity to branch out, and watch your stories grow into mesmerizing trees. <span>No more writer's block!</span></p>
    <Link to='/login' className="intro__login-btn">Start Your Creative Journey!</Link>

    <div className="image-container">
        <img src={Pears} alt="Pair of Pears symbolizing collaborative creativity" />
    </div>
</div>
        

<div className="features">
    <p>A <strong>SEED</strong> is more than just a story starter. It's your way out of a writing slump. From a single evocative sentence to a poetic rhythm, embark on a fresh narrative adventure.</p>
    <p>Plant your story <strong>SEED</strong> and watch as fellow writers nurture and expand upon it. Witness its transformation into a vibrant <strong>BRANCH</strong>, growing in thrilling and unpredictable directions.</p>
    <p>When the community's collective creativity shapes your story, it flourishes as a majestic <strong>TREE</strong>. Each tree in our forest stands as a beacon against writer's block.</p>
    <p>Whether you wish to experiment, dive into profound depths, or simply enjoy the whimsy of storytelling, let your voice echo and revel in the collaborative spirit!</p>
</div>


<div className="mission">
    <h2>Never Alone Here</h2>
    <p>Every writer has a story waiting to be told. StoryPears is your haven against writer's block. Collaborate, pair up, or as we playfully say... find your pear! Together, let's craft tales that resonate.</p>
</div>

<div className="philosophy">
    <p>StoryPears isn't just about storytelling; it's a refuge for stalled imaginations. Here, every seed of thought is valued, and through united effort, we grow dense forests of creativity. Eager to reclaim your narrative prowess? Branch out with us!</p>
</div>
      
      </section>
      
    </div>
     </>
  );
}

export default HomePage;
