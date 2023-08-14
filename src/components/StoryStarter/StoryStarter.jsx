import StoryPromptBox from "../StoryPromptBox/StoryPromptBox";
import StoryEmotionBox from "../StoryEmotionBox/StoryEmotionBox";
import "./StoryStarter.scss";

function StoryStarter({prompts, feelings}){
    return(
        <div className="story-starter">
            <p>StoryStarter block</p>
            <section className="story-starter__heading">
        <h2>Seed the pears...</h2>
        <p>Plant your seed on a story prompt you like, wait for someone to join. Together a story pear will grow</p>
    </section>
    <section className="story-starter__container">
                <div className="story-starter__container--story">
                    <h3>Prompts:</h3>
                    <ul>
                        {prompts.map((prompt) => (
                            <li key={prompt.id}>{prompt.sentence}</li>
                        ))}
                    </ul>
                </div>
                <div className="story-starter__container--feeling">
                    <h3>Feelings:</h3>
                    <ul>
                        {feelings.map((feeling) => (
                            <li key={feeling.id}>{feeling.expression}</li>
                        ))}
                    </ul>
                </div>
            </section>
    <section className="story-starter-form">
                <form action="#" method="post" id="sentenceForm">
                    <label htmlFor="sentence">Enter your story prompt:</label><br />
                    <textarea id="sentence" name="sentence" rows="4" cols="50" required></textarea><br />
                    <input type="submit" value="Add pear seed" />
                </form>
            </section>
 
     </div>
    )
}
export default StoryStarter; 