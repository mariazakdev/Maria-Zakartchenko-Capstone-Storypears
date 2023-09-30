import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "./StoryStarter.scss";
const { v4: uuidv4 } = require('uuid');


function StoryStarter({ prompts, feelings, fetchPrompts, fetchFeelings }) {
  const [activeContent, setActiveContent] = useState("prompts");
  const [newPrompt, setNewPrompt] = useState('');
  const [newFeeling, setNewFeeling] = useState('');
  const navigate = useNavigate();

  const createPrompt = async (data) => {
    try {
      const response = await axios.post(`http://localhost:8080/prompts`, data);
      return response.data;
    } catch (error) {
      throw new Error("Error creating prompt:", error);
    }
  };

  const createFeeling = async (data) => {
    try {
      const response = await axios.post(`http://localhost:8080/feelings`, data);
      return response.data;
    } catch (error) {
      throw new Error("Error creating feeling:", error);
    }
  };

  const handleContentClick = (id, type) => {
    const selectedData = type === 'prompt' 
      ? getPromptDataById(id) 
      : getFeelingDataById(id);

    navigate(`/story/new`, { state: { data: selectedData } });
  };

  const getPromptDataById = (id) => prompts.find(prompt => prompt.id === id);
  const getFeelingDataById = (id) => feelings.find(feeling => feeling.id === id);

  const handleAdd = async (type) => {
    const sentence = type === 'prompt' ? newPrompt : newFeeling;

    try {
      if (type === 'prompt') {
        await createPrompt({ sentence });
        setNewPrompt('');
        fetchPrompts();
      } else {
        await createFeeling({ sentence }); 
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
        <h3>Seed the pears</h3>
        <p>
          Plant your seed on a story prompt you like, wait for someone to join.
          Together a story pear will grow
        </p>
      </section>
      <section className="story-starter__container">
      <p>Click prompts or emotions to get started</p>

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
                <textarea 
                  value={newPrompt}
                  onChange={(e) => setNewPrompt(e.target.value)}
                  placeholder="Add your own prompt..."
                />
                <button onClick={() => handleAdd('prompt')}>Add Your Prompt</button>
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
                <textarea 
                  value={newFeeling}
                  onChange={(e) => setNewFeeling(e.target.value)}
                  placeholder="Add your own feeling..."
                />
                <button onClick={() => handleAdd('feeling')}>Add Your Feeling</button>
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
