import Date from "./Date.jsx";
import Button from "./Button.jsx";
import handleSubmit from "../utils/handleSubmit.js";

export default function Education({submitMethod = formData => console.log(formData), moveMethod}) {

    return (
        <section className="general-info">
            <h2>Educational Experience</h2>
            <form className="inputs" onSubmit={(event) => handleSubmit(event, submitMethod, moveMethod, "Education")}>
                <div className="input-newline">
                    <label htmlFor="schoolName">School name</label>
                    <input id="schoolName" name="School Name" type="text" placeholder="University of Chicken"
                           required={true}></input>
                </div>
                <div className="input-newline">
                    <label htmlFor="studyName">Study Name</label>
                    <input id="studyName" name="Name of Study" type="text" placeholder="Biology"
                           required={true}></input>
                </div>
                <Date startDateTitle="Study Date Start" endDateTitle="Study Date End" showPresentOption={true}
                      attributeNames={["Study Date Start", "Study Date End"]}/>

                <div className="input-inline">
                    <Button text="Next" type="submit"/>
                </div>
            </form>
        </section>
    )
}