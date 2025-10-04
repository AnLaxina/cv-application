import {useState} from "react";

export default function Date({startDateTitle, endDateTitle, showPresentOption = false}) {
    const [currentStartDate, setCurrentStartDate] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);

    function changeDate(event, stateSetter) {
        stateSetter(event.target.value);
    }

    function changeIsDisabled() {
        setIsDisabled(!isDisabled);
    }

    if (showPresentOption) {
        return (
            <div className="input-inline">
                <label htmlFor="studyStart">{startDateTitle}</label>
                <input id="studyStart" type="date" name="studyStart" onChange={(event) => {
                    changeDate(event, setCurrentStartDate);
                }} required={true}></input>

                <label htmlFor="studyEnd">{endDateTitle}</label>
                <input id="studyEnd" type="date" name="studyEnd" min={currentStartDate} disabled={isDisabled}
                       required={true}></input>


                <label htmlFor="currentChoice">Present</label>
                <input id="currentChoice" type="checkbox" name="current" value="Current" onChange={changeIsDisabled}/>
            </div>
        );
    } else {
        return (
            <div className="input-inline">
                <label htmlFor="studyStart">{startDateTitle}</label>
                <input id="studyStart" type="date" name="studyStart" onChange={(event) => {
                    changeDate(event, setCurrentStartDate);
                }} required={true}></input>

                <label htmlFor="studyEnd">{endDateTitle}</label>
                <input id="studyEnd" type="date" name="studyEnd" min={currentStartDate} required={true}></input>
            </div>
        )
    }


}