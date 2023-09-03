import "./StoryReader.scss";
import { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import GenreFilter from "../GenresFilter/GenresFilter";
import EmotionsFilter from "../EmotionsFilter/EmotionsFilter";



function StoryReader({fullStories}) {
  
  const navigate = useNavigate();
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedEmotion, setSelectedEmotion] = useState("All");

  const handleItemClick = (story) => {
    navigate(`/story/${id}`, { state: { data: story } });
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; 
    }
    return array;
  };

  const genres = Array.from(new Set(fullStories.map(story => story.genre)));
  const emotions = Array.from(new Set(fullStories.map(story => story.emotion))).filter(emotion => emotion);
 
  const filterHalfStories = () => {
    return fullStories.filter(story =>
      (selectedGenre === "All" || story.genre === selectedGenre) &&
      (selectedEmotion === "All" || story.emotion === selectedEmotion)
    );
  };

  const handleFilterSelect = (type, value) => {
    if (type === "genre") {
      setSelectedGenre(value);
      setSelectedEmotion("All");
    } else if (type === "emotion") {
      setSelectedEmotion(value);
      setSelectedGenre("All");
    }
  };

  const shuffledStories = shuffleArray(filterHalfStories());

  return (
    <div className="story-depot">
      <GenreFilter selectedGenre={selectedGenre} handleGenreSelect={(genre) => handleFilterSelect('genre', genre)} genres={genres} />
      <EmotionsFilter selectedEmotion={selectedEmotion} handleEmotionSelect={(emotion) => handleFilterSelect('emotion', emotion)} emotions={emotions} />
      <section className="story-depot__half-stories">
        <div>
          <h3>Half Stories:</h3>
          <ul>
            {shuffledStories.map(story => (
              <li key={story.id} onClick={() => handleItemClick(story.id)}>
                <h3>{story.title}</h3>
                <p>{story.content}</p>
                <h4>{story.genre}</h4>
                <h4>{story.emotion}</h4>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default StoryReader;
