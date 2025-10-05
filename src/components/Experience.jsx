import Date from "./Date.jsx";
import Button from "./Button.jsx";
import handleSubmit from "../utils/handleSubmit.js";

export default function Experience({submitMethod = formData => console.log(formData), moveMethod}) {
    return (
        <section className="general-info">
            <h2>Professional Experience</h2>
            <form className="inputs" onSubmit={(event) => handleSubmit(event, submitMethod, moveMethod)}>
                <div className="input-newline">
                    <label htmlFor="companyName">Company name</label>
                    <input id="companyName" type="text" name="companyName" placeholder="ChickenSoft"
                           required={true}></input>
                </div>
                <div className="input-newline">
                    <label htmlFor="positionName">Position name</label>
                    <input id="positionName" type="text" name="positionName" placeholder="Manager of Chicken"
                           required={true}></input>
                </div>
                <div className="input-newline">
                    <label htmlFor="responsibilities">Responsibilities</label>
                    <textarea id="responsibilities" placeholder="Ate lots of chicken! " required={true}></textarea>
                </div>

                <Date startDateTitle="Date Start" endDateTitle="Date End" showPresentOption={true}/>

                <div className="input-inline">
                    <Button text="Next" type="submit"/>
                </div>
            </form>
        </section>
    )
}