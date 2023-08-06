import './StoryCreatorSpace.scss';
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
function StoryCreatorSpace (){
 
    return (
      <div className="storywriter">
        <section className='storywriter__thread'>
            <h2>Placeholder Title </h2>
            <p></p>
        </section>
        <section className='storywriter__add'>
            <h2>Start a story seed</h2>
            {/* <h2>Keeping growing the story seed</h2> Message changes after first post created*/} 
          
            <form className='storywriter__add__form'>
                {/* //Add title only first post, then will be replaced with title label */}
          <label >Add Title</label> 
          <input
            type="text"
            value="title"
          />
          {/* // Will replace add title input on second and nth post
          <label>placeholder title</label> */}
          {/* // start a story lable will be replaced after first post
          // continue story will with second and nth post */}
          <label >Start the story</label>
          <label>Continue the story</label>
          <textarea
            rows="6"
            cols="50"
          ></textarea>  
          {/* // 2 users will be tracked. user will be replaced with avatars or user names. */}
          <div>
          <select>
              <option value="User1">User 1</option>
            <option value="User2">User 2</option>
          </select>
          </div>
          <button type="submit">Submit</button>
      
            </form>

        </section>
    </div>
    );

};
export default StoryCreatorSpace; 