import "./StoryCreatorSpace.scss";
import React, { useState } from "react";

// This is where 2 people who joined will collaborate on a short story / novelettes
// Max word count to be determined
// This is a form style block
// add data to previous
// edit feature
// post
// will go to finished story block.
// two users can use form
// story updates top of block.
// form is below story block
// button shows who added what from the two users.
// form tracks who of two users posted data
// data backforth with backend

// if data from prompts, load it.if no data leave empty
function StoryCreatorSpace({ passedData }) {
  const [storyContent, setStoryContent] = useState(passedData);

  const handleInputChange = (event) => {
    setStoryContent(event.target.value);
  };

  return (
  <div className="storywriter">

    {storyContent ? (
      <div className="storywriter-add">
        <h2>Continue this story seed</h2>
        <h4>Submit your nurishment so another can join and make a pear.</h4>
        <textarea
        
          value={storyContent}
          onChange={handleInputChange}
        />
      </div>
    ) : (
      <div className="storywriter-empty">
        <h2>Seed your story</h2>
        <h4>Start writing so that another writer joins in and you become a pear.</h4>
        <textarea
         
          value=""
          onChange={handleInputChange}
        />
      </div>
    )}
  </div>
  );
}

export default StoryCreatorSpace;

