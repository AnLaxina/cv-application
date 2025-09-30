import Button from "./Button.jsx";

export default function General({submitMethod = () => console.log("chicken")}) {
    return (
        <section className="general-info">
            <h2>General Information</h2>
            <form className="inputs" onSubmit={submitMethod}>
                <div className="input-newline">
                    <label htmlFor="name">Name </label>
                    <input id="name" type="text" required={true} placeholder="chicken"></input>
                </div>

                <div className="input-newline">
                    <label htmlFor="email">Email </label>
                    <input id="email" type="email" required={true} placeholder="chicken@gmail.com"></input>
                </div>

                <div className="input-newline">
                    <label htmlFor="phoneNumber">Phone Number </label>
                    <input id="phoneNumber" type="tel" maxLength="15" required={true}
                           placeholder="123-456-7890"></input>
                </div>

                <div className="input-inline">
                    <Button text="Next" type="submit"/>
                </div>
            </form>
        </section>
    );
}