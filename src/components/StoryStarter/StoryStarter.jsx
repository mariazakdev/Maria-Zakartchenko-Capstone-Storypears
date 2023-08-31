import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import "./StoryStarter.scss";

function StoryStarter({ prompts, feelings }) {
  const [activeContent, setActiveContent] = useState("prompts"); // Prompts is open by default
  const navigate = useNavigate();

  const handlePromptClick = (id) => {
    const selectedPromptData = getPromptDataById(id);
    navigate(`/story/new/${id}`, { state: { data: selectedPromptData } });
  };
  const handleFeelingClick = (id) => {
    const selectedFeelingData = getFeelingDataById(id);
    navigate(`/story/new/${id}`, { state: { data: selectedFeelingData } });
  };

  const getPromptDataById = (id) => {
    return prompts.find((prompt) => prompt.id === id) ;
  };
  const getFeelingDataById = (id) => {
    return feelings.find((feeling) => feeling.id === id)  
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
              <h3>Prompts:</h3>
              <ul className="story-item">
                {prompts && prompts.map((prompt) => (
                  <li
                    key={prompt.id}
                    onClick={() => handlePromptClick(prompt.id)}
                  >
                    {prompt.sentence}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {activeContent === "feelings" && (
            <div>
              <h3>Feelings:</h3>
              <ul className="feeling-item">
                {feelings && feelings.map((feeling) => (
                  <li
                    key={feeling.id}
                    onClick={() => handleFeelingClick(feeling.id)}
                  >
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
