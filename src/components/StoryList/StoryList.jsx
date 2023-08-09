import './StoryList.scss';
import Avatar from "../Avatar/Avatar";
import { Link } from 'react-router-dom';


function StoryList({stories}) {
 
  return (
    <div>
      <h2>The Pear Tree Stories</h2>
      <ul className="story-list">
      {stories && stories.map(story => (
          <li className="story-list__item" key={story.id}>
            <Link to={`/story/${story.id}`}>
              <p>{story.title}</p>
            </Link> 
            <Avatar className='avatar__image-sm' />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StoryList;