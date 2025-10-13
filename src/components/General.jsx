import Button from "./Button.jsx";
import handleSubmit from "../utils/handleSubmit.js";

export default function General({submitMethod = formData => console.log(formData), moveMethod}) {
    return (
        <section className="general-info">
            <h2>General Information</h2>
            <form className="inputs" onSubmit={(event) => handleSubmit(event, submitMethod, moveMethod, "General")}>
                <div className="input-newline">
                    <label htmlFor="name">Name </label>
                    <input id="name" name="Name" type="text" required={true} placeholder="chicken"></input>
                </div>

                <div className="input-newline">
                    <label htmlFor="email">Email </label>
                    <input id="email" name="Email" type="email" required={true} placeholder="chicken@gmail.com"></input>
                </div>

                <div className="input-newline">
                    <label htmlFor="phoneNumber">Phone Number </label>
                    <input id="phoneNumber" name="Phone Number" type="tel" maxLength="15" required={true}
                           placeholder="123-456-7890"></input>
                </div>

                <div className="input-inline">
                    <Button text="Next" type="submit"/>
                </div>
            </form>
        </section>
    );
}