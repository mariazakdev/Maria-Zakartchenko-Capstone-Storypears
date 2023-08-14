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
  const [storyContent, setStoryContent] = useState(passedData || '');

  const handleInputChange = (event) => {
    setStoryContent(event.target.value);
  };

  return (
    <div>
 
      <textarea
        rows="10"
        cols="50"
        value={storyContent}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default StoryCreatorSpace;

