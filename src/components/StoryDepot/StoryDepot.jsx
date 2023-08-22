import React from "react";
import { useNavigate } from "react-router-dom";
import "./StoryDepot.scss";

function StoryDepot({ halfStories}) {
   const navigate = useNavigate();
  // Define a function to handle the item click and navigate to the new story page
  const handleItemClick = (id) => {
 

    const selectedHalfStory = getHalfStoryById(id);
    navigate(`/story/new/${id}`, { state: { data: selectedHalfStory } });
  };

  const getHalfStoryById = (id) => {
    return halfStories.find((halfStory) => halfStory.id === id);
  };

  return (
    <div className="story-depot">
      <section className="story-depot__heading">
        <h2>Stories waiting for pears...</h2>
        <p>Add your own nourishment so a pear can grow.</p>
      </section>

      <section className="story-depot__half-stories">
        <div>
          <h3>Half Stories:</h3>
          <ul>
            {halfStories && halfStories.length > 0 && halfStories.map((halfStory) => (
              <li
                key={halfStory.id}
                onClick={() => handleItemClick(halfStory.id)}
              ><h3>{halfStory.title}</h3>
                <p>{halfStory.story}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default StoryDepot;
