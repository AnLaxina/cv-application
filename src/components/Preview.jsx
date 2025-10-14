export default function Preview({data}) {
    function addSection(sectionName) {
        const entries = Object.entries(data[sectionName]);
        return entries.map((entry) => {
            return sectionLayout(entry[0], entry[1]);
        });
    }

    function sectionLayout(fieldName, fieldValue) {
        return (
            <div key={fieldName}>
                <p>{fieldName}</p>
                <p>{fieldValue}</p>
            </div>

        );
    }

    return (
        <section className="general-info">
            <h2>General</h2>
            {addSection("General")}

            <h2>Education</h2>
            {addSection("Education")}

            <h2>Experience</h2>
            {addSection("Experience")}
        </section>
    );
}