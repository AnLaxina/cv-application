import "../styles/preview.css";
import Button from "./Button.jsx";
import General from "./General.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";
import {useState} from "react";

export default function Preview({data, editFormDataMethod, submitMethod}) {
    const [shouldEditGeneral, setShouldEditGeneral] = useState(false);
    const [shouldEditEducation, setShouldEditEducation] = useState(false);
    const [shouldEditExperience, setShouldEditExperience] = useState(false);

    function addSection(sectionName) {
        const entries = Object.entries(data[sectionName]);
        return entries.map((entry) => {
            // entry[0] = the field name
            // entry[1] = the field value
            return sectionLayout(entry[0], entry[1]);
        });
    }

    function editSection(sectionName) {
        switch (sectionName) {
            case "General":
                setShouldEditGeneral(!shouldEditGeneral);
                break;
            case "Education":
                setShouldEditEducation(!shouldEditEducation);
                break;
            case "Experience":
                setShouldEditExperience(!shouldEditExperience);
                break;
        }
    }

    function sectionLayout(fieldName, fieldValue) {
        return (
            <div className="preview-data" key={fieldName}>
                <p id="field-name">{fieldName}</p>
                <p>{fieldValue}</p>
            </div>

        );
    }

    return (
        <section className="general-info">
            <h2>Preview & Summary</h2>
            <div className="section-container">
                <div className="section-header">
                    <h2>General</h2>
                    <Button text="" type="editIcon" onClick={() => editSection("General")}/>
                </div>
                {shouldEditGeneral ?
                    <General buttonText="Done"
                             submitMethod={editFormDataMethod}
                             moveMethod={() => editSection("General")}
                    /> : addSection("General")}
            </div>

            <div className="section-container">
                <div className="section-header">
                    <h2>Education</h2>
                    <Button text="" type="editIcon" onClick={() => editSection("Education")}/>
                </div>
                {shouldEditEducation ? <Education buttonText="Done" submitMethod={editFormDataMethod}
                                                  moveMethod={() => editSection("Education")}/> :
                    addSection("Education")}
            </div>

            <div className="section-container">
                <div className="section-header">
                    <h2>Experience</h2>
                    <Button text="" type="editIcon" onClick={() => editSection("Experience")}/>
                </div>
                {shouldEditExperience ? <Experience buttonText="Done" submitMethod={editFormDataMethod}
                                                    moveMethod={() => editSection("Experience")}/> :
                    addSection("Experience")}
            </div>
            <Button text="Export PDF" onClick={() => submitMethod(document.querySelector("#pdf-submission"))}/>
        </section>
    );
}