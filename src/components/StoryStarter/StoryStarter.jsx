import React, { useState } from "react";
import "./StoryStarter.scss";

function StoryStarter({ prompts, feelings }) {
    const [activeContent, setActiveContent] = useState("prompts"); // Initial state is "prompts"

    return (
        <div className="story-starter">
            <section className="story-starter__heading">
                <h2>Seed the pears...</h2>
                <p>Plant your seed on a story prompt you like, wait for someone to join. Together a story pear will grow</p>
            </section>
            <section className="story-starter__container">
                <div className="story-starter__container--toggler">
                    <button onClick={() => setActiveContent("prompts")}>Show Prompts</button>
                    <button onClick={() => setActiveContent("feelings")}>Show Feelings</button>
                </div>
                <div className="story-starter__container--content">
                    {activeContent === "prompts" && (
                        <div>
                            <h3>Prompts:</h3>
                            <ul className="story-item">
                                {prompts.map((prompt) => (
                                    <li key={prompt.id}>{prompt.sentence}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {activeContent === "feelings" && (
                        <div>
                            <h3>Feelings:</h3>
                            <ul className="feeling-item">
                                {feelings.map((feeling) => (
                                    <li key={feeling.id}>{feeling.expression}</li>
                                ))}
                            </ul>
                        </div>
                    )}
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
    );
}

export default StoryStarter;