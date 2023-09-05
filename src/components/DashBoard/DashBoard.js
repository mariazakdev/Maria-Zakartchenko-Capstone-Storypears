import React, { useEffect, useState } from "react";
import {
  fetchStoryTree,
  getGenres,
  getPrompts,
  getEmotions,
  getFeelingPrompts,
} from "../ApiFunctions/ApiFunctions";

function Dashboard() {
  const [stories, setStories] = useState([]);
  const [prompts, setPrompts] = useState([]);
  const [emotions, setEmotions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedStories = await fetchStoryTree();
        setStories(fetchedStories);

        const fetchedPrompts = await getPrompts();
        setPrompts(fetchedPrompts);

        const fetchedEmotions = await getEmotions();
        setEmotions(fetchedEmotions);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="dashboard">
      <section className="dashboard__full-stories">
        <h2>Latest Full Stories</h2>
        <ul>
          {stories.map((story) => (
            <li key={story.id}>{story.title}</li>
          ))}
        </ul>
      </section>

      <section className="dashboard__prompts">
        <h2>Random Prompts</h2>
        <ul>
          {prompts.map((prompt) => (
            <li key={prompt.id}>{prompt.text}</li>
          ))}
        </ul>
      </section>

      <section className="dashboard__emotions">
        <h2>Emotion Cloud</h2>
        <div>
          {emotions.map((emotion) => (
            <span key={emotion.id}>{emotion.name}</span>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
