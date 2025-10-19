import General from "./General.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";
import Preview from "./Preview.jsx";

import "../styles/general.css";
import {useState} from "react";
import jsPDF from "jspdf";


export default function Form() {
    const [data, setData] = useState({General: {}, Education: {}, Experience: {}});
    const [currentSection, setSection] = useState(0);
    const sections = [<General submitMethod={addFormDataToList} moveMethod={moveSection}/>,
        <Education submitMethod={addFormDataToList} moveMethod={moveSection}/>,
        <Experience submitMethod={addFormDataToList} moveMethod={moveSection}/>,
        <Preview submitMethod={exportPDF} data={data} editFormDataMethod={addFormDataToList}/>];

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

    function exportPDF() {
        const doc = new jsPDF();
        let x = 20;
        let y = 20;
        const date = new Date();
        // Add 1 to getMonth() because the first month actually returns a 0??
        const fullDate = `-${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`

        function writeSection(title) {
            // Adding the header title
            doc.setFontSize(16);
            doc.setFont("helvetica", "bold")
            doc.text(title, x, y);
            y += 10;

            // Adding the body for each section
            doc.setFontSize(12);
            doc.setFont("helvetica", "normal");
            const entries = Object.entries(data[title]);
            for (const [key, value] of entries) {
                doc.text(`${key}:   ${value}`, x, y);
                y += 8;
            }
            y += 10;
        }

        writeSection("General");
        writeSection("Education");
        writeSection("Experience");
        doc.save("CV-Application" + fullDate);
    }

    return (
        <aside className="form">
            {sections[currentSection]}
        </aside>
    )
}