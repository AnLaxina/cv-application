import Button from "./Button.jsx";
import General from "./General.jsx";

import "../styles/general.css";

function handleSubmission() {
    console.log("You clicked me!");
}

export default function Form() {
    return (
        <aside className="form">
            <General/>
            <Button text={"Submit"} onClick={handleSubmission}/>
        </aside>
    )
}