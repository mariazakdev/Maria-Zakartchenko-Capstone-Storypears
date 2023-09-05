import React, { useState } from 'react';
import NavStoryReader from "../NavStoryReader/NavStoryReader";
import "./StoryReader.scss";

function StoryReader({ storyData = {}, users = [] }) {
    const [highlightedUserId, setHighlightedUserId] = useState(null);

    let stories;
    try {
        stories = JSON.parse(storyData.stories_data || '[]');
    } catch (err) {
        console.error('Error parsing stories_data:', err);
        return <div>Error parsing stories.</div>;
    }

    const uniqueUserIdsFromStory = Array.from(new Set(stories.map(story => story.user_id)));
    const usersFromStory = users.filter(user => uniqueUserIdsFromStory.includes(user.id));

    const getUserFromId = (userId) => {
        const foundUser = usersFromStory.find(user => user.id === userId);
        return foundUser ? `${foundUser.pen_first_name} ${foundUser.pen_last_name}` : 'null';
    }

    const contentClassName = (userId) => {
        return highlightedUserId === userId ? 'highlighted-content' : '';
    }

    return (
        <div className="story-reader">
            <div className="story-reader__nav">
                <NavStoryReader />
            </div>

            <h1>I'm story reader</h1>

            <div className="story-authors">
                {usersFromStory.map(user => (
                    <span key={user.id}>
                        {getUserFromId(user.id)}
                    </span>
                ))}
            </div>

            <div>
                {usersFromStory.map(user => (
                    <button
                        key={user.id}
                        onClick={() => setHighlightedUserId(prev => prev === user.id ? null : user.id)}
                        className={highlightedUserId === user.id ? 'highlighted-button' : ''}
                    >
                        Highlight {user.pen_first_name} {user.pen_last_name || "Unknown"}'s Content
                    </button>
                ))}
            </div>

            <div className="story-reader__story">
                {stories.map((story, index) => (
                    <div key={index} className={`story-content-section ${contentClassName(story.user_id)}`}>
                        {index === 0 && <h3>{story.title}</h3>} 
                        <p>{story.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default StoryReader;
