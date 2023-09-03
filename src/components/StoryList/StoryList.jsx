import './StoryList.scss';
import Avatar from "../Avatar/Avatar";
import { useNavigate} from 'react-router-dom';



function StoryList({fullStories}) {
  const navigate = useNavigate();

  console.log("Rendering StoryList with:", fullStories);
  const handleStoryClick = (storyId) => {
    // handle the click event here, possibly navigate to a story detail page or something else
    console.log("Clicked story with ID:", storyId);
      navigate(`/stories/${storyId}`);
    
  }


  return (
    <div className='story'>
    <h2>The Pear Tree Stories</h2>
    <ul className="story-list">
      {fullStories && fullStories.map(storyItem => {
        const storiesData = typeof storyItem.stories_data === 'string' 
                            ? JSON.parse(storyItem.stories_data) 
                            : storyItem.stories_data;
        const firstStory = storiesData[0];

        return (
          <li className="story-list__item" key={storyItem.id} onClick={() => handleStoryClick(storyItem.id)}>
            <p>{firstStory.title}</p>
            <Avatar className='avatar__image-sm' />
          </li>
        );
      })}
    </ul>
  </div>
  );
}

export default StoryList;