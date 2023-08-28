import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import StoryCreatorSpace from '../../components/StoryCreatorSpace/StoryCreatorSpace';

function StoryWriterPage() {
  const location = useLocation();
  const selectedPromptData = location.state?.data || {}; // Data from prompts
  const selectedHalfStoryData = location.state?.data || {}; // Data from half stories
  const promptContent = selectedPromptData.sentence || '';
  const halfStoryContent = selectedHalfStoryData.story || '';


  const user ={
    id: 2,
    avatar_url: null,
    password: "password1",
    email: "user1@example.com",
    first_name: "John",
    last_name: "Doe",
    pen_first_name: "Penny",
    pen_last_name: "Writer",
    bio: "Poet with a heart full of emotions and a pen dipped in ink.",
    links: ["https://twitter.com/user2", "https://linkedin.com/in/user2", "https://instagram.com/in/fgfgdg"]
    }
  

  return (
    <div className="App">
      <Header />
      <StoryCreatorSpace promptData={promptContent} halfStoryData={halfStoryContent} user={user} />
      <Footer />
    </div>
  );
}

export default StoryWriterPage;
