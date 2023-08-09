import NavStoryReader from "../NavStoryReader/NavStoryReader";
import "./StoryReader.scss";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function StoryPage() {
  const { id } = useParams(); 
  const [story, setStory] = useState({});

  useEffect(() => {
    fetchStory();
  }, []);

  async function fetchStory() {
    try {
      const response = await axios.get(
        `https://shortstories-api.onrender.com/stories/${id}`
      );
      setStory(response.data);
    } catch (error) {
      console.error("Error fetching story:", error);
    }
  }

  return (
    <div className="story-reader">
      <div>
        <NavStoryReader />
      </div>
      <div>
        <h2>{story.title}</h2>
        <p>{story.story}</p>
      </div>
      <div>
        <NavStoryReader />
      </div>
    </div>
  );
}

export default StoryPage;
