import React, { useState } from 'react';
import "./StoryReader.scss";

function StoryReader({ storyData = {}, users = [] }) {
    const [highlightedUser, setHighlightedUser] = useState(null);

    const storyContents = storyData.content ? JSON.parse(storyData.content) : [];

    const uniqueContributors = [...new Set(storyContents.map(content => content.user_id))];

    const handleClick = (userId) => {
        if (highlightedUser === userId) {
            setHighlightedUser(null);
        } else {
            setHighlightedUser(userId);
        }
    };

    return (
        <div className="story-reader">
            <div className="story-reader__nav">
            </div>

            <h2>{storyData.title}</h2>
            <h3>{storyData.genre}  {storyData.emotion}</h3>

            <div className="story-reader__authors">
    {uniqueContributors.map(userId => {
        const user = users.find(u => u.id === userId);
        console.log('User for ID', userId, ':', user);  
        return (
            user ? 
            <button 
                key={user.id}
                className={highlightedUser === user.id ? "highlighted-button" : ""}
                onClick={() => handleClick(user.id)}
            >
                {user.username}
            </button> 
            : null
        );
    })}
</div>

            <div className='story-reader__story'>
                {storyContents.map((content, index) => (
                    <span 
                        key={index} 
                        className={highlightedUser === content.user_id ? "highlighted-content" : ""}
                    >
                        {content.text}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default StoryReader;
