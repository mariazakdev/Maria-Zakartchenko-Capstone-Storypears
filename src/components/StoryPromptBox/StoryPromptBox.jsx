import "./StoryPromptBox.scss";

// Backend will fill each box with a String
// purpose: to get inspiration to start a story
// functionality: click will add avatar to, second person click will add second avatar
//                box will disappear from view when two haved peared 
//                string will be added to new story box in writing pot 

//                add new box functionality. Authentication - person with profile 

function StoryPromptBox(){
return(
<div className="story-prompt">
    <section>
        <ul className="story-prompt-list">
              {/* {stringfrombackend.map} */}
              {/* Temporary hardedcoded prompts */}
              <li className="story-prompt-list__item">
                <p> Drying her hair with the shabby towel, she glimpses into the foggy mirror. "Oh my god" she screams....</p>
              </li>
              <li className="story-prompt-list__item">
                <p> "Bears work alone" he growls...</p>
              </li>

        <li className="story-prompt-list__item">
            <p>Yet it wasn't from earth, its colours would be impossible to explain...</p>
              </li>
      </ul> 
    </section>
</div>
);

};
export default StoryPromptBox;