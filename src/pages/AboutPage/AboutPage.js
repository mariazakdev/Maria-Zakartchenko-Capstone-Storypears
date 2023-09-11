import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Pears from '../../assets/icons/Pears.png';
import './AboutPage.scss';

function HomePage() {
  return (
    <>
    <div className='site'>
   
      <section className='site__content'>
        <div className="intro">
          <h1>Why join us?</h1>
          <h2>Sign up today!</h2>
        </div> <div className="image-container">
          <img src={Pears} alt="Pear Picture" />
        </div>
        
        <div className="features">
          <p><strong>Break the Block:</strong> Every writer knows the dreaded feeling of writer's block. Our app offers prompts, collaborations, and inspirations designed to kickstart your creativity and get those words flowing again.</p>
          <p><strong>Find Your Tribe:</strong> Writing can often be a solitary journey, but it doesn’t have to be. Connect with fellow writers who share your passion, understand your struggles, and celebrate your victories.</p>
          <p><strong>Collaborative Creativity:</strong> Dive into the unique experience of co-writing. Expand your horizons, challenge your perspectives, and create something truly unique as you meld your voice with others.</p>
          <p><strong>Guided Growth:</strong> Benefit from workshops, expert sessions, and peer feedback. Improve your craft, learn new techniques, and evolve as a storyteller.</p>
          <p><strong>A Safe Haven:</strong> Our community is built on respect, inclusivity, and mutual support. Share your drafts without fear of judgment, and be inspired by the diverse tales of our members.</p>
          <p><strong>Celebrate All Stories:</strong> Whether you’re penning a novel, crafting a poem, or scribbling a short story, every narrative finds a home here.</p>
        </div>
       
      </section>
     
    </div> 
    </>
  );
}

export default HomePage;
