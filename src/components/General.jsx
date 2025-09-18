import Button from "./Button.jsx";

export default function General() {
    return (
        <section className="general-info">
            <h2>General Information</h2>
            <div className="inputs">
                <div className="input-newline">
                    <label htmlFor="name">Name </label>
                    <input id="name" type="text"></input>
                </div>

                <div className="input-newline">
                    <label htmlFor="email">Email </label>
                    <input id="email" type="email"></input>
                </div>

                <div className="input-newline">
                    <label htmlFor="phoneNumber">Phone Number </label>
                    <input id="phoneNumber" type="tel" maxLength="15"></input>
                </div>

                <div className="input-inline">
                    <p>Links</p>
                    <Button text="+ Add Link" type="secondary"/>
                </div>
            </div>
        </section>
    );
}