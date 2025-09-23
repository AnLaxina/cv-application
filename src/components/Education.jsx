export default function Education() {
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
                <div className="input-inline">
                    <label htmlFor="studyStart">Study Date Start</label>
                    <input id="studyStart" type="date"></input>
                    <label htmlFor="studyEnd">Study Date End</label>
                    <input id="studyEnd" type="date"></input>
                </div>
            </div>
        </section>
    )
}