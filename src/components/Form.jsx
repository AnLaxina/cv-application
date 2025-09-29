import Button from "./Button.jsx";
import General from "./General.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";

import "../styles/general.css";

function handleSubmission() {
    console.log("You clicked me!");
}

export default function Form() {
    return (
        <aside className="form">
            <General/>
            <Education/>
            <Experience/>
            <Button text={"Submit"} onClick={handleSubmission}/>
        </aside>
    )
}