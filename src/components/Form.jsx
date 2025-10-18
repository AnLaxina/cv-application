import General from "./General.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";
import Preview from "./Preview.jsx";

import "../styles/general.css";
import {useState} from "react";


export default function Form() {
    const [data, setData] = useState({General: {}, Education: {}, Experience: {}});
    const [currentSection, setSection] = useState(0);
    const sections = [<General submitMethod={addFormDataToList} moveMethod={moveSection}/>,
        <Education submitMethod={addFormDataToList} moveMethod={moveSection}/>,
        <Experience submitMethod={addFormDataToList} moveMethod={moveSection}/>,
        <Preview data={data} editFormDataMethod={addFormDataToList}/>];

    const isEnd = currentSection >= sections.length - 1;

    function moveSection(forward = true) {
        if (!isEnd && forward) {
            setSection(currentSection + 1);
        } else if (!forward) {
            setSection(currentSection - 1);
        }
    }

    function addFormDataToList(formData, objectType) {
        const formEntries = Object.fromEntries(formData.entries());
        setData(prevData => ({
            ...prevData,
            [objectType]: {
                ...prevData[objectType],
                ...formEntries
            },
        }));
    }

    return (
        <aside className="form">
            {sections[currentSection]}
        </aside>
    )
}