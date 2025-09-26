import {useState} from "react";

export default function Date({startDateTitle, endDateTitle}) {
    const [currentStartDate, setCurrentStartDate] = useState("");

    function changeDate(event, stateSetter) {
        stateSetter(event.target.value);
    }

    return (
        <div className="input-inline">
            <label htmlFor="studyStart">{startDateTitle}</label>
            <input id="studyStart" type="date" name="studyStart" onChange={(event) => {
                changeDate(event, setCurrentStartDate);
            }}></input>

            <label htmlFor="studyEnd">{endDateTitle}</label>
            <input id="studyEnd" type="date" name="studyEnd" min={currentStartDate}></input>
        </div>
    );

}