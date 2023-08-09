import NavStoryReader from "../NavStoryReader/NavStoryReader";
import "./StoryReader.scss";

function StoryPage({story}) {
  
 return(
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
