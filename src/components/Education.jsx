import {useState} from "react";
import Date from "./Date.jsx";

export default function Education() {
    const [currentStartDate, setCurrentStartDate] = useState("");

    function changeDate(event, stateSetter) {
        stateSetter(event.target.value);
    }

    return (
        <section className="general-info">
            <h2>Educational Experience</h2>
            <div className="inputs">
                <div className="input-newline">
                    <label htmlFor="schoolName">School name</label>
                    <input id="schoolName" type="text"></input>
                </div>
                <div className="input-newline">
                    <label htmlFor="studyName">Study Name <span>ex. Computer Science, Biology, etc.</span></label>
                    <input id="studyName" type="text"></input>
                </div>
                <Date startDateTitle="Study Date Start" endDateTitle="Study Date End"/>
            </div>
        </section>
    )
}