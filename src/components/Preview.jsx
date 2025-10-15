import "../styles/preview.css";
import Button from "./Button.jsx";

export default function Preview({data}) {
    function addSection(sectionName) {
        const entries = Object.entries(data[sectionName]);
        return entries.map((entry) => {
            // entry[0] = the field name
            // entry[1] = the field value
            return sectionLayout(entry[0], entry[1]);
        });
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
                    <Button text="" type="editIcon" onClick={() => console.log("Edit Time!")}/>
                </div>
                {addSection("General")}
            </div>

            <div className="section-container">
                <div className="section-header">
                    <h2>Education</h2>
                    <Button text="" type="editIcon" onClick={() => console.log("Hello")}/>
                </div>
                {addSection("Education")}
            </div>

            <div className="section-container">
                <div className="section-header">
                    <h2>Experience</h2>
                    <Button text="" type="editIcon" onClick={() => console.log("Hello")}/>
                </div>
                {addSection("Experience")}
            </div>
        </section>
    );
}