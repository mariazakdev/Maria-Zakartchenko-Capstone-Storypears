import React from 'react';
import { useNavigate } from 'react-router-dom';
import EmotionsFilter from '../EmotionsFilter/EmotionsFilter';
import TinyPear from '../../assets/icons/pera-architetto-francesc-01 (1).png';
import './StoryDepot.scss';

function StoryDepot({ halfStories }) {
    const navigate = useNavigate();

    const navigateToStudio = (story) => {
      navigate(`/story/studio/${story.id}`, { state: { data: story } });
  };
    return (
      <div className="story-depot">
        <section className="story-depot__stories">
          <div>
            <h3>Help these story branches become trees:</h3>
            <ul>
              {halfStories.map(story => (
                <li key={story.id} onClick={() => navigateToStudio(story)}>
                  <h4>{story.title}</h4>
                  <h3>{story.genre}</h3>
                  <div>
                    {JSON.parse(story.content).map((content, index) => (
                      <div key={index}>
                        <p>{content.text}</p>
                      </div>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    );
}

export default StoryDepot;
