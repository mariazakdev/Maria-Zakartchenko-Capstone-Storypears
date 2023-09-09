import React from 'react';
import "./WriterProfile.scss";
import Avatar from "../Avatar/Avatar";
import { Link } from 'react-router-dom';

function WriterProfile({ writerData, stories = [] }) {

  return (
      <div className="profile">
          <h2>Writer Profile</h2>
          <div>
              <h3>{writerData && writerData.pen_first_name} {writerData.pen_last_name}</h3>
              <Avatar className='avatar__image-med' />
          </div>
          <div>
              <h3>Bio:</h3>
              <p>{writerData.bio}</p>
              <h3>Links:</h3>
              <p>{writerData.links}</p>
          </div>
          <div>
              <h3>Pear Tree</h3>
              {stories.map(story => (
                  <Link
                      key={story.id}
                      to={{
                          pathname: `/story/${story.id}`,
                          state: {
                              story: story,
                              uniqueAuthors: story.contents ? new Set(story.contents.map(content => content.user_id)).size : 0
                          }
                      }}
                  >
                      <p>{story.title} <span>with <Avatar className='avatar__image-sm' /></span></p>
                  </Link>
              ))}
          </div>
      </div>
  );
}

export default WriterProfile;