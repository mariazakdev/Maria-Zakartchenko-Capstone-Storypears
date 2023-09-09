import React, { useState } from 'react';
import NavStoryReader from "../NavStoryReader/NavStoryReader";
import "./StoryReader.scss";


function StoryReader({ storyData = {}, users = [] }) {
    const [highlightedUser, setHighlightedUser] = useState(null);

    const storyContents = storyData.content ? JSON.parse(storyData.content) : [];

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
                <NavStoryReader />
            </div>

            <h1>{storyData.title}</h1>
            <h2>{storyData.genre}</h2>

            <div className="story-reader__authors">
                {storyContents.map(content => {
                    const user = users.find(u => u.id === content.user_id);
                    return (
                        user ? 
                        <button 
                            key={user.id}
                            className={highlightedUser === user.id ? "highlighted-button" : ""}
                            onClick={() => handleClick(user.id)}
                        >
                            {user.name}
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