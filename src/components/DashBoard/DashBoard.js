import React, { useEffect, useState } from "react";
import { getPrompts, getFeelings } from '../../services/multiService'; 
import { getStoryTree } from '../../services/storyService';
import ShuffleArray from "../utils/ShuffleArray";
import "./DashBoard.scss";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const [stories, setStories] = useState([]);
  const [prompts, setPrompts] = useState([]);
  const [feelings, setFeelings] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedStoriesResponse = await getStoryTree();
        setStories(fetchedStoriesResponse.data);

        const fetchedPromptsResponse = await getPrompts();
        setPrompts(fetchedPromptsResponse.data);

        const fetchedFeelingsResponse = await getFeelings();
        setFeelings(fetchedFeelingsResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const handleContentClick = (id, type) => {
    let selectedData;
    
    switch(type) {
      case 'prompt':
        selectedData = prompts.find(prompt => prompt.id === id);
        break;
      case 'feeling':
        selectedData = feelings.find(feeling => feeling.id === id);
        break;
      case 'story':
        selectedData = stories.find(story => story.id === id);
        break;
      default:
        console.error("Unknown content type:", type);
        return;
    }
    
    if (type === 'story') {
      navigate(`/storytree/${id}`, { state: { data: selectedData } });
    } else {
      navigate(`/studio/new`, { state: { data: selectedData } });
    }
  };

  return (
    <div className="dashboard">

      {/* Shuffle and display stories */}
      <section className="dashboard__full-stories">
        <h2>Latest Full Stories</h2>
        <ShuffleArray items={stories}>
          {(shuffledStories) => (
            <ul>
              {shuffledStories.slice(0, 3).map((story) => (
                <li key={story.id} onClick={() => handleContentClick(story.id, 'story')}>
                  {story.title}
                </li>
              ))}
            </ul>
          )}
        </ShuffleArray>
      </section>

      {/* Shuffle and display prompts */}
      <section className="dashboard__prompts">
        <h2>Latest Prompts</h2>
        <ShuffleArray items={prompts}>
          {(shuffledPrompts) => (
            <ul>
              {shuffledPrompts.slice(0, 3).map((prompt) => (
                <li key={prompt.id} onClick={() => handleContentClick(prompt.id, 'prompt')}>
                  {prompt.sentence}
                </li>
              ))}
            </ul>
          )}
        </ShuffleArray>
      </section>

      {/* Shuffle and display feelings */}
      <section className="dashboard__feelings">  
        <h2>Latest Feelings</h2>  
        <ShuffleArray items={feelings}>
          {(shuffledFeelings) => (
            <ul>
              {shuffledFeelings.slice(0, 3).map((feeling) => ( 
                <li key={feeling.id} onClick={() => handleContentClick(feeling.id, 'feeling')}>
                  {feeling.sentence}
                </li>
              ))}
            </ul>
          )}
        </ShuffleArray>
      </section>
    </div>
  );
}

export default Dashboard;
