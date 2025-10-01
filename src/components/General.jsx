import Button from "./Button.jsx";

export default function General({submitMethod = formData => console.log(formData)}) {

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        submitMethod(formData);
    }

    return (
        <section className="general-info">
            <h2>General Information</h2>
            <form className="inputs" onSubmit={handleSubmit}>
                <div className="input-newline">
                    <label htmlFor="name">Name </label>
                    <input id="name" name="name" type="text" required={true} placeholder="chicken"></input>
                </div>

                <div className="input-newline">
                    <label htmlFor="email">Email </label>
                    <input id="email" name="email" type="email" required={true} placeholder="chicken@gmail.com"></input>
                </div>

                <div className="input-newline">
                    <label htmlFor="phoneNumber">Phone Number </label>
                    <input id="phoneNumber" name="phoneNumber" type="tel" maxLength="15" required={true}
                           placeholder="123-456-7890"></input>
                </div>

                <div className="input-inline">
                    <Button text="Next" type="submit"/>
                </div>
            </form>
        </section>
    );
}