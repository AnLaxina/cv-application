import Button from "./Button.jsx";
import General from "./General.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";

import "../styles/general.css";
import {useState} from "react";

function handleSubmission() {
    console.log("You clicked me!");
}

export default function Form() {
    const [currentSection, setSection] = useState(0);
    const sections = [<General/>, <Education/>, <Experience/>];

    const isEnd = currentSection >= sections.length - 1;
    const isBeginning = currentSection === 0;

    function moveSection(forward = true) {
        if (!isEnd && forward) {
            setSection(currentSection + 1);
        } else if (!forward) {
            setSection(currentSection - 1);
        }
    }

    return (
        <aside className="form">
            {sections[currentSection]}

            <div className="submission-buttons">
                {!isBeginning && <Button text="Back" onClick={() => moveSection(false)}/>}

                {!isEnd && <Button text="Next" onClick={moveSection}/>}

                {isEnd && <Button text={"Submit"} onClick={handleSubmission}/>}
            </div>

        </aside>
    )
}