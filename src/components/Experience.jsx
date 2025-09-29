import Date from "./Date.jsx";

export default function Experience() {
    return (
        <section className="general-info">
            <h2>Professional Experience</h2>
            <div className="inputs">
                <div className="input-newline">
                    <label htmlFor="companyName">Company name</label>
                    <input id="companyName" type="text"></input>
                </div>
                <div className="input-newline">
                    <label htmlFor="positionName">Position name</label>
                    <input id="positionName" type="text"></input>
                </div>
                <div className="input-newline">
                    <label htmlFor="responsibilities">Responsibilities</label>
                    <textarea id="responsibilities"></textarea>
                </div>

                <Date startDateTitle="Date Start" endDateTitle="Date End" showPresentOption={true}/>
            </div>
        </section>
    )
}