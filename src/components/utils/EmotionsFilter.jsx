import React, { useState } from 'react';

function EmotionsFilter({ emotions =[], onEmotionSelect = ()=> {}, className = "" }) {
  const [activeEmotion, setActiveEmotion] = useState('All Emotions');

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
