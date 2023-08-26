import NavStoryReader from "../NavStoryReader/NavStoryReader";
import "./StoryReader.scss";

function StoryPage({story}) {
  


 return(
    <div className="story-reader">
      <div className="story-reader__nav">
        <NavStoryReader />
      </div>
      <div  className="story-reader__story">
      <h2>{story.title}</h2>
      <p>{story.story}</p>
      </div>
      <div className="story-reader__nav">
        <NavStoryReader />
      </div>
    </div>
  );
}

export default StoryPage;
