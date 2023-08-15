import React from "react";
import "./StoryDepot.scss";

function StoryDepot({ halfStories, handleItemClick }) {
  return (
    <div className="story-starter">

      <section className="story-starter__heading">
        <h2>Stories waiting for pears...</h2>
        <p>Add your own nourishment so a pear can grow.</p>
      </section>

      <section >
          <div>
            <h3>Half Stories:</h3>
            <ul className="halfstory-item">
            {halfStories && halfStories.length > 0 && halfStories.map((halfStory) => (
  <li key={halfStory.id}>
  onClick={() => handleItemClick(halfStory.id)}
                
                  {halfStory.story}
                </li>
              ))}
            </ul>
          </div>
      </section>
      
    </div>
  );
}

export default StoryDepot;
