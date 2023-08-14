import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./StoryStarter.scss";

function StoryStarter({ prompts, feelings }) {
  const [activeContent, setActiveContent] = useState("prompts"); // Prompts is open by default
  const navigate = useNavigate();

  const handleItemClick = (id) => {
    const selectedItemData = getDataById(id);
    navigate("/story/new", { state: { data: selectedItemData } });
  };

  const getDataById = (id) => {
    return prompts.find((prompt) => prompt.id === id) || feelings.find((feeling) => feeling.id === id);
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
                {prompts.map((prompt) => (
                  <li
                    key={prompt.id}
                    onClick={() => handleItemClick(prompt.id)}
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
                {feelings.map((feeling) => (
                  <li
                    key={feeling.id}
                    onClick={() => handleItemClick(feeling.id)}
                  >
                    {feeling.expression}
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
