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
        <p>Working on short stories in pairs area</p>
        <section className='storywriter__thread'>
            <h2>Placeholder Title </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed libero urna, elementum sed erat at, porttitor congue justo. Fusce convallis varius maximus. Etiam non mauris ac dolor elementum pellentesque. Etiam vel venenatis tellus. Ut convallis volutpat magna, id semper odio finibus in. Nunc eu euismod felis. Integer venenatis, diam vel commodo vestibulum, augue odio scelerisque nulla, posuere pretium purus magna id erat. Vestibulum cursus arcu a efficitur facilisis. Quisque semper, nibh a tincidunt efficitur, urna nisl pretium enim, non gravida sapien ipsum iaculis diam. Curabitur at molestie dolor, vitae dapibus neque. Pellentesque quis purus eu velit ultrices finibus. Mauris rutrum justo non mauris scelerisque tincidunt. Nullam ante lorem, condimentum eget dolor eu, ultrices rhoncus diam. Donec at mattis libero. Nullam vel elit odio.

Aenean vehicula sit amet leo ut maximus. Nam nibh lectus, accumsan et ex a, rhoncus cursus orci. Sed non nunc sollicitudin, pretium metus sit amet, iaculis quam. Quisque in massa velit. Etiam dui urna, mattis eu accumsan eget, scelerisque non elit. Nunc eget leo at magna pulvinar euismod id non risus. Integer tempor, enim eget ultrices fringilla, neque magna fermentum justo, quis elementum elit ipsum ut ex. Cras varius cursus diam, vitae blandit elit consectetur vulputate.</p>
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