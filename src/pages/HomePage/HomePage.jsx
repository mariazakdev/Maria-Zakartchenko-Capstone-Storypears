import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import StoryList from '../../components/StoryList/StoryList';

function HomePage(){
    return(
        <>
        <Header/>
        <h1>Welcome to Story Pears</h1>
        <h2>A fun space to write stories in pairs</h2>
        <StoryList/>
        <Footer/>
        </>
    );
};
export default HomePage;