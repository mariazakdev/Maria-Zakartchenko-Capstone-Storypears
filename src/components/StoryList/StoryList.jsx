import './StoryList.scss';
import Avatar from "../Avatar/Avatar";
import { Link } from 'react-router-dom';


function StoryList({stories}) {
 
  return (
    <div>
      <h2>The Pear Tree Stories</h2>
      <ul className="story-list">
      {stories && stories.map(storyItem => (
          <li className="story-list__item" key={storyItem.id}>
            <Link to={`/story/${storyItem.id}`}>
              <p>{storyItem.title}</p>
            </Link> 
            <Avatar className='avatar__image-sm' />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StoryList;