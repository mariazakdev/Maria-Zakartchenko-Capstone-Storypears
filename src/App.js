import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import StoryStarter from './components/StoryStarter/StoryStarter';
import StoryCreatorSpace from './components/StoryCreatorSpace/StoryCreatorSpace';

function App() {
  return (
    <div className="App">
 <Header />
 <StoryStarter />
 <StoryCreatorSpace />
 <Footer />
    </div>
  );
}

export default App;
