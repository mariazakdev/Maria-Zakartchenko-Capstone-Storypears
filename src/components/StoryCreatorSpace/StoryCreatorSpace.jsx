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
function StoryCreatorSpace({ passedData, selectedHalfStory }) {
  const [storyContent, setStoryContent] = useState(passedData);
  const [halfStoryContent, setHalfStoryContent] = useState (selectedHalfStory)

  const handleStarterChange = (event) => {
    setStoryContent(event.target.value);
  };
  const handleHalfStoryChange = (event) => {
   setHalfStoryContent(event.target.value);
  };

  return (
    <div className="storywriter">
    {halfStoryContent ? (
      <div className="storywriter-add">
        <h2>Continue this story seed</h2>
        <h4>Complete this writing or ask for previous writer to continue.</h4>
        <textarea
          value={halfStoryContent}
          onChange={handleHalfStoryChange}
        />
      </div>
    ) : null}

    {storyContent && !halfStoryContent ? (
      <div className="storywriter-add">
        <h2>Continue this story seed</h2>
        <h4>Submit your nourishment so another can join and make a pair.</h4>
        <textarea value={storyContent} onChange={handleStarterChange} />
      </div>
    ) : null}

    {!storyContent && !halfStoryContent ? (
      <div className="storywriter-pear">
        <h2>Seed your story.</h2>
        <h4>
          Start writing so that another writer joins in and you become a
          pair.
        </h4>
        <textarea value="" onChange={handleStarterChange} />
      </div>
    ) : null}
  </div>
);
}

export default StoryCreatorSpace;

