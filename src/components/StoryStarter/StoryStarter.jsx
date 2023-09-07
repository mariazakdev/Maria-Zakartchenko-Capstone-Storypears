import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "./StoryStarter.scss";

function StoryStarter({ prompts, feelings, fetchPrompts, fetchFeelings }) {
  const [activeContent, setActiveContent] = useState("prompts");
  const [newPrompt, setNewPrompt] = useState('');
  const [newFeeling, setNewFeeling] = useState('');
  const navigate = useNavigate();

  const handleContentClick = (id, type) => {
    const selectedData = type === 'prompt' 
      ? getPromptDataById(id) 
      : getFeelingDataById(id);

    navigate(`/story/new/${id}`, { state: { data: selectedData } });
  };

  const getPromptDataById = (id) => prompts.find(prompt => prompt.id === id);
  const getFeelingDataById = (id) => feelings.find(feeling => feeling.id === id);

  const handleAdd = async (type) => {
    const sentence = type === 'prompt' ? newPrompt : newFeeling;
    const endpoint = `http://localhost:8080/${type}s`;

    try {
      await axios.post(endpoint, { sentence });
      if (type === 'prompt') {
        setNewPrompt('');
        fetchPrompts();
      } else {
        setNewFeeling('');
        fetchFeelings();
      }
    } catch (error) {
      console.error(`Error adding ${type}:`, error);
    }
  };

  return (
    <div className="story-starter">
      <section className="story-starter__heading">
        <h2>Seed the pears...</h2>
        <p>
          Plant your seed on a story prompt you like, wait for someone to join.
          Together a story pear will grow
        </p>
      </section>
      <section className="story-starter__container">
        <div className="story-starter__container--toggler">
          <button onClick={() => setActiveContent("prompts")}>
            Show Prompts
          </button>
          <button onClick={() => setActiveContent("feelings")}>
            Show Feelings
          </button>
        </div>

        <div className="story-starter__container--content">
          {activeContent === "prompts" && (
            <div>
              <div className="story-starter-form">
                <label>Add a sentence prompt to help start a story:</label>
                <textarea 
                  value={newPrompt}
                  onChange={(e) => setNewPrompt(e.target.value)}
                  placeholder="Add your own prompt..."
                />
                <button onClick={() => handleAdd('prompt')}>Add Prompt</button>
              </div>

              <h3>Prompts:</h3>
              <ul className="story-item">
                {prompts && prompts.map(prompt => (
                  <li key={prompt.id} onClick={() => handleContentClick(prompt.id, 'prompt')}>
                    {prompt.sentence}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {activeContent === "feelings" && (
            <div>
              <div className="story-starter-form">
                <label>Add a feeling to help start a poem or prose:</label>
                <textarea 
                  value={newFeeling}
                  onChange={(e) => setNewFeeling(e.target.value)}
                  placeholder="Add your own feeling..."
                />
                <button onClick={() => handleAdd('feeling')}>Add Feeling</button>
              </div>

              <h3>Feelings:</h3>
              <ul className="feeling-item">
                {feelings && feelings.map(feeling => (
                  <li key={feeling.id} onClick={() => handleContentClick(feeling.id, 'feeling')}>
                    {feeling.sentence}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default StoryStarter;
