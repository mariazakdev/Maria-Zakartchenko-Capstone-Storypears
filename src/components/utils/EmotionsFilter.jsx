import React, { useState } from 'react';
import "./EmotionsFilter.scss";

function EmotionsFilter({ emotions =[], onEmotionSelect = ()=> {}, className = "" }) {
  const [activeEmotion, setActiveEmotion] = useState('All Emotions');

  // Check if the 'emotions' prop is null or empty before rendering
  if (!emotions || emotions.length === 0) {
    return null; // Don't render the component
  }

  return (
    <div className={`emotions-filter ${className}`}>
      <button 
        className={activeEmotion === "All Emotions" ? "active" : ""}
        onClick={() => {
          setActiveEmotion("All Emotions");
          onEmotionSelect("All Emotions");
        }}>
        All Emotions
      </button>
      {emotions.map(emotion => (
        <button 
          key={emotion} 
          className={activeEmotion === emotion ? "active" : ""}
          onClick={() => {
            setActiveEmotion(emotion);
            onEmotionSelect(emotion);
          }}>
          {emotion}
        </button>
      ))}
    </div>
  );
}

export default EmotionsFilter;
