import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import StoryStarter from './components/StoryStarter/StoryStarter';
import StoryCreatorSpace from './components/StoryCreatorSpace/StoryCreatorSpace';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="App">
 <Header />
 <StoryStarter />
 <StoryCreatorSpace />
 <Profile/>
 <Footer />
    </div>
  );
}

export default App;
